import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";
import { generateQrToken } from "../lib/generateToken.js"
import  generateId from "../lib/generateId.js"
import crypto from 'crypto';
import sendEmail from '../lib/email.js';
import { AdminLevel } from "../generated/prisma/index.js";




// helper function  
export async function getAdmin(id) {
  const admin = await prisma.admin.findUnique({
    where: { userId:id },
    select: {
      facilityId : true,
      adminLevel: true,
    },
  });

  return admin;
}



// service to retrieve the user information form the data dase 


export async function getMyProfile(userId) {
  return prisma.user.findUnique({
    where: { id: Number(userId) },
    include:{patient:true,doctor:true,admin:true}

  });
}




// register the user with specific role 
export async function createUserWithProfile({ userData, facilityId }) {
  const { password, role, firstName, lastName, email, phone, ...profileData } = userData;
 

  const identification = generateId(role)
  const passwordHash = await bcrypt.hash(password, 10);



  try {
    return await prisma.$transaction(async (tx) => {
      // 2. Check if user already exists (to handle the doctor-reassignment logic)
      let user = await tx.user.findUnique({ where: { email } });

      if (!user) {
        // Create the base User if they don't exist
        user = await tx.user.create({
          data: {
            userName:identification,
            firstName,
            lastName,
            email,
            passwordHash,
            phone,
            role,
           
          },
        });
      }

      // 3. Role-specific profile logic
      switch (role) {
        case "PATIENT":
          await tx.patient.create({
            data: {
              userId: user.id,
              upi: identification,
              dob: profileData.dob,
              gender: profileData.gender,
              address: profileData.address,
              insuranceStatus: profileData.insuranceStatus?? "UNINSURED",
              qrToken: generateQrToken(), 
            },
          });
          break;

        case "DOCTOR":
          // Find or Create the Doctor record
          let doctor = await tx.doctor.findUnique({ where: { userId: user.id } });
          
          if (!doctor) {
            doctor = await tx.doctor.create({
              data: {
                userId: user.id,
                specialization: profileData.specialization,
                licenseNo: profileData.licenseNo,
                doctorId:identification
              },
            });
          }

          
          if (facilityId) {
            
            await tx.doctorFacility.upsert({
              where: {
                  doctorId_facilityId: {
                  doctorId: doctor.id,
                  facilityId: facilityId,
                },
              },
              update: { status: "active" }, 
              create: {
                doctorId: doctor.id,
                facilityId: facilityId,
              },
            });
          }
          break;

        case "ADMIN":
        case "LAB_TECH":
          await tx.admin.create({
            data: {
              userId: user.id,
              facilityId,
              adminLevel: profileData.adminLevel || "ADMIN",
              department: profileData.department,
            },
          });
          break;

        default:
          throw new Error(`Unsupported role: ${role}`);
      }

      return user;
    });
  } catch (err) {
    console.error("Database Transaction Error:", err);
    throw err;
  }
}



// login the user 
export async function loginService({userName, password}) {

  const user = await prisma.user.findUnique({
    where: { userName },
    include: { admin: true, doctor: true, patient: true },
  });

  if (!user) {
    throw new Error("Invalid username or password");
  }
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    throw new Error("Invalid  userNa or password");
  }
  const {password :admin_password,...safeUser} = user
  return user;
}



// FORGOT PASSWORD SERVICE 

export const forgotPassword = async (email) => {
    // 1. Find user 
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error('No user found with that email address.', 404);

    // 2. Generate random reset token (plain text)
    const resetToken = crypto.randomBytes(32).toString('hex');

    // 3. Hash token and set expiry (10 minutes)
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const expiry = new Date(Date.now() + 10 * 60 * 1000);

    // 4. Save to DB
    await prisma.user.update({
        where: { id: user.id },
        data: {
            passwordResetToken: hashedToken,
            passwordResetExpires: expiry,
        },
    });

    // 5. Send Email
    const resetUrl = `${process.env.FRONTEND_URL}/test-reset.html?token=${resetToken}`;
    const message = `Forgot your password? Reset it here: ${resetUrl}.\nIf you didn't forget your password, please ignore this email!`;
    const html = `
        <div style="font-family: sans-serif; line-height: 1.5;">
            <h2>Password Reset Request</h2>
            <p>Click the button below to reset your password. This link is valid for 10 minutes.</p>
            <a href="${resetUrl}" style="background-color: #2563eb; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
            <p>If the button doesn't work, copy and paste this link: <br> ${resetUrl}</p>
        </div>
    `;

    try {
        await sendEmail({
            email: user.email,
            subject: 'HealthNet Password Reset (Valid for 10 min)',
            message,
            html,
        });
    } catch (err) {
        // If email fails, reset the fields in DB
        await prisma.user.update({
            where: { id: user.id },
            data: { passwordResetToken: null, passwordResetExpires: null },
        });
        throw new AppError('There was an error sending the email. Try again later.', 500);
    }
};


