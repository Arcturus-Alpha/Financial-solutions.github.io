import React, { useRef } from "react";
function Calculator(props) {
  const calculator = useRef();
  const handleClick = (e) => {
    if (!calculator.current?.contains(e.target)) {
      if (calculator.current) {
        calculator.current.style = "box-shadow: none;transform: scale(1);";
      }
    }
  };

  window.addEventListener("mousedown", handleClick, false);

  window.addEventListener("scroll", () => {
    if (calculator.current) {
      calculator.current.style = "box-shadow: none;transform: scale(1);";
    }
  });
  return (
    <>
      <div className="col-11 col-sm-6 col-md-4 col-lg-3 mt-3 px-2 shadowCol mb-3" data-category={props.calculator.category} key={props.key}>
        <div ref={calculator} className="calculator position-relative" id={props.calculator.name}>
          <h5 className="text-center">{props.calculator.name}</h5>
          <p> {props.calculator.content}</p>
          <button className="btn d-flex align-items-center">
            Calculate <i class="bx bxs-calculator ml-2" style={{ fontSize: "1.4rem" }}></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
