import React, { useState } from "react";
import { useThemeContext } from "../../contexts/ThemeContext";
import "./style.css";
import moonDark from "../../assets/Moon-Dark.svg";
import sunDark from "../../assets/Sun-one-Dark.svg";
import moonLight from "../../assets/Moon-Light.svg";
import sunLight from "../../assets/Sun-one-Light.svg";

function ThemeComponent() {
  const { toggleTheme } = useThemeContext();
  const [isLightTheme, setIsLightTheme] = useState(true);

  const handleLightImageClick = () => {
    setIsLightTheme(true);
    toggleTheme();
  };

  const handleDarkImageClick = () => {
    setIsLightTheme(false);
    toggleTheme();
  };

  return (
    <div
      className={`theme-container ${
        isLightTheme ? "light-theme" : "dark-theme"
      }`}
    >
      <div className="image-box dark-image" onClick={handleDarkImageClick}>
        <img src={isLightTheme ? moonLight : moonDark} alt="Dark Image" />
      </div>
      <div className="image-box light-image" onClick={handleLightImageClick}>
        <img src={isLightTheme ? sunLight : sunDark} alt="Light Image" />
      </div>
    </div>
  );
}

export default ThemeComponent;
