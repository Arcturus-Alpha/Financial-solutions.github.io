import React, { useState, useEffect } from "react";
import Calculator from "./Calculator";
import WebsiteText from "../../../WebText";
import "./CalculatorsSection.css";

function CalculatorsSection(props) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    let unique = [...new Set(WebsiteText.calculators.map((calculator) => calculator.category))];

    setCategoryList(unique);
  }, []);

  return (
    <>
      <section id="calculatorsSection" className="pb-4 pb-sm-5 py-4 py-sm-5">
        <div className="container">
          <div className="section-title mb-3">
            <h2>Calculators</h2>
            <p>Number Crunchers with Latest 2021 Regulations</p>
          </div>
          <div className="categories mb-3">
            {categoryList.map((category) => {
              return (
                <p
                  className={"category " + (props.category === category ? "active-category" : "")}
                  onClick={() => {
                    props.setCategory(category);
                  }}
                >
                  {category}
                </p>
              );
            })}
          </div>
          <div className="row calculators justify-content-center">
            {WebsiteText.calculators.map((calculator, index) => {
              if (calculator.category === props.category) {
                return <Calculator calculator={calculator} key={index} />;
              } else {
                return "";
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default CalculatorsSection;
