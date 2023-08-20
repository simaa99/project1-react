import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { LOGIN_INPUTS } from "../../constants/auth";
import ButtonComponent from "../../components/ButtonComponent";
import TitleComponent from "../../components/TitleComponent";
import SocialIconComponent from "../../components/SocialIconComponent";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
});

const LoginPage = () => {
  const { login, isLoading } = useAuthContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    login(data);
  };

  return (
    <div className="login-section">
      <div className="form-wrapper">
        <TitleComponent
          title="Join the game!"
          subTitle="Go inside the best gamers social network!"
          classTitle="classTitle"
        />
        <SocialIconComponent />
        <form onSubmit={handleSubmit(onSubmit)}>
          {LOGIN_INPUTS.map((input) => (
            <div className="input-view" key={input.id}>
              <label htmlFor={input.id}>{input.label}</label>
              <Controller
                control={control}
                name={input.id}
                render={({ field }) => (
                  <input type={input.type} id={input.id} {...field} />
                )}
              />
              <div className="error">{errors[input.id]?.message}</div>
            </div>
          ))}

          <ButtonComponent
            btn={isLoading ? "Loading..." : "Login"}
            type="submit"
          />
          <div className="register-link">
            Don't have an account?{" "}
            <Link to={PATHS.SIGNUP} className="register-name">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
