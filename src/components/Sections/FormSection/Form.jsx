import React from "react";

function Form(props) {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 p-2 " key={props}>
        <div
          className="form h-100"
          onClick={() => {
            props.setModalData(props.data);
            props.handleFormModal(true);
          }}
        >
          <h6 className="text-center mb-1">{props.data.name}</h6>
          <p className="text-center mb-2">Form No: {props.data.formId}</p>
          <p className="text-center m-0 formDates">
            <span>Deadline : {props.data.deadline}</span>
            <span>Uploaded : {props.data.uploaded}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Form;
