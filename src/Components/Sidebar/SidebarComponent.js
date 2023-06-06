import React from "react";
import { Link } from "react-router-dom";

export default function SidebarComponent() {
  return (
    <div
      style={{
        padding: "10px",
        width: "20%",
        height: '100vh'
      }}
      className="bg-dark sticky-top"
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link className="text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-white text-decoration-none d-flex  px-sm-4 px-0 justify-content-start" to="/accordion">Accordion</Link>
        </li>
        <li>
          <Link className="text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/alert">Alert</Link>
        </li>
      </ul>
    </div>
  );
}
