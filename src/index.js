import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import About from 'views/About'
import Service from 'views/Service'
import Contact from "views/Contact";
import StaffAugmentation from "pages/Service/StaffAugmentation";
import DataServices from "pages/Service/DataServices";
import CallCenterServices from "pages/Service/CallCenterServices";
import RevenueCycleManagement from "pages/Service/RevenueCycleManagement";
import Erp from "pages/Service/Erp";
import ItInfrastructureManagement from "pages/Service/ItInfrastructureManagement";
import Seo from "pages/Service/Seo";
import Cloud from "pages/Technologies/Cloud";
import Microsoft from "pages/Technologies/Microsoft";


import Profile from "views/Profile.js";
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/about-us" exact component={About} />
      <Route path="/services" exact component={Service} />
      <Route path="/contact-us" exact component={Contact} />
      <Route path="/staff-augmentation" exact component={StaffAugmentation} />
      <Route path="/data-services" exact component={DataServices} />
      <Route path="/call-center-services" exact component={CallCenterServices} />
      <Route path="/revenue-cycle-management" exact component={RevenueCycleManagement} />
      <Route path="/enterprise-resource-planning" exact component={Erp} />
      <Route path="/it-infrastructure-management" exact component={ItInfrastructureManagement} />
      <Route path="/seo-digital-marketing" exact component={Seo} />
      <Route path="/cloud-services" exact component={Cloud} />
      <Route path="/microsoft-technologies" exact component={Microsoft} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
