import prisma from "../lib/prisma.js";
import validateAssignment from "../lib/checkIfAssigned.js";

// Create allergy record
export async function createAllergy({ patientId, doctorId, allergey, severity, notes }) {
  
  const doctor = await prisma.doctor.findUnique({ where: { userId: Number(doctorId) } });
  if (!doctor) throw new Error("Unauthorized: User is not a doctor");

  await validateAssignment(doctor.id, Number(patientId));

  return prisma.allergy.create({
    data: {
      patientId: Number(patientId),
      allergey,
      severity,
      notes: notes || null
    }
  });
}


export async function getPatientAllergies({ patientId, user }) {
  const pId = Number(patientId);

  if (user.role === "PATIENT") {
    const patient = await prisma.patient.findUnique({
      where: { userId: user.id },
      select: { id: true }
    });

    if (!patient || patient.id !== pId) {
      throw new Error("Forbidden: You can only view your own allergies");
    }
  }

  if (user.role === "DOCTOR") {
    const doctor = await prisma.doctor.findUnique({
      where: { userId: user.id },
      select: { id: true }
    });

    if (!doctor) throw new Error("Unauthorized: Doctor profile not found");

    await validateAssignment(doctor.id, pId);
  }

  return prisma.allergy.findMany({
    where: { patientId: pId },
    orderBy: { id: "desc" } 
  });
}
