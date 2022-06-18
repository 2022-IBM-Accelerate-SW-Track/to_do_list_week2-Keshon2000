import React, { Component } from "react";
import "./About.css";
import profile_pic_1 from "../assets/profile_pic_1.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic_1}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Keshon Shell</div>
            <div className="brief_description">
              Hello, I'm currently a junior majoring at the University of Central Florida studying Computer Enigeering. I enjoy working out and currently became a huge fan of basketball.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
