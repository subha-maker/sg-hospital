const Appointment = require("../models/Appointment");

exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "Appointment booked successfully!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
