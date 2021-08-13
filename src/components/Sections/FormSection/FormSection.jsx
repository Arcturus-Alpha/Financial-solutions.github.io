import React, { useState } from "react";
import WebsiteText from "../../../WebText";
import Form from "./Form";
import FormModal from "./FormModal";
import "./FormSection.css";
function FormSection() {
  const [showFormModal, setFormModal] = useState(false);
  const [modalData, setModalData] = useState();

  function ModalData(data) {
    setModalData(data);
  }

  function handleFormModal(state) {
    setFormModal(state);
  }

  return (
    <>
      <div className="formSection py-4 py-sm-5" id="formSection">
        <div className="container">
          <div className="section-title mb-3">
            <h2>Forms</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="row forms justify-content-center">
            {WebsiteText.forms.map((form) => {
              return <Form data={form} setModalData={ModalData} handleFormModal={handleFormModal} />;
            })}
          </div>
        </div>
      </div>
      {showFormModal ? <FormModal data={modalData} show={showFormModal} handleModal={handleFormModal} /> : ""}
    </>
  );
}

export default FormSection;
