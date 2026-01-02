
import prisma from "../lib/prisma.js";
import checkIfAssigned from "../lib/checkIfAssigned.js"




// 1. Create Appointment (Doctor only)


export async function createAppointment({ userId, patientId,  dateTime, duration, reason }) {
  // Find doctor record from user ID
  const doctor = await prisma.doctor.findUnique({
    where: { userId: Number(userId) }
  });
  if (!doctor) throw new Error("Unauthorized: Only doctors can create appointments");


  const assignment= await checkIfAssigned(doctor.id, patientId);
 
  const startTime = new Date(dateTime);
  const endTime = new Date(startTime.getTime() + duration * 60000); // duration in minutes


  return prisma.appointment.create({
    data: {
      doctorId: doctor.id,
      patientId: Number(patientId),
      facilityId: assignment.facilityId,
      startTime,
      endTime,
      reason,
      status: "SCHEDULED"
    },
    include: {
      patient: { include: { user: true } },
      facility: true,
      doctor: true
    }
  });
}


// 2. Get Appointments for the logged-in user
export async function getMyAppointments(user) {
  const { id, role } = user;

  switch (role) {
    case 'DOCTOR':
      return await prisma.appointment.findMany({
        where: { doctor: { userId: id } },
        include: { patient: { include: { user: true } }, facility: true },
        orderBy: { dateTime: 'asc' }
      });

    case 'PATIENT':
      return await prisma.appointment.findMany({
        where: { patient: { userId: id } },
        include: { doctor: { include: { user: true } }, facility: true },
        orderBy: { dateTime: 'asc' }
      });

    default:
      throw new Error("Role not authorized to view appointments");
  }
}

// 3. Update Appointment Status (e.g., Cancel or Complete)
export async function updateAppointmentStatus({ id, status, user }) {
  const appointment = await prisma.appointment.findUnique({
    where: { id: Number(id) },
    include: { doctor: true, patient: true }
  });

  if (!appointment) throw new Error("Appointment not found");


  const isDoctor = appointment.doctor.userId === user.id;
  const isPatient = appointment.patient.userId === user.id;

  if (!isDoctor && !isPatient) throw new Error("Unauthorized");

  if (status === "COMPLETED" && !isDoctor) {
    throw new Error("Only doctors can mark appointments as completed");
  }

  return prisma.appointment.update({
    where: { id: Number(id) },
    data: { status }
  });
}