import React, { useEffect } from "react";
import WebText from "../../../WebText";
import CalculatorItem from "./CalculatorItem";
import "./CalculatorsBar.css";

function CalculatorsBar(props) {
  useEffect(() => {
    let itemNumber = 0;
    let totalDeadlines = WebText.deadlines.length;
    // For Infinite Scroll Deadlones
    setInterval(() => {
      var calculatorsItem = document.getElementById("calculatorsItem");

      var itm = calculatorsItem.childNodes[itemNumber];

      var cloneNode = itm.cloneNode(true);

      document.getElementById("calculatorsItem").appendChild(cloneNode);

      if (totalDeadlines === itemNumber) {
        itemNumber = 0;
        for (let i = 0; i <= totalDeadlines; i++) {
          calculatorsItem.removeChild(calculatorsItem.childNodes[0]);
        }
      } else {
        itemNumber++;
      }
    }, 5000);

    // For Scrolling The Deadlines
    setInterval(() => {
      var calculatorsInner = document.getElementById("calculatorsInner");

      calculatorsInner.scrollLeft += 4;
    }, 50);
  }, []);
  return (
    <>
      <div id="calculators" className="pt-4">
        <div className="calculatorsContainer">
          <div className="calculatorsInner" id="calculatorsInner">
            <div className="calculatorsItem" id="calculatorsItem">
              {WebText.calculators.map((calculator, i) => {
                return <CalculatorItem setCategory={props.setCategory} calculator={calculator} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorsBar;
