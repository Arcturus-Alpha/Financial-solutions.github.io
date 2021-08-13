import React from "react";
import MessageIcon from "../../Assets/messageIcon.png";
import "./RightSideBar.css";
function RightSideBar() {
  return (
    <>
      <div className="rightSideBar">
        <img src={MessageIcon} alt="" />
      </div>
    </>
  );
}

export default RightSideBar;
