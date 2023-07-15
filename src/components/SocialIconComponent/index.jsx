import React, { Component } from "react";
import socialData from '../../mock/social'
import './style.css'
export default class index extends Component {
  render() {
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
  }
}