//  RESET PASSWORD SERVICE 
export const resetPassword = async (resetToken, newPassword) => {
    
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

   
    const user = await prisma.user.findFirst({
        where: {
            passwordResetToken: hashedToken,
            passwordResetExpires: { gt: new Date() },
        },
    });

    if (!user) throw new AppError('Token is invalid or has expired.', 400);

  
    const passwordHash = await bcrypt.hash(newPassword, 12);


    await prisma.user.update({
        where: { id: user.id },
        data: {
            passwordHash,
            passwordResetToken: null,
            passwordResetExpires: null,
        },
    });
};


// service to  get all users by the   admin

export async function listUsers({ page = 1, filters = {} }) {
  const take = 20; 
  const skip = (page - 1) * take;

 
  const where = {};
  if (filters.role) {
    where.role = filters.role;
  }
  if (filters.email) {
    where.email = { contains: filters.email, mode: "insensitive" };
  }
  if (filters.firstName) {
    where.firstName = { contains: filters.firstName, mode: "insensitive" };
  }
  if (filters.lastName) {
    where.lastName = { contains: filters.lastName, mode: "insensitive" };
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        createdAt: true,
      },
    }),
    prisma.user.count({ where }),
  ]);

  return {
    users,
    pagination: {
      page,
      pageSize: take,
      total,
      totalPages: Math.ceil(total / take),
    },
  };
}


// get deatiled information about  the  user 
export async function getUserById(id) {
  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { admin: true, doctor: true, patient: true }
  });

  return user;
}



export async function inactivateUserById(id,adminLevel) {
  const userId = Number(id);

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, status: true },
  });

  if (!user) {
    throw new Error("User not found");
  }
  if (user.role="ADMIN"  && adminLevel!="SUPER_ADMIN"){
    throw new Error (" you don't have the authorization to inactivate")
  }
  // Update status to inactive
  return prisma.user.update({
    where: { id: userId },
    data: { status: "inactive" },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      status: true,
      updatedAt: true,
    },
  });
}


// Update user profile (safe fields only)

export async function updateUserProfile(id, profileData) {
  console.log(profileData)
  return prisma.user.update({
    where: { id: Number(id) },
    data: {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      phone: profileData.phone,
      
      // Handle Patient relation
      patient: (profileData.address || profileData.emergencyInfo) 
        ? {
            update: {
              address: profileData.address,
              // Nested EmergencyInfo
              emergencyInfo: profileData.emergencyInfo 
                ? {
                    upsert: {
                      create: {
                        bloodType: profileData.emergencyInfo.bloodType,
                        emergencyContactName: profileData.emergencyInfo.contactName,
                        emergencyContactPhone: profileData.emergencyInfo.contactPhone,
                        emergencyContactRelation: profileData.emergencyInfo.relation,
                      },
                      update: {
                        bloodType: profileData.emergencyInfo.bloodType,
                        emergencyContactName: profileData.emergencyInfo.contactName,
                        emergencyContactPhone: profileData.emergencyInfo.contactPhone,
                        emergencyContactRelation: profileData.emergencyInfo.relation,
                      }
                    }
                  }
                : undefined
            }
          }
        : undefined,
    },
    include: {
      patient: {
        include: { emergencyInfo: true }
      }
    }
  });
}

// update  password service 




export const updatePassword = async (userId, { currentPassword, newPassword }) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new AppError('User not found', 404);

    const isMatch = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!isMatch) throw new AppError('Current password incorrect', 401);

    const newPasswordHash = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
        where: { id: userId },
        data: { passwordHash: newPasswordHash },
    });

    return true;
};
