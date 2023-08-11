import React from "react";
import "./style.css";

const QuoteComponent = ({ quoteIcon, quoteDesc, quoteEnd, quotePerson, isLogin }) => (
  <div className="quote-side">
    <img src={quoteIcon} alt="quote-icon" />
    <p className={`quote-desc ${isLogin ? "quote-italic" : ""}`}>
      {quoteDesc}
    </p>
    <span className={`quote-name ${isLogin ? "quote-gray" : ""}`}>
      {quotePerson}
    </span>
    <img
      src={quoteEnd}
      alt="quote-end-icon"
      className={`qoute-end ${isLogin ? "quote-login-end" : ""}`}
    />
  </div>
);

export default QuoteComponent;
