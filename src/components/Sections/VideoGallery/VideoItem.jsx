import React from "react";

function VideoItem(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 video position-relative">
      <img src={props.data.thumbnail} alt="" className="img-fluid" />
      <button
        className="play-btn"
        onClick={() => {
          props.setShowVideoGalleryStatus();
          props.setVideoGallery(props.data.videoUrl);
        }}
      ></button>
    </div>
  );
}

export default VideoItem;
