// routes/diagnosisRoutes.js


import express from "express";

import  {requireAuth} from "../../../middleware/requireAuth.js"
import { 
  createDiagnosisController, 
  getPatientDiagnosesController, 
  getDiagnosisByIdController, 
  updateDiagnosisController, 
 
} from "./diagnoses.controller.js";



const router = express.Router();


router.post("/diagnosis", requireAuth,createDiagnosisController);


router.get("/diagnosis/patient/:patientId",requireAuth, getPatientDiagnosesController);  //    list diagnosis of  a simgle patien 


router.get("/diagnosis/:id", requireAuth,getDiagnosisByIdController);  // return singlge


router.patch("/diagnosis/:id",requireAuth, updateDiagnosisController);


  
export default router;


