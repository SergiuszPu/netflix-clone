import React from 'react';
import './prevue.scss';

// eslint-disable-next-line react/prop-types
function Prevue({title, subTitle, image, alt, direction, video}) {
  // console.log('image', image);
  return (
    <>
      <div className={direction === 'row' ? 'wrapper row' : 'wrapper reverse'}>
        <div className="prevue__title">
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
        </div>
        <div className="prevue__image">
          <img src={image} alt={alt}></img>
          <video autoPlay playsInline muted loop >
            <source src={video} type="video/mp4"></source>
          </video>
          
        </div>
      </div>
    </>
  );
}

export default Prevue;
