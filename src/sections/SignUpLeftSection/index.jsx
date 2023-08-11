import React from "react";
import logoSignUp from "../../assets/signUpLogo.svg";
import iconQuote from "../../assets/signUp-Icon.svg";
import QuoteComponent from "../../components/QuoteComponent";
import LogoComponent from "../../components/LogoComponent";
import SignUpImg from "../../assets/signUpImg.svg";
import "./style.css";

const Index = () => (
  <div className="signUp-left">
    <LogoComponent logoImg={logoSignUp} logoTitle="Gamers" />
    <div className="SignUp-left-bottom">
      <QuoteComponent
        quoteIcon={iconQuote}
        quoteDesc="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
        quotePerson="Hideo Kojima"
        quoteEnd={SignUpImg}
      />
    </div>
  </div>
);

export default Index;
