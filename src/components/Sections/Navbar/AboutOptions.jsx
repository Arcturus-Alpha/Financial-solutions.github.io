import React from "react";

function AboutOptions(props) {
  return (
    <>
      <div className="about-options-container">
        <p
          className="m-0"
          onClick={() => {
            props.navigateTo("aboutSection");
          }}
        >
          Team
        </p>
        <p
          className="m-0"
          onClick={() => {
            props.navigateTo("testimonials");
          }}
        >
          Testimonial
        </p>
        <p
          className="m-0"
          onClick={() => {
            props.navigateTo("clients");
          }}
        >
          Clients
        </p>
      </div>
    </>
  );
}

export default AboutOptions;
