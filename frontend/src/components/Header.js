import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png"
          alt="SG Hospital Logo"
          className="logo"
        />
        <span className="hospital-title">SG Hospital</span>
      </div>

      <nav className="header-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/doctors">Doctors</NavLink>
        
        <NavLink to="/book">Book Appointment</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
