import React from "react";

function Map() {
  return (
    <>
      <section id="locate" className=" pt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.767411792373!2d75.99999861414913!3d10.67515326397543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7bf434c9d2f8f%3A0x87ceab85f10e82dd!2sGuruvayur!5e0!3m2!1sen!2sin!4v1621169288241!5m2!1sen!2sin"
          width="100%"
          height="350px"
          title="Map"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </section>
    </>
  );
}

export default Map;
