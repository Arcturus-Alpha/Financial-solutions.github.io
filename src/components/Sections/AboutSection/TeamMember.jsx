import React from "react";

function TeamMember(props) {
  return (
    <>
      <div className="member d-flex justify-content-center" key={props.member.name}>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={props.member.image} alt="" />
              <p className="member-name mb-0">
                {props.member.name}
                <span className="d-block">{props.member.designation}</span>
              </p>
            </div>
            <div className="flip-card-back">
              <p className="member-about">{props.member.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamMember;
