import * as labService from "../../../Services/labResult.js";



  // labtech docator are allowed tro  create labresult

export async function uploadLabResultController(req, res) {
        let userData;
        try {
          userData =
            typeof req.body.userData === "string"
              ? JSON.parse(req.body.userData)
              : req.body.userData;
        } catch (err) {
          return res.status(400).json({
            success: false,
            message: "Invalid JSON in userData",
          });
        }
  try {
   
    const { patientId, doctorId, facilityId, resultType } = userData  
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    const labResult = await labService.createLabResult({
            patientId,
            doctorId,
            facilityId,
            createdById: req.user.id, 
            filePath: req.file.path,  
            resultType
    });

    res.status(201).json({ success: true, data: labResult });
  } catch (error) {
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
