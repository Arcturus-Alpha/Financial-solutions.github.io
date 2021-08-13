import React from "react";

function ResourceOptions(props) {
  return (
    <>
      <div className="resource-options-container options-container row mx-0">
        <div className="col-6 options-container-left">
          <h1>Resources</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos consequatur explicabo repellendus accusantium molestiae</p>
          <button className="btn subNavBtn ">Meet Our Leadership Team</button>
        </div>
        <div className="col-6 options-container-right">
          <div className="row align-items-center">
            <div
              className="col-4  option"
              onClick={() => {
                props.navigateTo("calculatorsSection");
              }}
            >
              Calculator
            </div>
            <div
              className="col-4  option"
              onClick={() => {
                props.navigateTo("formSection");
              }}
            >
              Forms
            </div>
            <div
              className="col-4  option"
              onClick={() => {
                props.navigateTo("videoGallery");
              }}
            >
              Video
            </div>
            <div className="col-4  option">Case Study</div>
            <div className="col-4  option">Blog</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResourceOptions;
