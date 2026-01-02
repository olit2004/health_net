import prisma from "../lib/prisma.js";




export async function upsertEmergencyInfo(userId, data) {
  // 1. Resolve patient from logged-in user
  const patient = await prisma.patient.findUnique({
    where: { userId: Number(userId) },
    select: { id: true }
  });

  if (!patient) {
    throw new Error("Patient profile not found");
  }

  // 2. Upsert emergency info
  return prisma.emergencyInfo.upsert({
    where: { patientId: patient.id },
    update: data,
    create: {
      ...data,
      patientId: patient.id,
    },
  });
}

/**
 * Public access via QR token
 */
export async function getEmergencyByToken(qrToken) {
  const patient = await prisma.patient.findUnique({
    where: { qrToken },
    include: {
      emergencyInfo: true,
      user: {
        select: {
          firstName: true,
          lastName: true,
          phone: true,
        },
      },
    },
  });

  if (!patient) {
    throw new Error("Invalid or expired QR token");
  }

  if (!patient.emergencyInfo) {
    throw new Error("No emergency information available");
  }

  return {
    name: `${patient.user.firstName} ${patient.user.lastName}`,
    phone: patient.user.phone,
    emergencyInfo: patient.emergencyInfo,
  };
}
