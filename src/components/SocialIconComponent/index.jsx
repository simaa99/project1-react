import React from "react";
import socialData from '../../mock/social';
import './style.css';

const SocialIconComponent = () => {
  return (
    <div className="social-icon-view">
      <div className="social">
        {socialData.map((item) => (
          <div className="social-icon" key={item.id}>
            <div>
              <img src={item.src} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="socail-line"></div>
    </div>
  );
};

export default SocialIconComponent;
