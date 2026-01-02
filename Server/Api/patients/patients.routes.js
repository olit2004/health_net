
import express from "express"
import { requireAuth } from "../../middleware/requireAuth.js";
import {
  listPatientsController,
  getPatientController,
  updatePatientController,
} from "./patients.controller.js";


import {onlyAdmin} from "../../middleware/onlyAdmin.js"
const router = express.Router()


router.get("/patients", onlyAdmin, listPatientsController);  //  list every patients  -->small data 
router.get("/patients/:id",requireAuth, getPatientController);  // detail info  doctors calll this end point inorder to get information on 
router.put("/patients/:id",onlyAdmin, updatePatientController);

export default router