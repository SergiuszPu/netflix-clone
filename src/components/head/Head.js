import React from 'react';
import {Link} from 'react-router-dom';
import './head.scss';

// eslint-disable-next-line react/prop-types
function Head({children}) {
  return (
    <div className="head__container">
      <div className="head__nav" >
        <Link to='/home'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt='netflix logo'/></Link>
        <Link to='/signin' className='head__login'>Zaloguj się</Link>
      </div>
      {children}
    </div>
  );
}

export default Head;
