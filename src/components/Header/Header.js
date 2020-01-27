import React, {useState, useEffect} from 'react';
import './Header.scss'; 
import {Link} from 'react-router-dom';

import Social from '../Social/Social';
import SliderMenu from '../SliderMenu/SliderMenu';

const Header = ({menuShow, setMenuShow}) => {

  const textInput = React.createRef();
  const [formActive, setFormActive] = useState(false); 
  const [scrollPosition, setScrollPosition] = useState(0);  
  const [scrollStop, setScrollStop] = useState(true);  
  let timer;

  const getScrollPosition = () => {
    setScrollPosition(window.pageYOffset)
    setScrollStop(false)
    clearTimeout(timer);
    if (scrollPosition > 0) {
      timer = setTimeout(() => {
        setScrollStop(true)
      }, 1500)
    } 
  }

  const searchClick = () => {
    setFormActive(!formActive);
  } 

  useEffect(() => {
    textInput.current.focus();
    window.addEventListener('scroll', getScrollPosition)
    return () => {
      window.removeEventListener('scroll', getScrollPosition); 
    }
  }) 

  if (menuShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return ( 
    <header 
      className={`header 
        ${scrollPosition > 0 ? 'header-underline' : null}
        ${scrollStop === true ? null : 'header-invisible'}
        `}
      >
      <div className="header__atmosphere">
        <div className="header__atmosphere-hospitality">
          <img src="/img/header/hospitality.svg" alt="Hospitality and Design"/>
        </div>
        <div className="header__atmosphere-design">
          <img src="/img/header/design.svg" alt="Hospitality and Design"/>
        </div>
        <div className="header__atmosphere-YY">
          <img src="/img/header/YY.png" alt="YY" />
        </div>
      </div>
        <div className="header__logo">
          <Link to="/" exact="true" onClick={() => setMenuShow(false)}><img src="/img/header/yovayager.svg" alt="Yova Yager" /></Link> 
        </div>
      <div className="header__info">
        <div className="header__info-search">
          <button 
            onClick={searchClick} 
            className={formActive === true ? 'invisible' : 'visible'}
          >
            <img src="/img/header/search.svg" alt="Search"/>
          </button>
          <form className={`header__info-form ${formActive === false ? "invisible" : "visible"}`}>
            <input 
              placeholder="Search..."  
              onBlur={() => setFormActive(!formActive)}
              ref={textInput}
            />
            <button className={`${formActive === true ? 'is-active-button' : null}`}>
              <img src="/img/header/search.svg" alt="Search"/>
            </button>
          </form>
        </div>
        <div className="header__info-social">
          <Social />
        </div>
        <button 
          className="header__info-burger"
          onClick={() => setMenuShow(!menuShow)}
        >
          <img src={`${menuShow === false ? '/img/header/burger.svg' : '/img/header/burger-close.svg'}`} alt="Menu" />
        </button>
      </div>
      <div className={`menu ${menuShow === false ?  "menu-invisible" : null}`}>
        <SliderMenu />
      </div>
    </header>
  );
}

export default Header;