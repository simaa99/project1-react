import React from "react";
import logoutImg from "../../assets/icons8-logout-100.png";
import topImg from "../../assets/Game-two (游戏).svg";
import { useAuthContext } from "../../contexts/AuthContext";
import ThemeComponent from "../ThemeComponent/ThemeComponent";
import './style.css'
function SideBarComponent() {
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="sideBarContent">
    <div className="sideBar">
      <img src={topImg} alt="" />
      <img src={logoutImg} onClick={handleLogout} />
      <ThemeComponent/>
    </div>
    <div className="right-line-side"></div>
    </div>
  );
}

export default SideBarComponent;
