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
import { BreadCrumbComponent } from "../Components/Breadcrumb";
import { ButtonComponent } from "../Components/Buttons";


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
            <Route path="/breadcrumb" component={BreadCrumbComponent} />
            <Route path="/button" component={ButtonComponent} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Navigations;
