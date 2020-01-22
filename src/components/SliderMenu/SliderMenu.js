import React from 'react';
import './SliderMenu.scss'; 

import {Navigation} from '../Navigation/index'; 
import Social from '../Social/Social'; 

const SliderMenu = ({closeMenu}) => {

  return ( 
    <>
      <form className="menu__form">
        <input 
          placeholder='Search...'  
        />
        <button>
          <img src="img/header/search.svg" alt="search" />
        </button>
      </form>
      <Navigation />
      <div className="menu__social">
        <Social place='menu' />
      </div>
    </>
  );
}
 
export default React.memo(SliderMenu);