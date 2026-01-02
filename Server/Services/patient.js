 // the service level is the  here we are going to define functions  that are going to actually talk to the database 

// so we will implement the following function and more that as the need arises  the cotroler is goin to  use the services we  have defined here


//   # getMyFullRecord(patientId), 
// getPatientForDoctor(doctorId, patientId) → joins diagnoses + labs


//  and more 

import prisma from "../lib/prisma.js";
import checkIfAssigned from "../lib/checkIfAssigned.js";

// List patients with pagination + search
export async function listPatients(page = 1, limit = 20, search = "") {
  const skip = (page - 1) * limit;

  //  allow searching by username

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
     user: true 
    },
  });
}

// Get patient details


export async function getPatientById(id,user) {

try{
   
   const patient=await prisma.patient.findUnique({
    where: { id: Number(id) },
    include: {
                user:true,
                emergencyInfo:true
  },
  });
  if (user.role==="DOCTOR"){
      await checkIfAssigned(user.id,patient.id)
 }
 }catch(err){
   throw err
 }
  
  return patient
}



// Update patient information (Admin only)

export async function updatePatient(id, patientData) {
  return prisma.patient.update({
    where: { id: Number(id) },
    data: {
      
      dob: patientData.dob ? new Date(patientData.dob) : undefined,
      gender: patientData.gender, 
      address: patientData.address,
      insuranceStatus: patientData.insuranceStatus,

      // Handle Emergency Info nested upsert
      emergencyInfo: patientData.emergencyInfo 
        ? {
            upsert: {
              create: {
                bloodType: patientData.emergencyInfo.bloodType,
                chronicDiseases: patientData.emergencyInfo.chronicDiseases,
                emergencyContactName: patientData.emergencyInfo.contactName,
                emergencyContactPhone: patientData.emergencyInfo.contactPhone,
                emergencyContactRelation: patientData.emergencyInfo.relation,
              },
              update: {
                bloodType: patientData.emergencyInfo.bloodType,
                chronicDiseases: patientData.emergencyInfo.chronicDiseases,
                emergencyContactName: patientData.emergencyInfo.contactName,
                emergencyContactPhone: patientData.emergencyInfo.contactPhone,
                emergencyContactRelation: patientData.emergencyInfo.relation,
              },
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


// implement how to add    the imergency inforamtion      to the patinrt  and  allergy 



