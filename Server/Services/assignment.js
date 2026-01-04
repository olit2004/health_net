// services/assignmentService.js
import prisma from "../lib/prisma.js";




// Create assignment
export async function createAssignment(doctorId, patientId, adminId,facilityId) {
  return prisma.assignment.create({
    data: {
      doctorId: Number(doctorId),
      patientId: Number(patientId),
      assignedById: Number(adminId),
      facilityId:Number(facilityId)
    },
    include: {
      doctor: { include: { user: true } },
      patient: { include: { user: true } },
      assignedBy: { include: { user: true } },
    },
  });
}

// Delete assignment (only if created by this admin)
export async function deleteAssignment(id, adminId) {
  const assignment = await prisma.assignment.findUnique({
    where: { id: Number(id) },
    select: { assignedById: true },
  });

  if (!assignment) {
    throw new Error("Assignment not found");
  }

  if (assignment.assignedById !== Number(adminId)) {
    throw new Error("Forbidden: you can only delete assignments you created");
  }

  return prisma.assignment.delete({ where: { id: Number(id) } });
}



export async function getAssignmentsByUser   (user)  {
  const { id, role } = user;
  const userfromDB = await prisma.user.findUnique(
   { where:{id}}
)
    if (role!=userfromDB.role){
        throw new Error (" the data inconsistent  you are anuthorized ")
    }

  switch (role) {
    case 'ADMIN':
      // Get assignments created by this admin
      return await prisma.assignment.findMany({
        where: {
          assignedBy: { userId: id }
        },
        include: {
          doctor: { include: { user: true } },
          patient: { include: { user: true } }
        }
      });

    case 'DOCTOR':
      // Get assignments where this user is the doctor
      return await prisma.assignment.findMany({
        where: {
          doctor: { userId: id }
        },
        include: {
          patient: { include: { user: true } },
          assignedBy: { include: { facility: true } }
        }
      });

    case 'PATIENT':
      // Get assignments where this user is the patient
      return await prisma.assignment.findMany({
        where: {
          patient: { userId: id }
        },
        include: {
          doctor: { include: { user: true } }
        }
      });

    default:
      return [];
  }
};
