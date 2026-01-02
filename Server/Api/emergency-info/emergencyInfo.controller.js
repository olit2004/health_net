import * as emergencyService from "../../Services/emergencyInfo.js";

/**
 * Patient updates their own emergency info
 */
export async function updateMyEmergencyInfo(req, res) {
  try {
    if (req.user.role !== "PATIENT") {
      return res.status(403).json({
        success: false,
        message: "Only patients can update emergency info",
      });
    }

    const updated = await emergencyService.upsertEmergencyInfo(
      req.user.id,
      req.body
    );

    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

/**
 * Public QR scan endpoint
 */
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
