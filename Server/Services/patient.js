 // the service level is the  here we are going to define functions  that are going to actually talk to the database 

// so we will implement the following function and more that as the need arises  the cotroler is goin to  use the services we  have defined here


//   # getMyFullRecord(patientId), 
// getPatientForDoctor(doctorId, patientId) → joins diagnoses + labs


//  and more 

import prisma from "../lib/prisma.js";

// List patients with pagination + search
export async function listPatients(page = 1, limit = 20, search = "") {
  const skip = (page - 1) * limit;

  return prisma.patient.findMany({
    skip,
    take: limit,
    where: search
      ? {
          OR: [
            { user: { firstName: { contains: search, mode: "insensitive" } } },
            { user: { lastName: { contains: search, mode: "insensitive" } } },
            { user: { email: { contains: search, mode: "insensitive" } } },
            { upi: { contains: search, mode: "insensitive" } },
          ],
        }
      : {},
    include: {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          status: true,
        },
      },
      emergencyInfo: true,
    },
  });
}

// Get patient details
export async function getPatientById(id) {
  return prisma.patient.findUnique({
    where: { id: Number(id) },
    include: {
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          role: true,
          status: true,
        },
      },
      emergencyInfo: true,
      diagnoses: true,
      appointments: true,
      labResults: true,
    },
  });
}

// Update patient information (Doctor only)
export async function updatePatient(id, patientData) {
  return prisma.patient.update({
    where: { id: Number(id) },
    data: {
      dob: patientData.dob,
      gender: patientData.gender,
      address: patientData.address,
      insuranceStatus: patientData.insuranceStatus,
      emergencyInfo: patientData.emergencyContact
        ? {
            upsert: {
              update: { emergencyContact: patientData.emergencyContact },
              create: { emergencyContact: patientData.emergencyContact },
            },
          }
        : undefined,
    },
    include: {
      user: true,
      emergencyInfo: true,
    },
  });
}

 
 
