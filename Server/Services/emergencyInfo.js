import prisma from "../lib/prisma.js";



export async function updatePatientControlledInfo(userId, data) {

  const {
    emergencyContactName,
    emergencyContactPhone,
    emergencyContactRelation,
    medicalDirectives,
  } = data;


  const patient = await prisma.patient.findUnique({
    where: { userId: Number(userId) },
    select: { id: true }
  });

  if (!patient) throw new Error("Patient profile not found");


  return prisma.emergencyInfo.upsert({
    where: { patientId: patient.id },
    update: {
      emergencyContactName,
      emergencyContactPhone,
      emergencyContactRelation,
      medicalDirectives,
    },
    create: {
      patientId: patient.id,
      emergencyContactName,
      emergencyContactPhone,
      emergencyContactRelation,
      medicalDirectives,
    },
  });
}



export async function getEmergencyByToken(qrToken) {
  const patient = await prisma.patient.findUnique({
    where: { qrToken },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          phone: true,
        },
      },
      emergencyInfo: true,
      // Fetch only the critical diagnoses the patient has opted to share
      diagnoses: {
        where: { emergencyVisibilty: true },
        select: {
          disease_name: true,
          medications: true,
          conclusion: true,
          createdAt: true
        }
      },
      // Including allergies as they are vital for First Responders
      allergies: {
        select: {
          allergey: true,
          severity: true
        }
      }
    },
  });

  if (!patient) {
    throw new Error("Invalid or expired QR token");
  }

  // Formatting for First Responder View
  return {
    criticalAlerts: {
      bloodType: patient.emergencyInfo?.bloodType || "Unknown",
      allergies: patient.allergies.map(a => `${a.allergey} (${a.severity})`),
      // Map diagnoses into a clean string array or object
      activeDiagnoses: patient.diagnoses.map(d => ({
        condition: d.disease_name,
        medications: d.medications,
        notes: d.conclusion
      }))
    },
    patientIdentification: {
      name: `${patient.user.firstName} ${patient.user.lastName}`,
      age: patient.dob ? calculateAge(patient.dob) : "Unknown",
      primaryPhone: patient.user.phone,
    },
    emergencyContact: {
      name: patient.emergencyInfo?.emergencyContactName,
      phone: patient.emergencyInfo?.emergencyContactPhone,
      relation: patient.emergencyInfo?.emergencyContactRelation,
    },
    legalDirectives: {
      medicalDirectives: patient.emergencyInfo?.medicalDirectives || "None provided"
    }
  };
}

// Helper to make the data more useful for responders
function calculateAge(dob) {
  const diff = Date.now() - new Date(dob).getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
