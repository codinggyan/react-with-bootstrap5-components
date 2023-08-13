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
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <img src={codiggyan_logo} style={{width: '80px', height: '80px', backgroundColor:'#5ce1e6', borderRadius: '50px'}}/>
            <span className="fs-4 test-white px-4">Coding Gyan</span>
        </div>
        <hr className="text-white"/>
     
      <ul style={{ listStyleType: "none", padding: 0 }} className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link className="nav-link text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-decoration-none d-flex  px-sm-4 px-0 justify-content-start" to="/accordion">Accordion</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/alert">Alert</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/badge">Badge</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/breadcrumb">Breadcrumb</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-decoration-none d-flex px-sm-4 px-0 justify-content-start" to="/button">Button</Link>
        </li>
      </ul>
    </div>
  );
}
