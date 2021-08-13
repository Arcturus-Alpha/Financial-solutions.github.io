import React from "react";

function ServiceOptions() {
  return (
    <>
      <div className="service-options-container options-container row mx-0">
        <div className="col-6 options-container-left">
          <h1>Services</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos consequatur explicabo repellendus accusantium molestiae</p>
          <button className="btn subNavBtn ">What Others are saying</button>
        </div>
        <div className="col-6 options-container-right">
          <div className="row">
            <div className="col-6 option">Business</div>
            <div className="col-6  option">Person, Trusts and Estates</div>
            <div className="col-6 option">First Nations</div>
            <div className="col-6  option">Non-Residents</div>
            <div className="col-6 option">Strata Corporations</div>
            <div className="col-6  option">Bookkeeping</div>
            <div className="col-6 option">Not-For-Profit Organizations</div>
            <div className="col-6  option">Personal Real Estate Corporations</div>
            <div className="col-6 option">Wineries and Vineyards</div>
            <div className="col-6  option">Tax</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceOptions;
