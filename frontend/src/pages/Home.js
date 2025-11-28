import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Home");

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Fixed Header */}
      <header className="header">
        <div className="header-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
            alt="SG Hospital Logo"
            className="logo"
          />
          <span className="hospital-title">SG Hospital</span>
        </div>

        <nav className="nav-links">
          <button
            className={activeTab === "Home" ? "active" : ""}
            onClick={() => handleNavigate("Home", "/")}
          >
            Home
          </button>
          <button
            className={activeTab === "Doctors" ? "active" : ""}
            onClick={() => handleNavigate("Doctors", "/doctors")}
          >
            Doctors
          </button>
          
          <button
            className={activeTab === "Book" ? "active" : ""}
            onClick={() => handleNavigate("Book", "/book-appointment")}
          >
            Book Appointment
          </button>
          <button
            className={activeTab === "Contact" ? "active" : ""}
            onClick={() => handleNavigate("Contact", "/contact")}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay">
          <h1>Welcome to SG Hospital</h1>
          <p>
            Providing compassionate healthcare with cutting-edge technology and
            expert medical professionals.
          </p>
          <button
            className="get-started-btn"
            onClick={() => navigate("/book")}
          >
            Book Your Appointment
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About SG Hospital</h2>
        <p>
          SG Hospital is a leading healthcare institution committed to
          excellence in patient care. With advanced medical facilities,
          dedicated staff, and specialized departments, we ensure world-class
          treatment and compassionate care for every patient.
        </p>
        <p>
          Our hospital provides 24/7 emergency services, expert consultations,
          and the latest diagnostic technologies — ensuring your health is in
          the best hands.
        </p>
      </section>
    </div>
  );
}
