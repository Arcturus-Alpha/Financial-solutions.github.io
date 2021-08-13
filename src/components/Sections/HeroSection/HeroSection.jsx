import React from "react";
import "./HeroSection.css";
import {Modal} from "react-bootstrap";
import {useState,useEffect} from "react";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      
      <Modal.Body className="popup">

      <div className="section-one-wrapper">
        <div className="row align-items-center">
          <div className="col-17 col-sm-6 left-block ">
	<br/><h1>GST Compliance</h1>
   <p>Compliance is not you business but a requirement.  Stay on top of GST deadlines so you can focus on your business.  Enter the details and download latest copy of GST compliance calendar.
    <span> <br/>Name 
<br/>Firm Name 
<br/>Email
<br/>Phone
<br/>Country
<br/>Firm website</span></p>
</div></div></div>
       </Modal.Body>
           
    </Modal>
  );
}

   

function HeroSection() {
    const [modalShow, setModalShow] = useState(false);
    useEffect(() => {
 setTimeout(function(){ setModalShow(true)}, 1000);
    }, [])
  return (
    <div>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="heroSection" id="heroSection">
      </div>
    </div>
  );
};

export default HeroSection;
