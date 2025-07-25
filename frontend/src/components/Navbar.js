import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/students" style={{ marginRight: '1rem' }}>Students</Link>
      <Link to="/teachers">Teachers</Link>
    </nav>
  );
}

export default Navbar;
