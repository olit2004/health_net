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