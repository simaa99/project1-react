import React from 'react';
import './style.css'; // Import the CSS file

function CardComponent(props) {
  const {   imageUrl, text, backgroundImg, stylingImg, stylingImg2, imageUrl2 ,text2} = props;


  return (
    <div className={`cardClasses ${backgroundImg}`}>
      <div className="image">
        <img src={imageUrl} alt="Card" className={`image-style ${stylingImg}`} />
        <img src={imageUrl2} alt="Card" className={`image-style2 ${stylingImg2}`} />
      </div>
      <div className='text-right'>
        <p>{text}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default CardComponent;