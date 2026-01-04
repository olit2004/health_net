import * as labService from "../../../Services/labResult.js";



  // labtech docator are allowed tro  create labresult

export async function uploadLabResultController(req, res) {
  try {
    const { patientId, doctorId, facilityId, resultType } = req.body;

    // Ensure a file was uploaded
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    // Create lab result
    const labResult = await labService.createLabResult({
      patientId,
      doctorId,
      facilityId,
      createdById: req.user.id, 
      filePath: req.file.path,  
      resultType,
    });

    res.status(201).json({ success: true, data: labResult });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}


export async function getPatientLabResultsController(req, res) {
  try {
    const results = await labService.getPatientLabResults({
      patientId: req.params.patientId,
      user: req.user
    });
    res.json({ success: true, data: results });
  } catch (error) {
    res.status(403).json({ success: false, message: error.message });
  }
}

export async function getPatientLabResultsByIdController(req, res) {
  try {
    const results = await labService.getLabResultById({
      id: req.params.id,
      user: req.user
    });
    res.json({ success: true, data: results });
  } catch (error) {
    res.status(403).json({ success: false, message: error.message });
  }
}
