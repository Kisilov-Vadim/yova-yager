import React from 'react';
import './Navigation.scss';
import {Link} from 'react-router-dom';

const Navigation = ({place, showMenu, setMenuShow}) => {
  
  const clickOnLink = () => {
    window.scrollTo(0,0)
    setMenuShow(false)
  }
  
  return ( 
    <nav className={`menu__nav ${place === 'footer' ? 'footer__nav' : null}`}>
      <Link to="/" exac className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`} onClick={clickOnLink}>Home</Link>  
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>About</a>
      <Link to="/works" exac className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`} onClick={clickOnLink}>Works</Link>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Sociality</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Blog</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Career</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Media Kit</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Press</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Contacts</a>
    </nav>
  );
}
 
export default React.memo(Navigation);
