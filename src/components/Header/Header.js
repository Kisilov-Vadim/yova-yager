import React, {useState, useEffect} from 'react';
import './Header.scss'; 
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import $ from 'jquery'

import Social from '../Social/Social';
import {SliderMenu} from '../SliderMenu/index';

const Header = ({menuShow, setMenuShow, getAllData, changeLanguage, language}) => {
  const [scrollPosition, setScrollPosition] = useState(0);  

  const getScrollPosition = () => {
    setScrollPosition(window.pageYOffset)
  }

  const unShowMenu = (e) => {
    if (e.target.className === 'menu__front') {
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
    $('body').css('overflow', 'hidden')
    $('.menu__front').css('display', 'block')
  } else {
    $('body').css('overflow', 'auto')
    $('.menu__front').css('display', 'none')
  }

  const clickOnLink = () => {
    setMenuShow(false)
    window.scrollTo(0,0)
  }

  return ( 
    <>
      <header  
        data-test="mainHeader"
        className="header"
        id="header"
      >
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
              <Switch>
                <Route exact={true} path="/">
                  <span className="header__logo">YOVA YAGER</span>
                </Route> 
                  <Link to='/' className="header__logo" exact={true} onClick={clickOnLink}>YOVA YAGER</Link>
              </Switch>
            <div className="header__info">
              {/* <HeaderSearch /> */}
              <div className="header__info-language">
                <span 
                  className={language === 'en' ? "active" : null}
                  onClick = {() => changeLanguage('en')}
                >
                  EN
                </span>
                <span
                  className={language === 'ua' ? "active" : null}
                  onClick = {() => changeLanguage('ua')}
                >
                  UA
                </span>
              </div>
              <div 
                className={`header__info-burger ${menuShow === true ? "header__info-burger-show" : null}`} 
                onClick={() => setMenuShow(!menuShow)}
              >
                <div className="up_line" />
                <div className="down_line" />
              </div>
            </div>
          </div>
          <SliderMenu scrollPosition={scrollPosition} unShowMenu={unShowMenu} />
        </div>
      </header>
    </>
  );
}

export default Header;