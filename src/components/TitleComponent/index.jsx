import React from 'react';
import './style.css';

const TitleComponent = ({ title, subTitle }) => {
  return (
    <div className='title'>
      <span>{title}</span>
      <span>{subTitle}</span>
    </div>
  );
};

export default TitleComponent;
