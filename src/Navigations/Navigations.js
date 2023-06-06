import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { SidebarComponent } from "../Components/Sidebar";
import { AccordionComponent } from "../Components/Accordion";
import { BadgeComponent } from "../Components/Badge";
import { AlertComponent } from "../Components/Alert";


const Navigations = () => {
  return (
    <div className="d-flex">
      <Router>
        <SidebarComponent />
        <div className = "flex-grow-1" style={{ padding: "10px" }}>
          <Switch>
            <Route path="/accordion" component={AccordionComponent} />
            <Route path="/alert" component={AlertComponent} />
            <Route path="/badge" component={BadgeComponent} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Navigations;
