import React from "react";

function CalculatorItem(props) {
  return (
    <>
      <div>
        <p
          className="mb-0 cursor-pointer d-flex align-items-center"
          key={props.calculator.name}
          onClick={() => {
            props.setCategory(props.calculator.category);
            if (window.matchMedia("(max-width: 578px)").matches) {
              let offsetTop = document.getElementById(props.calculator.name).getBoundingClientRect().top + window.scrollY;
              window.scroll({
                top: offsetTop - 150,
                behavior: "smooth",
              });
            } else {
              let offsetTop = document.getElementById("calculatorsSection").offsetTop;
              window.scroll({
                top: offsetTop - 130,
                behavior: "smooth",
              });
            }

            setTimeout(() => {
              document.getElementById(props.calculator.name).style = "box-shadow: 0px 21px 50px rgb(0 0 0 / 50%);transform: scale(1.2)";
            }, 800);
          }}
        >
          <span>{props.calculator.name}</span>
          <i className="bx bxs-calculator ml-2"></i>
        </p>
      </div>
    </>
  );
}

export default CalculatorItem;
