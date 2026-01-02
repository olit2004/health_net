// # GET    /api/v1/doctors/me
// # GET    /api/v1/doctors/my-patients


// routes/doctor.js
import express from "express";
import { listDoctorsController, getDoctorController } from "./doctors.controller.js";
import { requireAuth } from "../../middleware/requireAuth.js";

import { onlyAdmin } from "../../middleware/onlyAdmin.js";



const router = express.Router();
router.get("/doctors",  onlyAdmin, listDoctorsController);
router.get("/doctors/:id", requireAuth, getDoctorController);

//  EDIT   DOCTOR TABLE 



export default router;