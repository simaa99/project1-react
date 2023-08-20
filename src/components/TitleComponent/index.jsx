import React from 'react';
import './style.css';

const TitleComponent = ({ title, subTitle ,classTitle}) => {
  return (
    <div className={`title ${classTitle}`}>
      <span>{title}</span>
      <span>{subTitle}</span>
    </div>
  );
};

export default TitleComponent;
