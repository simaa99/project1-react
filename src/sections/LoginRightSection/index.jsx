import React, { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { LOGIN_INPUTS } from "../../constants/auth";
import ButtonComponent from "../../components/ButtonComponent";
import TitleComponent from "../../components/TitleComponent";
import SocialIconComponent from "../../components/SocialIconComponent";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";

const LoginPage = () => {
  const { login, isLoading } = useAuthContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors = { ...formErrors };
    LOGIN_INPUTS.forEach((input) => {
      if (!formData[input.id]) {
        newErrors[input.id] = `${input.label} is required!`;
      } else {
        newErrors[input.id] = "";
      }
    });
    setFormErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      login(formData);
      console.log(formData)
    }
  };

  const handleChangeInput = ({ target: { value, name } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <>
      <div className="login-section">
        <div className="form-wrapper">
          <TitleComponent
            title="Join the game!"
            subTitle="Go inside the best gamers social network!"
          />
          <SocialIconComponent />
          <form onSubmit={handleSubmit}>
            {LOGIN_INPUTS.map((input) => (
              <div className="input-view" key={input.id}>
                <label htmlFor={input.id}>{input.label}</label>
                <input
                  type={input.type}
                  id={input.id}
                  name={input.id}
                  onChange={handleChangeInput}
                  value={formData[input.id]}
                  required
                />
                <div className="error">{formErrors[input.id]}</div>
              </div>
            ))}

            <ButtonComponent
              btn={isLoading ? "loading..." : "login"}
              type="submit"
            />
            <div className="register-link">
              Don’t have an account?{" "}
              <Link to={PATHS.SIGNUP} className="rigister-name">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
