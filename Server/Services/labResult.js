import prisma from "../lib/prisma.js";

import validateAssignment  from "../lib/checkIfAssigned.js"
// 1. Create Lab Result  

export async function createLabResult({ patientId, doctorId, facilityId, createdById, filePath, resultType }) {
return prisma.labResult.create({
    data: {
      patientId: Number(patientId),
      doctorId: doctorId ? Number(doctorId) : null,
      facilityId: Number(facilityId),
      createdById: Number(createdById),
      filePath,
      resultType,
    },
  });
}

export async function getPatientLabResults({ patientId, user }) {
  const pId = Number(patientId);
  if (!Number.isInteger(pId)) {
    throw new Error("Invalid patientId");
  }

  if (user.role === "PATIENT") {
    const patient = await prisma.patient.findUnique({
      where: { userId: user.id },
      select: { id: true },
    });

    if (!patient || patient.id !== pId) {
      throw new Error("Forbidden: You can only view your own lab results");
    }
  }

  if (user.role === "DOCTOR") {
    const doctor = await prisma.doctor.findUnique({
      where: { userId: user.id },
      select: { id: true },
    });

    if (!doctor) {
      throw new Error("Unauthorized: Doctor profile not found");
    }

    await validateAssignment(doctor.id, pId);
  }



  return prisma.labResult.findMany({
    where: { patientId: pId },
    include: {
      doctor: { include: { user: true } },
      createdBy: true,
      facility: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function getLabResultById({ id, user }) {
  const labResultId = Number(id);
  if (!Number.isInteger(labResultId)) {
    throw new Error("Invalid lab result ID");
  }

  const result = await prisma.labResult.findUnique({
    where: { id: labResultId },
    include: {
      patient: true,
    },
  });

  if (!result) {
    throw new Error("Lab result not found");
  }

  
  if (user.role === "PATIENT") {
    const patient = await prisma.patient.findUnique({
      where: { userId: user.id },
      select: { id: true },
    });

    if (!patient || patient.id !== result.patientId) {
      throw new Error("Forbidden");
    }
  }


  if (user.role === "DOCTOR") {
    const doctor = await prisma.doctor.findUnique({
      where: { userId: user.id },
      select: { id: true },
    });

    if (!doctor) {
      throw new Error("Unauthorized");
    }

    await validateAssignment(doctor.id, result.patientId);
  }


  if (user.role === "ADMIN") {
    return result;
  }

 
  if (!["PATIENT", "DOCTOR", "ADMIN"].includes(user.role)) {
    throw new Error("Forbidden");
  }

  return result;
}

