import React from "react";
import "./style.css";
import ButtonComponent from "../../components/ButtonComponent";
import TitleComponent from "../../components/TitleComponent";
import OrLineComponent from "../../components/OrLineComponent";
import arrowBack from "../../assets/arrow_back_ios_24px.svg";
class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      repeatPassword: "",
      passwordStrength: "",
      emailError: "",
      passwordError: "",
      repeatPasswordError: "",
      privacyPolicyError: "",
      agreeToPrivacyPolicy: false,
    };
  }

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    const password = event.target.value;
    const passwordStrength = this.calculatePasswordStrength(password);
    this.setState({ password, passwordStrength });
  };

  handleRepeatPasswordChange = (event) => {
    this.setState({ repeatPassword: event.target.value });
  };

  handlePrivacyPolicyChange = () => {
    this.setState((prevState) => ({
      agreeToPrivacyPolicy: !prevState.agreeToPrivacyPolicy,
    }));
  };

  calculatePasswordStrength = (password) => {
    const consecutiveRepeatRegex = /(.)\1{2,}/;

    let strength = "weak";
    if (password.length >= 8) {
      strength = "strong";
      if (
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /\d/.test(password) &&
        /\W/.test(password)
      ) {
        strength = "very-strong";
      }
    }

    if (consecutiveRepeatRegex.test(password)) {
      strength = "weak";
    }

    return strength;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation on email, password, and privacy policy agreement
    const { email, password, repeatPassword, agreeToPrivacyPolicy } =
      this.state;

    let emailError = "";
    let passwordError = "";
    let repeatPasswordError = "";
    let privacyPolicyError = "";

    if (email.trim() === "") {
      emailError = "Email is required!";
    }

    if (password.trim() === "") {
      passwordError = "Password is required!";
    }

    if (password !== repeatPassword) {
      repeatPasswordError = "Passwords do not match!";
    }

    if (!agreeToPrivacyPolicy) {
      privacyPolicyError = "You must agree to the Privacy Policy!";
    }

    this.setState({
      emailError,
      passwordError,
      repeatPasswordError,
      privacyPolicyError,
    });

    if (
      emailError ||
      passwordError ||
      repeatPasswordError ||
      privacyPolicyError
    ) {
      return;
    }

    setTimeout(() => {
      this.setState({ registrationSuccessful: true }, () => {
        window.location.href = "/login";
      });
    }, 2000);
  };

  render() {
    const {
      email,
      password,
      repeatPassword,
      passwordStrength,
      emailError,
      passwordError,
      repeatPasswordError,
      privacyPolicyError,
      agreeToPrivacyPolicy,
    } = this.state;

    let strengthText = "";

    if (passwordStrength === "weak") {
      strengthText = "Weak";
    } else if (passwordStrength === "strong") {
      strengthText = "Strong";
    } else if (passwordStrength === "very-strong") {
      strengthText = "Very Strong";
    }

    return (
      <>
        <div className="login-section">
          <div className="arrow">
            <img src={arrowBack} alt="arrowBack" className="back-img" />
            <span>Back</span>
          </div>
          <div className="form-wrapper">
            <TitleComponent
              title="Register Individual Account!"
              subTitle="For the purpose of gamers regulation, your details are required."
            />
            <div className="line-sign-up"></div>
            <form onSubmit={this.handleSubmit}>
              <div className="input-view">
                <label>Email address*</label>
                <input
                  type="email"
                  value={email}
                  onChange={this.handleEmailChange}
                  placeholder="Enter email address"
                />
                <div className="error">{emailError}</div>
              </div>

              <div className="input-view">
                <label>Create password*</label>
                <input
                  type="password"
                  value={password}
                  onChange={this.handlePasswordChange}
                  placeholder="Password"
                />
                <div className="password-strength-indicator">
                  <div className={`indicator ${passwordStrength}`} />
                  <p>{strengthText}</p>
                </div>
                <div className="error">{passwordError}</div>
              </div>

              <div className="input-view">
                <label>Repeat password*</label>
                <input
                  type="password"
                  value={repeatPassword}
                  onChange={this.handleRepeatPasswordChange}
                  placeholder="Repeat password"
                />
                <div className="error">{repeatPasswordError}</div>
              </div>

              <div className="input-view">
                <label>
                  <input
                    type="checkbox"
                    checked={agreeToPrivacyPolicy}
                    onChange={this.handlePrivacyPolicyChange}
                    required
                    className="check-box"
                  />
                  I agree to terms & conditions
                </label>
                <div className="error">
                  {!agreeToPrivacyPolicy && privacyPolicyError}
                </div>
              </div>

              <ButtonComponent btn="Register Account" type="submit" />
              <OrLineComponent />
            </form>
            <ButtonComponent btn="login" btnStyle="login-button" />
          </div>
        </div>
      </>
    );
  }
}

export default RegistrationPage;
