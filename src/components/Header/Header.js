import React from 'react';
import './Header.scss'; 

const Header = () => {
  
  return ( 
    <header className="header">
      <div className="header__atmosphere">
        <div className="header__atmosphere-hospitality">
          <img src="img/header/hospitality.svg" alt="Hospitality and Design"/>
        </div>
        <div className="header__atmosphere-design">
          <img src="img/header/design.svg" alt="Hospitality and Design"/>
        </div>
      </div>
      <a href="/">
        <div className="header__logo">
          <img src="img/header/yovayager.svg" alt="Yova Yager" />
        </div>
      </a>
      <div className="header__info">
        <div className="header__info-search">
          <button>
            <img src="img/header/search.svg" alt="Search"/>
          </button>
        </div>
        <div className="header__info-social">
          <a href="/">
            <span>Inst</span>
          </a>
          <a href="/">
            <span>Fb</span>
          </a>
          <a href="/">
            <span>Be</span>
          </a>
        </div>
        <button className="header__info-burger">
          <img src="img/header/burger.svg" alt="Menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;