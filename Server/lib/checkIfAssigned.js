import prisma from "./prisma.js";


export default async function checkIfAssigned (doctorId, patientId) {

  const assignment = await prisma.assignment.findFirst({
    where: {
      patientId: Number(patientId),
      doctorId: doctorId,
      status: "ACTIVE",
    },
  });

  if (!assignment) {
    throw new Error("Unauthorized: No active assignment between doctor and patient");
  }
  return assignment;
}