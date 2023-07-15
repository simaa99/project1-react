import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
  render() {
    const { logoImg, logoTitle, isLogin, isTitleLogin } = this.props;
    return (
      <div className="logo">
        <img
          src={logoImg}
          alt="logo-img"
          className={`logo-img ${isLogin ? "logo-login" : ""}`}
        />
        <span className={`logo-title ${isTitleLogin ? "title-login" : ""}`}>
          {logoTitle}
        </span>
      </div>
    );
  }
}
