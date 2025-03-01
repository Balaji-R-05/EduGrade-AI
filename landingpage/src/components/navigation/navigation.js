// src/components/Navigation/Navigation.js
import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">EduGrade-AI</div>
      <ul className="nav-links">
        <li><a href="#contact">Our Goals</a></li>
        <li><a href="#contact">Team</a></li>
        <li><a href="#features">About Us</a></li>
        <li><a href="#testimonials">Contact Us</a></li>
        <li><a href="#contact">Sign-in/ Sign-up</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
