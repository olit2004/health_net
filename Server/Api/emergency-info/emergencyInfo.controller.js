import * as emergencyService from "../../Services/emergencyInfo.js";


// emergencyInfo.controller.js

export async function updateMyEmergencyContactInfo(req, res) {
  try {
 
    if (req.user.role !== "PATIENT") {
      return res.status(403).json({
        success: false,
        message: "Only patients can manage their contact directives.",
      });
    }

   
    const allowedData = {
      emergencyContactName: req.body.emergencyContactName,
      emergencyContactPhone: req.body.emergencyContactPhone,
      emergencyContactRelation: req.body.emergencyContactRelation,
      medicalDirectives: req.body.medicalDirectives,
    };

    const updated = await emergencyService.updatePatientControlledInfo(
      req.user.id,
      allowedData
    );

    res.json({ 
      success: true, 
      message: "Emergency contacts updated", 
      data: updated 
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}



export async function scanEmergencyQR(req, res) {
  try {

    
    const { token } = req.params;
    const data = await emergencyService.getEmergencyByToken(token);
    res.json({ success: true, data });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
}
    