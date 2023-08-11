import React, { Component } from "react";
import LoginLeftSection from "../../sections/LoginLeftSection";
import LoginRightSection from "../../sections/LoginRightSection";
import "./style.css";
export default class index extends Component {
  render() {
    return (
      <div className="login-page">
        <LoginLeftSection />
        <LoginRightSection />
      </div>
    );
  }
}
