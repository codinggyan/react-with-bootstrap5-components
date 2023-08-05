import React from "react";
import { Link } from "react-router-dom";
import codiggyan_logo from '../../assets/img/coding_gyan_profile.svg'

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
     <img src={codiggyan_logo} style={{width: '100px', height: '100px', backgroundColor:'#5ce1e6', borderRadius: '50px'}}/>
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
        <li>
          <Link className="text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/badge">Badge</Link>
        </li>
        <li>
          <Link className="text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/breadcrumb">Breadcrumb</Link>
        </li>
        <li>
          <Link className="text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/button">Button</Link>
        </li>
      </ul>
    </div>
  );
}
