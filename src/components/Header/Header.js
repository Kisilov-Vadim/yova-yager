import React, {useState, useEffect} from 'react';
import './Header.scss'; 

const Header = () => {

  const textInput = React.createRef();
  const [formActive, setFormActive] = useState(false); 
  const [menuShow, setMenuShow] = useState(false)
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

  return ( 
    <header 
      className={`header 
        ${scrollPosition > 0 ? 'header-underline' : null}
        ${scrollStop === true ? null : 'header-invisible'}
        `}
      >
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
          <button 
            onClick={searchClick} 
            className={formActive === true ? 'invisible' : 'visible'}
          >
            <img src="img/header/search.svg" alt="Search"/>
          </button>
          <form className={`header__info-form ${formActive === false ? "invisible" : "visible"}`}>
            <input 
              placeholder="Search..."  
              onBlur={() => setFormActive(!formActive)}
              ref={textInput}
            />
            <button className={`${formActive === true ? 'is-active-button' : null}`}>
              <img src="img/header/search.svg" alt="Search"/>
            </button>
          </form>
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
        <button 
          className="header__info-burger"
          onClick={() => setMenuShow(!menuShow)}
        >
          <img src={`${menuShow === false ? 'img/header/burger.svg' : 'img/header/burger-close.svg'}`} alt="Menu" />
        </button>
      </div>
      <div className={`menu ${menuShow === false ?  "menu-invisible" : null}`}>
        <form></form>
        <nav className="menu__nav">
          <a href="/" className="menu__nav-link">Home</a>  
          <a href="/" className="menu__nav-link">About</a>
          <a href="/" className="menu__nav-link">Works</a>
          <a href="/" className="menu__nav-link">Sociality</a>
          <a href="/" className="menu__nav-link">Blog</a>
          <a href="/" className="menu__nav-link">Career</a>
          <a href="/" className="menu__nav-link">Media Kit</a>
          <a href="/" className="menu__nav-link">Press</a>
          <a href="/" className="menu__nav-link">Contacts</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;