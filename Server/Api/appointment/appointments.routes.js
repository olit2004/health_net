import express from "express";
import { 
  createAppointmentController, 
  getMyAppointmentsController, 
  updateStatusController 
} from "./appointments.controller.js";
import { requireAuth } from "../../middleware/requireAuth.js";
import  {roleMiddleware}  from "../../middleware/roleMiddleware.js"


const router = express.Router();

router.use(requireAuth);

router.post("/appointment", roleMiddleware("DOCTOR"),createAppointmentController);     
router.get("/myAppointment", requireAuth,getMyAppointmentsController);      
router.patch("/appointment/status/:id",requireAuth, updateStatusController); 


export default router;