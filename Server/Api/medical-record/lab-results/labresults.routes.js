


import express from "express";

// import upload from "../../../middleware/upload.js";
import { storage } from "../../../config/cloudinrsy.js";
import multer from 'multer';
import { roleMiddleware } from '../../../middleware/roleMiddleware.js';
import path from "path";
import { 
  uploadLabResultController, 
  getPatientLabResultsController, 
 getPatientLabResultsByIdController


} from "./labresults.controller.js";
import { requireAuth } from "../../../middleware/requireAuth.js";

const router = express.Router();



const upload = multer({ storage }); 
router.use(requireAuth);
router.post("/labResult", requireAuth,roleMiddleware(["DOCTOR","LAB_TECH"]),upload.single('filePath'), uploadLabResultController);
router.get("/labResult/patient/:patientId",requireAuth,roleMiddleware(["DOCTOR","PATIENT"]), getPatientLabResultsController);
router.get("/labResult/:id",requireAuth,roleMiddleware(["DOCTOR","PATIENT"]) ,getPatientLabResultsByIdController);


export default router;


