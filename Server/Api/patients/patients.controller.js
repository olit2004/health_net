// controllers/patientController.js
import { listPatients, getPatientById, updatePatient } from "../../Services/patient.js";

export async function listPatientsController(req, res) {
  try {
    const { page = 1, limit = 20, search = "" } = req.query;
    const patients = await listPatients(Number(page), Number(limit), search);
    res.json({ success: true, patients });
  } catch (err) {
    console.error("Error listing patients:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

// GET /api/patients/:id
export async function getPatientController(req, res) {
  try {
    const { id } = req.params;
    const patient = await getPatientById(id);

    if (!patient) {
      return res.status(404).json({ success: false, message: "Patient not found" });
    }

    res.json({ success: true, patient });
  } catch (err) {
    console.error("Error fetching patient:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export async function updatePatientController(req, res) {
  try {
    const { id } = req.params;
    const patientData = req.body;

    // Only doctors can update
    if (req.user.role !== "DOCTOR") {
      return res.status(403).json({ success: false, message: "Forbidden: only doctors can update patient info" });
    }

    const updated = await updatePatient(id, patientData);
    res.json({ success: true, patient: updated });
  } catch (err) {
    console.error("Error updating patient:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}