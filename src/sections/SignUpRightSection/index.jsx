import React, { Fragment, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import TitleComponent from "../../components/TitleComponent";
import OrLineComponent from "../../components/OrLineComponent";
import ButtonComponent from "../../components/ButtonComponent";
import { SIGNUP_INPUTS } from "../../constants/auth";
import arrowBack from "../../assets/arrow_back_ios_24px.svg";
import "./style.css"; // Import the CSS styles
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";

const SignUpPage = () => {
  const { signup, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [rePasswordError, setRePasswordError] = useState("");

  const validatePasswordMatch = () => {
    if (formData.password !== formData.repassword) {
      setRePasswordError("Passwords do not match!");
      return false;
    }
    setRePasswordError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validatePasswordMatch()) {
      return;
    }

    signup({
      name: formData.username,
      email: formData.email,
      password: formData.password,
    });
  };

  const handleChangeInput = ({ target: { value, name } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login-section">
        <div className="arrow">
          <img src={arrowBack} alt="arrowBack" className="back-img" />
          <Link to={PATHS.LOGIN}>Back</Link>
        </div>
        <div className="form-wrapper">
          <TitleComponent
            title="Register Individual Account!"
            subTitle="For the purpose of gamers regulation, your details are required."
          />
          <div className="line-sign-up"></div>

          {SIGNUP_INPUTS.map((input) => (
            <Fragment key={input.id}>
              <div className="input-view">
                <label htmlFor={input.id}>{input.label}</label>
                <input
                  type={input.type}
                  id={input.id}
                  name={input.id}
                  onChange={handleChangeInput}
                  value={formData[input.id]}
                  required
                />
              </div>
            </Fragment>
          ))}

          <div className="input-view">
            <label>
              <input type="checkbox" required className="check-box" />I agree to
              terms & conditions
            </label>
            <div className="error">
              {!isLoading && <p>{rePasswordError}</p>}
            </div>
          </div>

          <ButtonComponent
            btn={isLoading ? "Loading..." : "Register Account"}
            type="submit"
          />
          <OrLineComponent />
          <Link className="login-button" to={PATHS.LOGIN}>
            Login
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpPage;
