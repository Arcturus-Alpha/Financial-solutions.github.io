import React, { useEffect, useState } from "react";
import WebText from "../../../WebText";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TeamMember from "./TeamMember";
import "./AboutSection.css";

function AboutSection() {
  const [windowWidth, setWindowWidth] = useState(0);

  let items = 1;
  let itemsMargin = 30;

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);
  if (windowWidth > 500) {
    items = 2;
  }
  if (windowWidth > 992) {
    items = 3;
  }
  if (windowWidth > 2000) {
    items = 4;
  }

  return (
    <>
      <div className="aboutSectionContainer" id="aboutSection">
        <div className="container py-4 py-sm-5">
          <div className="section-title px-3 px-sm-0">
            <h2>ABOUT KOYO ASSISTANT</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>

          <p className=" px-3 px-sm-0 mt-3">{WebText.about.desc}</p>
          <OwlCarousel items={items} autoplay={false} margin={itemsMargin} autoplayHoverPause={true} nav loop>
            <TeamMember member={WebText.about.teamMembers[0]} />
            <TeamMember member={WebText.about.teamMembers[1]} />
            <TeamMember member={WebText.about.teamMembers[2]} />
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
