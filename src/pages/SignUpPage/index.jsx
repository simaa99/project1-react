import React, { Component } from "react";
import SignUpLeftSection from "../../sections/SignUpLeftSection";
import SignUpRightSection from "../../sections/SignUpRightSection";
import "./style.css";
export default class index extends Component {
  render() {
    return (
      <div className="sign-up-page">
        <SignUpLeftSection />
        <SignUpRightSection />
      </div>
    );
  }
}
