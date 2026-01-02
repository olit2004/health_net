import * as appointmentService from "../../Services/appointment.js";



//appointment creation 
export async function createAppointmentController(req, res) {

  try {
    const { patientId, dateTime, duration, reason } = req.body;
    const appointment = await appointmentService.createAppointment({
          userId: req.user.id,
          patientId,
          duration,
          dateTime,
          reason
    });
    res.status(201).json({ success: true, data: appointment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}

export async function getMyAppointmentsController(req, res) {
  try {
    const appointments = await appointmentService.getMyAppointments(req.user);
    res.json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function updateStatusController(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await appointmentService.updateAppointmentStatus({
      id,
      status,
      user: req.user
    });
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(403).json({ success: false, message: error.message });
  }
}