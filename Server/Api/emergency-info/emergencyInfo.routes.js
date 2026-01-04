import express from "express";
import {
 updateMyEmergencyContactInfo,
  scanEmergencyQR,
} from "./emergencyInfo.controller.js";
 import { requireAuth } from "../../middleware/requireAuth.js";

const router = express.Router();


router.get("/scan/:token", scanEmergencyQR);
router.put("/me", requireAuth, updateMyEmergencyContactInfo);


export default router;
