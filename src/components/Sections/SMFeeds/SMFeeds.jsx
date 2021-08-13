import React, { useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "./SMFeeds.css";
function SMFeeds() {
  // Adding Facebook Timeline(for responsive width) - stick the page in https://developers.facebook.com/docs/plugins/page-plugin/ to get the iFrame code
  useEffect(() => {
    let width = document.getElementById("twitterTimeline").firstChild.clientWidth;
    document.getElementById("facebookTimeline").innerHTML = `<iframe
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSigBowls&tabs=timeline&width=${width}&height=400&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=298222915194974"
    height="400"
    width=${width}
    style={{ border: "none", overflow: "hidden", width: "100%" }}
    scrolling="no"
    frameborder="0"
    data-adapt-container-width="true"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  ></iframe>
`;
  });
  return (
    <>
      <section id="socialFeeds" className=" pt-sm-5 pt-4 pb-2 pb-sm-3 pt-4">
        {/* <img src={SMFeedsBg} alt="" className="SM-Bg" /> */}
        <div className="container">
          <div className="section-title mb-3">
            <h2>Social Feeds</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className=" row mx-0 p-0 pl-md-4 pb-3 pr-sm-5 smFeeds justify-content-center">
          <div className="col-11 col-sm-6 col-md-3 mt-3 shadow-col" id="twitterTimeline">
            <TwitterTimelineEmbed sourceType="profile" screenName="atulguptagst" options={{ height: 400 }} />
          </div>

          <div className="col-11 col-sm-6 col-md-3 mt-3 shadow-col ml-sm-5" id="facebookTimeline"></div>
        </div>
      </section>
    </>
  );
}

export default SMFeeds;
