// frontend/src/BookAppointment.js
import React, { useState } from "react";
import "./BookAppointment.css";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    specialty: "",
    doctor: "",
    date: "",
    time: "",
  });

  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const doctorsBySpecialty = {
    Cardiology: ["Dr. A. Rajesh", "Dr. K. Manju"],
    Dermatology: ["Dr. P. Sneha", "Dr. R. Mohan"],
    Neurology: ["Dr. S. Nithya", "Dr. M. Prakash"],
    Orthopedics: ["Dr. V. Arjun", "Dr. D. Priya"],
    Pediatrics: ["Dr. G. Lakshmi", "Dr. K. Arun"],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "specialty" && { doctor: "" }),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://sg-hospital.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("✅ Appointment booked successfully!");
        setFormData({
          name: "",
          phone: "",
          age: "",
          specialty: "",
          doctor: "",
          date: "",
          time: "",
        });

        setTimeout(() => {
          setSuccess("🙏 Thank you! We'll contact you soon.");
        }, 2000);
      } else {
        setSuccess("❌ Failed to book appointment. Try again.");
      }
    } catch (err) {
      console.error(err);
      setSuccess("❌ Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="form-container">
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />

        <select
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          required
        >
          <option value="">Select Specialty</option>
          {Object.keys(doctorsBySpecialty).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {formData.specialty && (
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
          >
            <option value="">Select Doctor</option>
            {doctorsBySpecialty[formData.specialty].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        )}

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select Time</option>
          <option value="9:00 AM">9:00 AM</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
        </select>

        <button className="btn" type="submit" disabled={loading}>
  {loading ? "Booking..." : "Book Appointment"}
</button>

      </form>
      {success && <p className="success-message">{success}</p>}
    </div>
  );
}
