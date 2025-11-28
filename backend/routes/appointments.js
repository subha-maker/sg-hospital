const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// POST new appointment
router.post("/", async (req, res) => {
  try {
    const { name, phone, age, specialty, doctor, date, time } = req.body;

    const newAppointment = new Appointment({
      name,
      phone,
      age,
      specialty,
      doctor,
      date,
      time,
    });

    await newAppointment.save();
    console.log("✅ Appointment saved:", newAppointment);

    res.status(200).json({ message: "Appointment saved successfully" });
  } catch (err) {
    console.error("❌ Error saving appointment:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
