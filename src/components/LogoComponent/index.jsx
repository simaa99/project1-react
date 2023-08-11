import React from "react";
import "./style.css";

const LogoComponent = ({ logoImg, logoTitle, isLogin, isTitleLogin }) => (
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

export default LogoComponent;
