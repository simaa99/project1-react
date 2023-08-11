import React from 'react';
import './style.css';

const ButtonComponent = ({ btnStyle, btn, type }) => (
  <button className={`btn ${btnStyle}`} type={type}>
    {btn}
  </button>
);

export default ButtonComponent;
