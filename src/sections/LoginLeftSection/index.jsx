import React, { Component } from "react";
import logoLogin from "../../assets/Group 3.svg";
import iconQuote from "../../assets/icon-quote.svg";
import QuoteComponent from "../../components/QuoteComponent";
import LogoComponent from "../../components/LogoComponent";
import LoginImg from "../../assets/login-icon-end.svg";
import "./style.css";
export default class index extends Component {
  render() {
    return (
      <div className="login-left">
        <LogoComponent
          logoImg={logoLogin}
          logoTitle="Gamers"
          isLogin={true}
          isTitleLogin={true}
        />
        <div className="logo-left-bottom">
          <QuoteComponent
            quoteIcon={iconQuote}
            quoteDesc="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
            quotePerson="Hideo Kojima"
            quoteEnd={LoginImg}
            isLogin={true}
          />
        </div>
      </div>
    );
  }
}
