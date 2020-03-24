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
    if (e.target.tagName !== 'DIV') {return}; 
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
        className="header">
        <div className="wrapper">
          <div
            className={`header__wrapper 
            ${scrollPosition > 0 ? 'header-scroll' : null}
            `}
          >
            <div className="header__atmosphere">
              <div className="header__atmosphere-YY">
                <img src="/img/header/YY.png" alt="YY" />
              </div>
              <div className="header__atmosphere-hospitality">
                <span>HOSPITALITY</span>
              </div>
              <div className="header__atmosphere-design">
                <span>DESIGN</span>
              </div>
            </div>
              <Link to="/" className="header__logo" exact onClick={clickOnLink}>YOVA YAGER</Link> 
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
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;