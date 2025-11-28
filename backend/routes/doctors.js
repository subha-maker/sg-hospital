const express = require("express");
const router = express.Router();

const doctors = [
  { id: 1, name: "Dr. Meena", specialty: "Cardiologist" },
  { id: 2, name: "Dr. Arun", specialty: "Neurologist" },
  { id: 3, name: "Dr. Priya", specialty: "Dermatologist" },
];

router.get("/", (req, res) => {
  res.json(doctors);
});

module.exports = router;
