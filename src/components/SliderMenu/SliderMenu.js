import React from 'react';
import './SliderMenu.scss'; 

import {Navigation} from '../Navigation/index'; 
import Social from '../Social/Social'; 

const SliderMenu = ({menuShow, setMenuShow, scrollPosition}) => {

  return ( 
    <div className={`
      menu 
      ${menuShow === true ?  "menu__before-visible" : null}
      ${scrollPosition > 0 ? "menu-scroll" : null}  
    `}>
      <div className={`
        menu__wrapper 
        ${menuShow === false ?  "menu-invisible" : null}
        ${scrollPosition > 0 ? "menu__wrapper-scroll" : null}  
       `}>
        <form className="menu__form">
          <input 
            placeholder='Search...'  
          />
          <button>
            <img src="/img/header/search.svg" alt="search" />
          </button>
        </form>
        <Navigation />
        <div className="menu__social">
          <Social place='menu' />
        </div>
      </div>
    </div>
  );
}
 
export default React.memo(SliderMenu);