// validators/userValidators.js
import { z } from 'zod';

// Common validation for all users
const baseUserSchema = z.object({
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),

  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),

  email: z.string()
    .email("Invalid email address")
    .toLowerCase(),

  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password cannot exceed 100 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),

  phone: z.string()
    .optional()
    .refine(val => !val || /^\+?[\d\s-]{10,}$/.test(val), {
      message: "Invalid phone number format"
    }),
});

// Role-specific schemas
const patientSchema = z.object({
  dob: z.string()
    .refine(val => {
      const date = new Date(val);
      const today = new Date();
      return date < today && date > new Date('1900-01-01');
    }, {
      message: "Date of birth must be a valid past date after 1900"
    })
    .optional(),

  gender: z.enum(['MALE', 'FEMALE'], {
    errorMap: () => ({ message: "Gender must be MALE or FEMALE" })
  }).optional(),

  address: z.string()
    .max(200, "Address cannot exceed 200 characters")
    .optional(),

  // Insurance info (optional)
  insurance: z.object({
    providerName: z.string().min(2, "Provider name is required"),
    policyNumber: z.string().min(3, "Policy number is required"),
    validUntil: z.string().refine(val => new Date(val) > new Date(), {
      message: "Insurance must be valid (future date)"
    })
  }).optional(),

  // Emergency info (optional)
  emergencyInfo: z.object({
    bloodType: z.enum([
      'A_POS', 'A_NEG', 'B_POS', 'B_NEG', 
      'AB_POS', 'AB_NEG', 'O_POS', 'O_NEG'
    ]).optional(),
    allergies: z.string().max(500).optional(),
    chronicDiseases: z.string().max(500).optional(),
    emergencyContact: z.string().max(100).optional()
  }).optional()
});

const doctorSchema = z.object({
  specialization: z.string()
    .min(2, "Specialization is required")
    .max(100, "Specialization cannot exceed 100 characters"),

  licenseNo: z.string()
    .min(5, "License number must be at least 5 characters")
    .max(50, "License number cannot exceed 50 characters"),

  phone: z.string()
    .refine(val => /^\+?[\d\s-]{10,}$/.test(val), {
      message: "Valid phone number is required for doctors"
    }),

  // Array of facility IDs where doctor will work
  facilityIds: z.array(z.number().int().positive())
    .min(1, "Doctor must be assigned to at least one facility")
    .optional(),

  schedule: z.record(z.string(), z.string())
    .optional()
});

const adminSchema = z.object({
  facilityId: z.number()
    .int()
    .positive("Valid facility ID is required for admin"),

  adminLevel: z.enum(['SUPER_ADMIN', 'MANAGER', 'STAFF'], {
    errorMap: () => ({ message: "Invalid admin level" })
  }),

  department: z.string()
    .max(100, "Department cannot exceed 100 characters")
    .optional()
});

// Main registration validator with discriminated union
const registerValidator = z.discriminatedUnion('role', [
  // PATIENT registration
  baseUserSchema.extend({
    role: z.literal('PATIENT'),
    ...patientSchema.shape
  }),

  // DOCTOR registration
  baseUserSchema.extend({
    role: z.literal('DOCTOR'),
    ...doctorSchema.shape
  }),

  // ADMIN registration
  baseUserSchema.extend({
    role: z.literal('ADMIN'),
    ...adminSchema.shape
  }),

  // LAB_TECH registration
  baseUserSchema.extend({
    role: z.literal('LAB_TECH'),
    facilityId: z.number().int().positive("Facility ID is required for lab tech")
  }),

  // FIRST_RESPONDER registration
  baseUserSchema.extend({
    role: z.literal('FIRST_RESPONDER'),
    facilityId: z.number().int().positive("Facility ID is required for first responder"),
    badgeNumber: z.string().optional()
  })
]);



// Export the validator
export { registerValidator };

// Optional: Export individual schemas if needed elsewhere
export { baseUserSchema, patientSchema, doctorSchema, adminSchema };

// Optional: Create a simplified login validator
export const loginValidator = z.object({
  email: z.string().email("Invalid email address").toLowerCase(),
  password: z.string().min(1, "Password is required")
});

// Optional: Password reset validator
export const resetPasswordValidator = z.object({
  token: z.string().min(1, "Reset token is required"),
  newPassword: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password cannot exceed 100 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
});

// Optional: Forgot password validator
export const forgotPasswordValidator = z.object({
  email: z.string().email("Invalid email address").toLowerCase()
});

// Optional: Update profile validator (for authenticated users)
export const updateProfileValidator = z.object({
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces")
    .optional(),
    
  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces")
    .optional(),
    
  phone: z.string()
    .optional()
    .refine(val => !val || /^\+?[\d\s-]{10,}$/.test(val), {
      message: "Invalid phone number format"
    }),
    
  address: z.string().max(200).optional()
});