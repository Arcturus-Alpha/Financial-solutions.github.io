import React, { useEffect, useRef } from "react";

import { Modal } from "react-bootstrap";

function VideoModal(props) {
  const closeBtn = useRef();
  useEffect(() => {
    window.addEventListener("mousemove", () => {
      if (document.getElementById("closeModalBtn") && window.matchMedia("(min-width: 578px)").matches) {
        document.getElementById("closeModalBtn").style.opacity = "1";
        setTimeout(() => {
          if (document.getElementById("closeModalBtn") && window.matchMedia("(min-width: 578px)").matches) {
            document.getElementById("closeModalBtn").style.opacity = "0";
          }
        }, 5000);
      }
    });
  }, []);

  return (
    <>
      <Modal show={props.show} animation={true} className="videoGalleryModal p-0">
        <Modal.Body className="p-0">
          <iframe
            title="VideoPlayer"
            id="ytplayer"
            className="w-100 h-100"
            type="text/html"
            src={props.videoUrl + "?autoplay=1&showinfo=0&controls=0"}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;fullscreen; picture-in-picture"
            allowfullscreen
          />
          <i
            className="bx bx-x closeModalIcon cursor-pointer"
            id="closeModalBtn"
            onClick={props.handleModal}
            ref={closeBtn}
            style={{ opacity: "1" }}
          ></i>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoModal;
