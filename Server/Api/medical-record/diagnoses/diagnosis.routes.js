// routes/diagnosisRoutes.js


import express from "express";
import { roleMiddleware } from '../../../middleware/roleMiddleware.js';

import  {requireAuth} from "../../../middleware/requireAuth.js"
import { 
  createDiagnosisController, 
  getPatientDiagnosesController, 
  getDiagnosisByIdController, 
  updateDiagnosisController, 
  toggleEmergencyVisibilityController
} from "./diagnoses.controller.js";



const router = express.Router();


router.post("/diagnosis", requireAuth,roleMiddleware(["DOCTOR"]),createDiagnosisController);
router.get("/diagnosis/patient/:patientId",requireAuth, getPatientDiagnosesController);  //    list diagnosis of  a simgle patien 
router.get("/diagnosis/:id", requireAuth,getDiagnosisByIdController);  // return single
router.patch("/diagnosis/:id",requireAuth, updateDiagnosisController);
router.patch("/diagnosis/:id/toggle-emergency-visibility",requireAuth,roleMiddleware("PATIENT"),toggleEmergencyVisibilityController
);

export default router;


