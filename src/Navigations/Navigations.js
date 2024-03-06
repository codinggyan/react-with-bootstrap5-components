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
import {HomeComponent} from '../Components/Home'
import {CardComponet} from '../Components/Card'
import {CaraouseComponent} from '../Components/Carousel'
import {CloseButtons} from '../Components/CloseButton'
import {CollapseComponent} from '../Components/Collapse'
import {DropDownComponent} from '../Components/Dropdowns'
import {ListGroupComponent} from '../Components/ListGroup'
import {ModalComponet} from '../Components/Modal'
import {NavBarComponent} from '../Components/NavBar'
import {PaginationComponent} from '../Components/Pagination'
import {PropoversComponent} from '../Components/Popovers'
import {ScrollspyComponent} from '../Components/Scrollspy'
import {SpinnersComponet} from '../Components/Spinners'
import {ToastsComponent} from '../Components/Toasts'
import {TooltipsComponent} from '../Components/Tooltips'
import {ProgressComponent} from '../Components/Progress'



const Navigations = () => {
  return (
    <div className="d-flex">
      <Router>
        <SidebarComponent />
        <div className = "flex-grow-1" style={{ padding: "10px" }}>
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/accordion" component={AccordionComponent} />
            <Route path="/alert" component={AlertComponent} />
            <Route path="/badge" component={BadgeComponent} />
            <Route path="/breadcrumb" component={BreadCrumbComponent} />
            <Route path="/buttons" component={ButtonComponent} />
            <Route path="/card" component={CardComponet} />
            <Route path="/carousel" component={CaraouseComponent} />
            <Route path="/closebutton" component={CloseButtons} />
            <Route path="/collapse" component={CollapseComponent} />
            <Route path="/dropdown" component={DropDownComponent} />
            <Route path="/listgroup" component={ListGroupComponent} />
            <Route path="/Modal" component={ModalComponet} />
            <Route path="/nav-bar" component={NavBarComponent} />
            <Route path="/paginations" component={PaginationComponent} />
            <Route path="/propover" component={PropoversComponent} />
            <Route path="/progress" component={ProgressComponent} />
            <Route path="/scrollspy" component={ScrollspyComponent} />
            <Route path="/spinners" component={SpinnersComponet} />
            <Route path="/toast" component={ToastsComponent} />
            <Route path="/tooltip" component={TooltipsComponent} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Navigations;
