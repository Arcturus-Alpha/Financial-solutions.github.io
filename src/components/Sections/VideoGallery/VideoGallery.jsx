import React, { useEffect, useState, useRef } from "react";
import "./VideoGallery.css";
import VideoItem from "./VideoItem";
import VideoModal from "./VideoModal";
import WebsiteText from "../../../WebText";

function VideoGallery() {
  const [currentVideo, setCurrentVideo] = useState();
  const [showVideoGallery, setShowVideGallery] = useState(false);
  const [currentCategory, setCurrentCategory] = useState();
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    let unique = [...new Set(WebsiteText.video.map((video) => video.category))];

    setCategoryList(unique);
    setCurrentCategory(unique[0]);
  }, []);

  function setCategory(category) {
    setCurrentCategory(category);
  }

  function handleVideoGalleryModal() {
    setShowVideGallery(false);
  }

  function setVideoGallery(url) {
    setCurrentVideo(url);
  }

  function setShowVideoGallery() {
    setShowVideGallery(true);
  }

  return (
    <>
      <section className="py-4 py-md-5" id="videoGallery">
        <div className="container">
          <div className="section-title mb-3">
            <h2>Video Gallery</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="categories mb-3">
            {categoryList.map((categoryItem) => {
              return (
                <p
                  className={"category " + (currentCategory === categoryItem ? "active-category" : "")}
                  onClick={() => {
                    setCategory(categoryItem);
                  }}
                >
                  {categoryItem}
                </p>
              );
            })}
          </div>
        </div>

        <div className="container-fluid mt-4">
          <div className="row">
            {WebsiteText.video.map((item) => {
              if (item.category === currentCategory) {
                return <VideoItem data={item} setShowVideoGalleryStatus={setShowVideoGallery} setVideoGallery={setVideoGallery} />;
              } else {
                return "";
              }
            })}
          </div>
        </div>
      </section>
      <VideoModal videoUrl={currentVideo} show={showVideoGallery} handleModal={handleVideoGalleryModal} />
    </>
  );
}

export default VideoGallery;
