import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Testimonials.css";
import Testimonial from "./TestimonialItem";
import WebText from "../../../WebText";
function Testimonials() {
  const [windowWidth, setWindowWidth] = useState(0);
  // if (window.matchMedia("(min-width: 1500px)").matches) {
  //   items = 4;
  // }
  let items = 1;
  let itemsMargin = 20;

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
    items = 4;
    itemsMargin = 20;
  }

  if (windowWidth > 1300) {
    itemsMargin = 20;
  }

  if (windowWidth > 2000) {
    items = 5;
    itemsMargin = 40;
  }
  return (
    <>
      <section id="testimonials" className="py-4 py-sm-5 testimonials ">
        <div className="container">
          <div className="section-title mb-3">
            <h2>Testimonials</h2>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <OwlCarousel items={items} autoplay={true} loop margin={itemsMargin}>
            {WebText.testimonials.map((testimonial, i) => {
              return <Testimonial testimonial={testimonial} key={i} />;
            })}
          </OwlCarousel>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
