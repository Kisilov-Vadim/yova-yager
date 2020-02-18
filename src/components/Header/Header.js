import React, {useState, useEffect} from 'react';
import './Header.scss'; 
import {Link} from 'react-router-dom';

import Social from '../Social/Social';
import {SliderMenu} from '../SliderMenu/index';

const Header = ({menuShow, setMenuShow, getAllData}) => {
  const [scrollPosition, setScrollPosition] = useState(0);  

  const getScrollPosition = () => {
    setScrollPosition(window.pageYOffset)
  }

  const unShowMenu = (e) => {
    if (e.target.tagName != 'DIV') {return}; 
    if (e.target.className.includes('menu__before-visible')) {
      setMenuShow(false);
    }
  }

  useEffect(() => {
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

  const clickOnLink = () => {
    window.scrollTo(0,0)
    setMenuShow(false)
  }

  return ( 
    <>
      <header 
        className={`header 
          ${scrollPosition > 0 ? 'header-underline header-scroll' : null}
          `}
        >
        <div className="header__atmosphere">
          <div className="header__atmosphere-hospitality">
            <img src="/img/header/hospitality.svg" alt="Hospitality"/>
          </div>
          <div className="header__atmosphere-design">
            <img src="/img/header/design.svg" alt="Design"/>
          </div>
          <div className="header__atmosphere-YY">
            <img src="/img/header/YY.svg" alt="YY" />
          </div>
        </div>
          <div className="header__logo">
            <Link to="/" exact="true" onClick={clickOnLink}><img src="/img/header/yovayager.svg" alt="Yova Yager" /></Link> 
          </div>
        <div className="header__info">
          {/* <HeaderSearch /> */}
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
        <SliderMenu scrollPosition={scrollPosition} unShowMenu={unShowMenu} />
      </header>
    </>
  );
}

export default Header;