import React from "react";

function Deadline(props) {
  return (
    <>
      <div>
        <p className="mb-0 cursor-pointer" key={props.deadline.name}>
          {props.deadline.title}
        </p>
      </div>
    </>
  );
}

export default Deadline;
