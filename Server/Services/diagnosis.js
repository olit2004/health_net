import prisma from "../lib/prisma.js";
import validateAssignment   from "../lib/checkIfAssigned.js"



// 1. Create  we should   infer the facility id

export async function createDiagnosis({
  patientId,
  userId,
  symptoms,
  disease_name,
  medications,
  suggestions,
  conclusion,
 
}) 
{
  const doctor = await prisma.doctor.findUnique({
    where: { userId: Number(userId) }
  });

  if (!doctor) {
    throw new Error("Unauthorized: User is not a doctor");
  }

  const assignment = await validateAssignment(doctor.id, Number(patientId));

  return prisma.diagnosis.create({
    data: {
      symptoms,
      disease_name,
      medications,
      suggestions,
      conclusion,
      emergencyVisibilty: false,

      patient: {
        connect: { id: Number(patientId) }
      },
      doctor: {
        connect: { id: doctor.id }
      },
      facility: {
        connect: {
          id: assignment.facilityId
        }
      }
    }
  });
}


// 2. Get All Diagnoses for a Patient
export async function getPatientDiagnoses({ patientId, user }) {
  if (user.role === "PATIENT" && user.patient.id !== Number(patientId)) {
    
    throw new Error("Unauthorized: Patients can only view their own diagnoses");
  }

  if (user.role === "DOCTOR") {
   

     const doctor = await prisma.doctor.findUnique({ where: { userId: Number(user.id) } });
     if (!doctor) throw new Error("Unauthorized: User is not a doctor");

   
    await validateAssignment(doctor.id, patientId);
  }

  return prisma.diagnosis.findMany({
    where: { patientId: Number(patientId) },
    include: {
      patient: { include: { user: true } },
      doctor: { include: { user: true } },
      facility: true,
    },
  });
}

// 3. Get Single Diagnosis by ID
export async function getDiagnosisById({ id, user }) {
  const diagnosis = await prisma.diagnosis.findUnique({
    where: { id: Number(id) },
    include: { patient: true },
  });

  if (!diagnosis) throw new Error("Diagnosis not found");

  if (user.role === "PATIENT" && diagnosis.patient.userId !== user.id) {
    throw new Error("Unauthorized");
  }
  
  if (user.role === "DOCTOR") {
    
    const doctor = await prisma.doctor.findUnique({ where: { userId: Number(user.id) } });
     if (!doctor) throw new Error("Unauthorized: User is not a doctor");
      await validateAssignment(doctor.id, diagnosis.patientId);
  }

  return diagnosis;
}



export async function updateDiagnosis({ id, user, data }) {
  // 1️ Find diagnosis
  const diagnosis = await prisma.diagnosis.findUnique({
    where: { id: Number(id) }
  });

  if (!diagnosis) {
    throw new Error("Diagnosis not found");
  }

  // 2️ Ensure user is doctor
  if (user.role !== "DOCTOR") {
    throw new Error("Unauthorized: Only doctors can update diagnoses");
  }

  const doctor = await prisma.doctor.findUnique({
    where: { userId: Number(user.id) }
  });

  if (!doctor) {
    throw new Error("Unauthorized: User is not a doctor");
  }

  // 3️ Ensure same doctor
  if (diagnosis.doctorId !== doctor.id) {
    throw new Error("Unauthorized: Only the original doctor can update this");
  }

  // 4️ Validate doctor ↔ patient assignment
  await validateAssignment(doctor.id, diagnosis.patientId);

  // 5 Update diagnosis
  return prisma.diagnosis.update({
    where: { id: Number(id) },
    data
  });
}



// 5. Delete Diagnosis
export async function deleteDiagnosis({ id, user }) {
  const diagnosis = await prisma.diagnosis.findUnique({ where: { id: Number(id) } });
  if (!diagnosis) throw new Error("Diagnosis not found");

     let doctorid 
  if (!diagnosis) throw new Error("Diagnosis not found");
        const doctor = await prisma.doctor.findUnique({ where: { userId: Number(user.id) } });
        doctorid = doctor.id
        if (!doctor) throw new Error("Unauthorized: User is not a doctor");
       await validateAssignment(doctor.id, diagnosis.patientId);

  if (user.role !== "DOCTOR" || diagnosis.doctorId !== doctorid) {
    throw new Error("Unauthorized");
  }

  

  return prisma.diagnosis.delete({ where: { id: Number(id) } });
}

// diagnoses.service.js

export async function toggleEmergencyVisibility({ id, user }) {
  //  Find diagnosis
  const diagnosis = await prisma.diagnosis.findUnique({
    where: { id: Number(id) }
  });

  if (!diagnosis) {
    throw new Error("Diagnosis not found");
  }

 
  return prisma.diagnosis.update({
    where: { id: diagnosis.id },
    data: {
      emergencyVisibilty: !diagnosis.emergencyVisibilty
    }
  });
}
