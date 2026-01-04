// controllers/diagnosisController.js

import * as diagnosisService from "../../../Services/diagnosis.js";


export async function createDiagnosisController(req, res) {
  try {

    const {
      patientId,
      symptoms,
      disease_name,
      medications,
      suggestions,
      conclusion,
      emergencyVisibilty
    } = req.body;

    const diagnosis = await diagnosisService.createDiagnosis({
      patientId,
      userId: req.user.id,
      
      symptoms,
      disease_name,
      medications,
      suggestions,
      conclusion,
      emergencyVisibilty
    });

    res.status(201).json({ success: true, data: diagnosis });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}



// 2. Get all diagnoses for a specific patient
export async function getPatientDiagnosesController(req, res) {
  try {
    const { patientId } = req.params;
    
    const diagnoses = await diagnosisService.getPatientDiagnoses({
      patientId,
      user: req.user 
    }); 

    res.status(200).json({ success: true, data: diagnoses });
  } catch (error) {
    const status = error.message.includes("Unauthorized") ? 403 : 400;
    res.status(status).json({ success: false, message: error.message });
  }
}




export async function getDiagnosisByIdController(req, res) {
  try {
    const { id } = req.params;

    const diagnosis = await diagnosisService.getDiagnosisById({
      id,
      user: req.user
    });

    res.status(200).json({ success: true, data: diagnosis });
  } catch (error) {
    const status = error.message.includes("not found") ? 404 : 403;
    res.status(status).json({ success: false, message: error.message });
  }
}



// 4. Update an existing diagnosis
export async function updateDiagnosisController(req, res) {
  try {
    const { id } = req.params;
    const {
      symptoms,
      disease_name,
      medications,
      suggestions,
      conclusion,

    } = req.body;

    const updatedDiagnosis = await diagnosisService.updateDiagnosis({
      id,
      user: req.user,
      data: {
        symptoms,
        disease_name,
        medications,
        suggestions,
        conclusion,
       
      }
    });

    res.status(200).json({ success: true, data: updatedDiagnosis });
  } catch (error) {
    res.status(403).json({ success: false, message: error.message });
  }
}




// 5. Delete a diagnosis
export async function deleteDiagnosisController(req, res) {
  try {
    const { id } = req.params;

    await diagnosisService.deleteDiagnosis({
      id,
      user: req.user
    });

    res.status(200).json({ success: true, message: "Diagnosis deleted successfully" });
  } catch (error) {
    res.status(403).json({ success: false, message: error.message });
  }
}



export async function toggleEmergencyVisibilityController(req, res) {
  try {
    const { id } = req.params;

    const updatedDiagnosis =
      await diagnosisService.toggleEmergencyVisibility({
        id,
        user: req.user
      });

    res.status(200).json({
      success: true,
      data: updatedDiagnosis
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message
    });
  }
}
