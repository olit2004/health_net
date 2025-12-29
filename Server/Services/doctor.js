// services/doctorService.js
import prisma from "../lib/prisma.js";

// List doctors with their associated facilities

// services/doctorService.js


export async function listDoctors(page = 1, limit = 20, search = "", facilityId) {
  const skip = (page - 1) * limit;

  return prisma.doctor.findMany({
    skip,
    take: limit,
    where: {
      doctorFacilities: {
        some: { facilityId: Number(facilityId) }, 
      },
      ...(search
        ? {
            OR: [
              { user: { firstName: { contains: search, mode: "insensitive" } } },
              { user: { lastName: { contains: search, mode: "insensitive" } } },
              { user: { email: { contains: search, mode: "insensitive" } } },
              { specialization: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
    },
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
      doctorFacilities: {
        select: {
          facility: {
            select: {
              id: true,
              name: true,
              facilityType: true,
              locationAddress: true,
            },
          },
        },
      },
    },
  });
}



// Get doctor details with facilities
export async function getDoctorById(id) {
  return prisma.doctor.findUnique({
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
      doctorFacilities: {
        select: {
          facility: {
            select: {
              id: true,
              name: true,
              facilityType: true,
              locationAddress: true,
              contactPhone: true,
            },
          },
        },
      },
      appointments: true,
      diagnoses: true,
    },
  });
}