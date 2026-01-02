// validators/userValidators.js
import { z } from 'zod';

// SHARED PRIMITIVES
const nameSchema = z.string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name cannot exceed 50 characters")
  .regex(/^[a-zA-Z\s-]+$/, "Name can only contain letters, spaces, and hyphens");

const passwordSchema = z.string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Must contain at least one uppercase letter")
  .regex(/[a-z]/, "Must contain at least one lowercase letter")
  .regex(/[0-9]/, "Must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Must contain at least one special character");

const phoneSchema = z.string()
  .regex(/^\+?[1-9]\d{1,14}$/, "Invalid international phone format (e.g. +251911...)")
  .optional()
  .or(z.literal(''));

// BASE USER SCHEMA
const baseUserSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: z.string().email("Invalid email address").toLowerCase(),
  password: passwordSchema,
  phone: phoneSchema,
});

// ROLE-SPECIFIC SCHEMAS
const patientSchema = z.object({
  dob: z.coerce.date().refine(date => date < new Date(), "Date of birth must be in the past").optional(),
  gender: z.enum(['MALE', 'FEMALE']).optional(),
  address: z.string().max(200).optional(),
  insuranceStatus: z.enum(['INSURED', 'UNINSURED']).default('UNINSURED'),
  insuranceProvider: z.string().optional(),
  policyNumber: z.string().optional(),
  bloodType: z.enum(['A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG', 'O_POS', 'O_NEG']).optional(),
  allergies: z.string().max(500).optional(),
  chronicDiseases: z.string().max(500).optional(),
  emergencyContact: z.string().max(100).optional(),
});

const doctorSchema = z.object({
  specialization: z.string().min(2).max(100),
  licenseNo: z.string().min(5).max(50),
  // facilityIds removed — you’ll infer facility from admin context
});

const adminSchema = z.object({
  adminLevel: z.enum(['SUPER_ADMIN', 'MANAGER', 'STAFF']),
  department: z.string().max(100).optional(),
});

// MAIN REGISTER VALIDATOR
export const registerValidator = z.discriminatedUnion('role', [
  baseUserSchema.extend({
    role: z.literal('PATIENT'),
    ...patientSchema.shape
  }),

  baseUserSchema.extend({
    role: z.literal('DOCTOR'),
    ...doctorSchema.shape
  }),

  baseUserSchema.extend({
    role: z.literal('ADMIN'),
    ...adminSchema.shape
  }),

  baseUserSchema.extend({
    role: z.literal('LAB_TECH'),
    adminLevel: z.enum(['SUPER_ADMIN', 'MANAGER', 'STAFF']),
    department: z.string().max(100).optional()
  }),

  baseUserSchema.extend({
    role: z.literal('FIRST_RESPONDER'),
    department: z.string().max(100).optional()
  }),
]);

// AUTH & UTILITY VALIDATORS
export const loginValidator = z.object({
  email: z.string().email("Invalid email").toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

export const updateProfileValidator = z.object({
  firstName: nameSchema.optional(),
  lastName: nameSchema.optional(),
  phone: phoneSchema,
  address: z.string().max(200).optional(),
  emergencyContact: z.string().max(100).optional()
});

