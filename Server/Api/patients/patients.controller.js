// controllers/patientController.js
import { listPatients, getPatientById, updatePatient } from "../../Services/patient.js";
import checkIfAssigned from "../../lib/checkIfAssigned.js";





// handle the listing of patiens based on filter 
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

//  handle detailed info of simgle user by its id
export async function getPatientController(req, res) {

  try {
    if (!req.user){
      return res.status(401).json({message:"not authorized"})
    }
  
    const { id } = req.params;
    const patient = await getPatientById(id,req.user);

    if (!patient) {
      return res.status(404).json({ success: false, message: "Patient not found" });
    }
    res.json({ success: true, patient });
  } catch (err) {
    console.error("Error fetching patient:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

// handle updating patients data 
export async function updatePatientController(req, res) {
  try {
    const { id } = req.params;
    const patientData = req.body;

    const updated = await updatePatient(id, patientData);
    res.json({ success: true, patient: updated });
  } catch (err) {
    console.error("Error updating patient:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}