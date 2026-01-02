// routes/assignment.js
import express from "express";
import {
  createAssignmentController,
  deleteAssignmentController,
   myAssignmentsController
} from "./assignments.controller.js";
import {onlyAdmin} from "../../middleware/onlyAdmin.js"
import {requireAuth}  from "../../middleware/requireAuth.js"

const router = express.Router();

// Create a new assignment (Admin only)
router.post("/assignments", onlyAdmin, createAssignmentController);
router.patch("/assignments/:id",onlyAdmin, deleteAssignmentController);    /// PATCH  in activeate teh user 

router.get("/assignments", requireAuth,  myAssignmentsController);

export default router;