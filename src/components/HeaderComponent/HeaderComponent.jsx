// HeaderComponent.jsx
import React from 'react';
import './style.css';
import profileImg from '../../assets/Rectangle 1.svg';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { useAuthContext } from '../../contexts/AuthContext';

function HeaderComponent() {
  const authContext = useAuthContext();



  return (
    <div className='user-header'>
      <div className='user-info' >
        <p className="text-para">Welcome back, </p>
        <p className="text-para">{authContext.user?.name}</p>
      </div>
      <Link className='user-img' to={PATHS.USER.DETAIL}>
        <img src={profileImg} alt="" />
      </Link>
    </div>
  );
}

export default HeaderComponent;