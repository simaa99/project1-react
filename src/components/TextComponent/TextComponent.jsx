import React from 'react';
import './style.css'
function TextComponent(props) {
  return (
    <div className='textComponent'>{props.text}</div>
  );
}

export default TextComponent;
