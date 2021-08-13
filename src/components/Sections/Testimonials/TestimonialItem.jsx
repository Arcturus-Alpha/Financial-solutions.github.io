import React from "react";

function TestimonialItem(props) {
  return (
    <>
      <div className="item" key={props.key}>
        <div className="testimonial position-relative">
          <div className="testimonialBody">
            <i className="bx bxs-quote-alt-left quote-icon-left" />
            {props.testimonial.text}
            <i className="bx bxs-quote-alt-right quote-icon-right" />
          </div>
          <div className="testimonialAuthor">
            <div className="text-center">
              <p className="name mb-0 fw-500 d-inline">{props.testimonial.name}</p>
              <span className="designation ml-2">{props.testimonial.designation},</span>{" "}
              <span className="location">{props.testimonial.location}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialItem;
