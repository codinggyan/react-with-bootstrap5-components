import React from "react";
import { Link } from "react-router-dom";

export default function SidebarComponent() {
  return (
    <div
      style={{
        padding: "10px",
        width: "20%",
        background: "#f0f0f0",
      }}
    >
      <ul style={{ listStyleType: "none", textDecoration: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link to="/alert">Alert</Link>
        </li>
      </ul>
    </div>
  );
}
