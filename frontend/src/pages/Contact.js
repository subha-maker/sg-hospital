import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📩 Message sent successfully! We'll contact you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />

          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h3>Hospital Info</h3>
          <p>🏥 SG Hospital</p>
          <p>📍 Thanjavur, Tamil Nadu, India</p>
          <p>📞 +91 9876543210</p>
          <p>📧 info@sghospital.com</p>

          <iframe
            title="SG Hospital Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7987415413264!2d79.1331!3d10.7850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab94822f32f17%3A0x70dbcd4c2b2ec5d9!2sThanjavur%20Government%20Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: "0", borderRadius: "10px", marginTop: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
