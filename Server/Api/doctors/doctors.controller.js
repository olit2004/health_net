
import { listDoctors, getDoctorById } from "../../Services/doctor.js";

// GET /api/doctors
export async function listDoctorsController(req, res) {
  try {
        
    const { page = 1, limit = 20, search = "" } = req.query;
        const facilityId = req.facilityId;

        const doctors = await listDoctors(Number(page), Number(limit), search,facilityId);
        res.json({ success: true, doctors });
    } catch (err) {
        console.error("Error listing doctors:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


// GET /api/doctors/:id
export async function getDoctorController(req, res) {
        try {
            const { id } = req.params;
            const doctor = await getDoctorById(id);
            if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
            }
            res.json({ success: true, doctor });
        } catch (err) {
            console.error("Error fetching doctor:", err);
            res.status(500).json({ success: false, message: "Internal server error" });
        }
}