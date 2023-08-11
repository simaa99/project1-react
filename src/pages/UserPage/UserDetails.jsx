import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth"; // Update the path accordingly

const UserInfoPage = () => {
  const { user, getProfileData } = useAuth();

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <div>
      <h1>User Information</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
};

export default UserInfoPage;
