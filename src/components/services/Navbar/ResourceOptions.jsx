import React from "react";

function ResourceOptions() {
  return (
    <>
      <div className="resource-options-container options-container row mx-0">
        <div className="col-6 options-container-left">
          <h1>Resources</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos consequatur explicabo repellendus accusantium molestiae</p>
          <button className="btn subNavBtn ">Meet Our Leadership Team</button>
        </div>
        <div className="col-6 options-container-right">
          <div className="row">
            <div className="col-6 option">Form</div>
            <div className="col-6 option">Calculator</div>
            <div className="col-6 option">Blog</div>
            <div className="col-6 option">Case Study</div>
            <div className="col-6 option">Video</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResourceOptions;
