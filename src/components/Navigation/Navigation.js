import React from 'react';
import './Navigation.scss';

const Navigation = ({place}) => {

  return ( 
    <nav className={`menu__nav ${place === 'footer' ? 'footer__nav' : null}`}>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Home</a>  
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>About</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Works</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Sociality</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Blog</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Career</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Media Kit</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Press</a>
      <a href="/" className={`menu__nav-link ${place === 'footer' ? 'footer__nav-link' : null}`}>Contacts</a>
    </nav>
  );
}
 
export default Navigation;
