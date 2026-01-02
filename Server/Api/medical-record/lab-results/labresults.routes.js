


import express from "express";
import upload from "../../../middleware/upload.js";
import path from "path";
import { 
  uploadLabResultController, 
  getPatientLabResultsController, 
 getPatientLabResultsByIdController


} from "./labresults.controller.js";
import { requireAuth } from "../../../middleware/requireAuth.js";

const router = express.Router();



router.use(requireAuth);
router.post("/labResult", upload.single('report'), uploadLabResultController);
router.get("/labResult/patient/:patientId", getPatientLabResultsController);
router.get("/labResult/:id", getPatientLabResultsByIdController);


export default router;