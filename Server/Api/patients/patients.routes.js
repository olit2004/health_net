
import express from "express"
import { requireAuth } from "../../middleware/requireAuth.js";
import {
  listPatientsController,
  getPatientController,
  updatePatientController,
} from "./patients.controller.js";


import {onlyAdmin} from "../../middleware/onlyAdmin.js"
const router = express.Router()
router.get("/patients", onlyAdmin, listPatientsController);
router.get("/patients/:id",requireAuth, getPatientController);
router.put("/patients/:id",requireAuth, updatePatientController);

export default router