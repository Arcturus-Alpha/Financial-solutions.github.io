import React, { useEffect } from "react";
import WebText from "../../../WebText";
import Deadline from "./Deadline";
import "./Dealine_ScrollBar.css";

function Dealine_ScrollBar() {
  useEffect(() => {
    let itemNumber = 0;
    let totalDeadlines = WebText.deadlines.length;
    // For Infinite Scroll Deadlines
    setInterval(() => {
      var deadlineItem = document.getElementById("deadlineItem");

      var itm = deadlineItem.childNodes[itemNumber];

      var cloneNode = itm.cloneNode(true);

      document.getElementById("deadlineItem").appendChild(cloneNode);

      if (totalDeadlines === itemNumber) {
        itemNumber = 0;
        for (let i = 0; i <= totalDeadlines; i++) {
          deadlineItem.removeChild(deadlineItem.childNodes[0]);
        }
      } else {
        itemNumber++;
      }
    }, 5000);

    // For Scrolling The Deadlines
    setInterval(() => {
      var deadlineInner = document.getElementById("deadlineInner");

      deadlineInner.scrollLeft += 4;
    }, 50);
  }, []);
  return (
    <>
      <div id="deadline" className="fixed-top">
        <div className="deadlineContainer">
          <div className="deadlineInner" id="deadlineInner">
            <div className="deadlineItem" id="deadlineItem">
              {WebText.deadlines.map((deadline, i) => {
                return <Deadline deadline={deadline} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dealine_ScrollBar;
