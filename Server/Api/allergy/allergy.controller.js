import * as allergyService from "../../Services/Allergy.js"

export async function createAllergyController(req, res) {
  try {
    const { patientId } = req.params;
    const { allergey, severity, notes } = req.body;

    if (!allergey || !severity) {
      return res.status(400).json({ success: false, message: "Allergen and severity are required" });
    }

    const allergy = await allergyService.createAllergy({
      patientId,
      doctorId: req.user.id, // Optional: if you want to track doctor who added
      allergey,
      severity,
      notes
    });

    res.status(201).json({ success: true, data: allergy });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function getPatientAllergiesController(req, res) {
  try {
    const { patientId } = req.params;
    const allergies = await allergyService.getPatientAllergies({
      patientId,
      user: req.user
    });

    res.status(200).json({ success: true, data: allergies });
  } catch (error) {
    res.status(403).json({ success: false, message: error.message });
  }
}