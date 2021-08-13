import React from "react";

function AboutOptions() {
  return (
    <>
      <div className="about-options-container options-container row mx-0">
        <div className="col-6 options-container-left">
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos consequatur explicabo repellendus accusantium molestiae</p>
          <button className="btn subNavBtn ">Ask Us Anything</button>
        </div>
        

        <div class="btn-group">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Right-aligned menu
  </button>
  <div class="dropdown-menu dropdown-menu-right">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
       
      </div>
    </>
  );
}

export default AboutOptions;
