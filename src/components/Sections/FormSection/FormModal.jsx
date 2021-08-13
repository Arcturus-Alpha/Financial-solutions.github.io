import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import FileViewer from "react-file-viewer";
import { Link } from "react-router-dom";

function FormModal(props) {
  const [showFile, setShowFile] = useState(false);
  const closeBtn = useRef();
  console.log(props.data);
  useEffect(() => {
    window.addEventListener("mousemove", () => {
      if (document.getElementById("closeFormModalBtn") && window.matchMedia("(min-width: 578px)").matches) {
        document.getElementById("closeFormModalBtn").style.opacity = "1";
        setTimeout(() => {
          if (document.getElementById("closeFormModalBtn") && window.matchMedia("(min-width: 578px)").matches) {
            document.getElementById("closeFormModalBtn").style.opacity = "0";
          }
        }, 5000);
      }
    });
  }, []);

  const type = "docx";

  return (
    <>
      <Modal show={props.show} animation={true} className="formModal p-0">
        <Modal.Body className="p-2">
          <h5 className="text-center mb-1">{props.data.name}</h5>
          <div className="formModalContent">
            <p className="text-center mb-2">Form No: {props.data.formId}</p>
            <p className="text-center m-0">
              <span className="mr-4">Deadline : {props.data.deadline}</span>
              <span>Uploaded : {props.data.uploaded}</span>
            </p>
            <div className="text-center my-3">
              <button
                className="btn formModalBtns"
                onClick={() => {
                  setShowFile(true);
                }}
              >
                Fill & Send
              </button>
              <Link className="btn formModalBtns" to={props.data.file} target="_blank" download>
                Download
              </Link>
            </div>
            <p>{props.data.desc}</p>
          </div>

          {showFile ? <FileViewer fileType={type} filePath={props.data.file} /> : ""}

          <i
            className="bx bx-x closeModalIcon cursor-pointer"
            id="closeFormModalBtn"
            onClick={() => props.handleModal(false)}
            ref={closeBtn}
            style={{ opacity: "1" }}
          ></i>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormModal;
