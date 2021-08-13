import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/services/services";
import DeadlineScrollBar from "./components/Sections/Deadline_ScrollBar/Deadline_ScrollBar";
import Navbar from "./components/Sections/Navbar/Navbar";
import RightSideBar from "./components/Sections/RightSideBar/RightSideBar";
import HeroSection from "./components/Sections/HeroSection/HeroSection";
import AboutSection from "./components/Sections/AboutSection/AboutSection";
import VideoGallery from "./components/Sections/VideoGallery/VideoGallery";
import Clients from "./components/Sections/Clients/Clients";
import CalculatorsSection from "./components/Sections/CalculatorsSection/CalculatorsSection";
import FormSection from "./components/Sections/FormSection/FormSection";
import SMFeeds from "./components/Sections/SMFeeds/SMFeeds";
import Testimonials from "./components/Sections/Testimonials/Testimonials";
import CalculatorsBar from "./components/Sections/CalculatorsBar/CalculatorsBar";
import Map from "./components/Sections/Map/Map";
import Footer from "./components/Sections/Footer/Footer";
import "./App.css";

import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Dashboard from "./components/pages/dashboard";

function App() {
  const [currentCategory, setCurrentCategory] = useState("Accounting");

  function setCategory(category) {
    setCurrentCategory(category);
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DeadlineScrollBar />
          <Navbar />
          <RightSideBar />
          <HeroSection />
          <AboutSection />
          <VideoGallery />
          <CalculatorsSection
            category={currentCategory}
            setCategory={setCategory}
          />{" "}
          <FormSection />
          <SMFeeds />
          <Clients />
          <Testimonials />
          <CalculatorsBar setCategory={setCategory} /> <Map />
          <Footer />
        </Route>{" "}
        <Route exact path="/login" component={Login} />{" "}
        <Route exact path="/register" component={Register} />{" "}
        <Route exact path="/dashboard" component={Dashboard} />{" "}
        <Route exact path="/services">
          <Services />
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
}

export default App;
