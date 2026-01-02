// controllers/assignmentController.js

import { createAssignment, deleteAssignment,getAssignmentsByUser } from "../../Services/assignment.js";


export async function createAssignmentController(req, res) {
  try {
    const { doctorI, patientId } = req.body;
    const adminId = req.user.id

    if (!adminId) {
      return res.status(403).json({ success: false, message: "Forbidden: onot authorized to assign " });
    }

    const assignment = await createAssignment(doctorId, patientId, adminId);
    res.json({ success: true, assignment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
}

export async function deleteAssignmentController(req, res) {
  try {
    const { id } = req.params;
    const adminId = req.user.admin?.id;

    if (!adminId) {
      return res.status(403).json({ success: false, message: "Forbidden: only admins can delete" });
    }

    const deleted = await deleteAssignment(id, adminId);
    res.json({ success: true, deleted });
  } catch (err) {
    res.status(403).json({ success: false, message: err.message });
  }
}


export async function myAssignmentsController  (req, res)  {
  try {
    
    const assignments = await getAssignmentsByUser(req.user);
    
    res.status(200).json({
      success: true,
      data: assignments
    });
  } catch (error) {
    console.error("Error fetching assignments:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
