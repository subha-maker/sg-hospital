import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>SG Hospital</h3>
        <p>
          Your Health, Our Priority. Providing quality healthcare with expert
          doctors and modern facilities.
        </p>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
            />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
            />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
          </a>
        </div>

        <p className="footer-bottom">
          © 2025 SG Hospital | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
