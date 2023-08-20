import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth"; // Update the path accordingly
import SideBarComponent from "../../components/SideBar.jsx/SideBarComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import './style.css'
const UserInfoPage = () => {
  const { user, getProfileData } = useAuth();

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div className="user-detail-container">
      <SideBarComponent/>
      <div className="user-details-view">
      <HeaderComponent/>
      <div className="user-card-info">
        <h1>User Information</h1>
        {user ? (
          <div className="user-info-text">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {user.isAdmin ? <p>Role: admin</p> : <p>Role: user</p>}
          </div>
        ) : (
          <p>Loading user information...</p>
        )}
      </div>

      </div>

    </div>
  );
};

export default UserInfoPage;
