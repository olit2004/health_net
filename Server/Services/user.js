import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";






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
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      phone: true,
      status: true,
      createdAt: true,
      updatedAt: true,

      patient: {
        select: {
          dob: true,
          gender: true,
          address: true,
          insuranceStatus: true,
          emergencyInfo: {
            select: {
              bloodType: true,
              allergies: true,
              chronicDiseases: true,
              emergencyContact: true,
              lastUpdatedAt: true,
            },
          },
        },
      },
      doctor: {
        select: {
          specialization: true,
          licenseNo: true,
          email: true,
          phone: true,
          doctorFacilities: {
            select: {
              facility: {
                select: {
                  id: true,
                  name: true,
                  facilityType: true,
                  locationAddress: true,
                },
              },
            },
          },
        },
      },
      admin: {
        select: {
          adminLevel: true,
          department: true,
          facility: {
            select: {
              id: true,
              name: true,
              facilityType: true,
            },
          },
        },
      },
    },
  });
}




export async function createUserWithProfile({userData, facilityId}) {
  const { password, role, firstName, lastName, email, phone, ...profileData } = userData;

  // 1. Hash the password
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    return await prisma.$transaction(async (tx) => {
      // 2. Create the base User
      const user = await tx.user.create({
        data: {
          firstName,
          lastName,
          email,
          passwordHash,
          phone,
          role,
        },
      });

      // 3. Role-specific profile
      switch (role) {
        case "PATIENT":
          await tx.patient.create({
            data: {
              userId: user.id,
              upi: `HN-${Math.floor(100000 + Math.random() * 900000)}-${user.id}`,
              dob: profileData.dob,
              gender: profileData.gender,
              address: profileData.address,
              insuranceStatus: profileData.insuranceStatus,
            },
          });
          break;

        case "DOCTOR":
          const doctor = await tx.doctor.create({
            data: {
              userId: user.id,
              specialization: profileData.specialization,
              licenseNo: profileData.licenseNo,
            },
          });

          // Associate doctor with facilities via join table
          if (facilityId) {
            await tx.doctorFacility.create({
              data: {
                doctorId: doctor.id,
                facilityId,
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
              adminLevel: profileData.adminLevel || "STAFF", // must match enum
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
    console.error("Error creating user with profile:", err);
    throw err;
  }
}




export async function loginService({email, password}) {

  const user = await prisma.user.findUnique({
    where: { email },
    include: { admin: true, doctor: true, patient: true },
  });

  if (!user) {
    throw new Error("Invalid email or password");
  }


  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    throw new Error("Invalid email or password");
  }
  const {password :admin_password,...safeUser} = user
  return user;
 

}





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






export async function inactivateUserById(id) {
  const userId = Number(id);

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, status: true },
  });

  if (!user) {
    throw new Error("User not found");
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
  return prisma.user.update({
    where: { id: Number(id) },
    data: {
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      phone: profileData.phone,
      // address and emergencyContact live in Patient relation
      patient: profileData.address || profileData.emergencyContact
        ? {
            update: {
              address: profileData.address,
              emergencyInfo: profileData.emergencyContact
                ? {
                    upsert: {
                      update: { emergencyContact: profileData.emergencyContact },
                      create: { emergencyContact: profileData.emergencyContact },
                    },
                  }
                : undefined,
            },
          }
        : undefined,
    },
    include: {
      patient: { include: { emergencyInfo: true } },
    },
  });
}