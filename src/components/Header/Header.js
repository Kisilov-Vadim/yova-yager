import React, {useState, useEffect} from 'react';
import './Header.scss'; 
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import $ from 'jquery'

import Social from '../Social/Social';
import {SliderMenu} from '../SliderMenu/index';

const Header = ({menuShow, setMenuShow, changeLanguage, setScreenWidth, screenWidth, language}) => {
  const [scrollPosition, setScrollPosition] = useState(0);  

  const getScrollPosition = () => {
    setScrollPosition(window.pageYOffset)
  }

  const unShowMenu = (e) => {
    if (e.target.className === 'menu__front') {
      setMenuShow(false);
    }
  }

  const resize = () => {
    setScreenWidth($(window).width())
  }

  useEffect(() => {
    setScreenWidth($(window).width())
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', getScrollPosition)
    window.addEventListener('resize', resize)
    window.addEventListener('orientationchange', resize);
    
    return () => {
      window.removeEventListener('scroll', getScrollPosition);
      window.removeEventListener('resize', resize)
    window.removeEventListener('orientationchange', resize);
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
              <div className="header__atmosphere-hospitality">
                <span>{scrollPosition > 0 || screenWidth < 949 ? "Y" : "HOSPITALITY"}</span>
              </div>
              <div className="header__atmosphere-design">
                <span>{scrollPosition > 0 || screenWidth < 949 ? "Y" : "DESIGN"}</span>
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