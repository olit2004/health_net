
import express from "express";
import { requireAuth } from "../../middleware/requireAuth.js";
import { roleMiddleware } from "../../middleware/roleMiddleware.js";
import {
  createAllergyController,
  getPatientAllergiesController
} from "./allergy.controller.js";

const router = express.Router();

// Only doctors can create allergies
router.post(
  "/:patientId",
  requireAuth,
  roleMiddleware(["DOCTOR"]),
  createAllergyController
);


router.get(
  "/patient/:patientId",
  requireAuth,
  getPatientAllergiesController
);

export default router;
