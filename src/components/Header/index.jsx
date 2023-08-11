import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { PATHS } from "../../router/paths";
import { useAuthContext } from "../../contexts/AuthContext";
import { ROLES, THEMES } from "../../constants";
import { useThemeContext } from "../../contexts/ThemeContext";

const Header = () => {
  const { role, user, logout } = useAuthContext();
  const { theme, toggleTheme } = useThemeContext();

  const handleLogout = () => {
    logout();
  };

  return (
    // className instead of class
    <header className="header">
      <h1>Header</h1>

      <nav>
        {role === ROLES.GUEST ? (
          <ul>
            <li>
              <NavLink to={PATHS.LOGIN}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Login</u> : "Login"
                }
              </NavLink>
            </li>
            <li>
              <NavLink to={PATHS.SIGNUP}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Sign up</u> : "Sign up"
                }
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <NavLink to={PATHS.HOME}>
                {({ isActive, isPending }) => (isActive ? <u>Home</u> : "Home")}
              </NavLink>
            </li>

            <li>
              <NavLink to={PATHS.POSTS.ROOT}>
                {({ isActive, isPending }) =>
                  isActive ? <u>Posts</u> : "Posts"
                }
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                style={
                  theme === THEMES.LIGHT
                    ? {
                        backgroundColor: "white",
                        color: "black",
                      }
                    : {
                        backgroundColor: "black",
                        color: "white",
                      }
                }
              >
                {theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT}
              </button>
            </li>
            <li>
              <h4>Welcome {user?.username}</h4>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
