// HeaderComponent.jsx
import React from "react";
import "./style.css";
import useAuth from "../../hooks/useAuth";
import profileImg from "../../assets/default-avatar-profile-icon-vector-social-media-user-photo-700-205577532.jpg";
import { Link } from "react-router-dom";
import { PATHS } from "../../router/paths";
import { useAuthContext } from "../../contexts/AuthContext";

function HeaderComponent() {
  const authContext = useAuthContext();
  const { user } = useAuth();

  return (
    <div className="user-header">
      <div className="user-info">
        <p className="text-para">Welcome back, </p>
        <p className="text-para">{authContext.user?.name}</p>
      </div>

      {user.isAdmin ? (
        <Link className="user-img" to={PATHS.ADMIN.DETAIL}>
          <img src={profileImg} alt="" />
        </Link>
      ) : (
        <Link className="user-img" to={PATHS.USER.DETAIL}>
          <img src={profileImg} alt="" />
        </Link>
      )}
    </div>
  );
}

export default HeaderComponent;
