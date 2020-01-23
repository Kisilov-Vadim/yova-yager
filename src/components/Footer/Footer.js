import React from 'react';
import "./Footer.scss";

import {Navigation} from '../Navigation/index';
import Social from '../Social/Social';
import {Switch, Route} from 'react-router-dom';

const Footer = () => {
  return ( 
    <footer className='footer'>
      <div className="wrapper">
        <h2 className="footer__title">Be free to contact me</h2>
        <div className="footer__content">
          <div className="footer__content-left">
            <div className="footer__content-mobimage">
              <img src="img/footer/mobimg.png" alt="Yova" />
            </div>
            <span className="footer__content-name">It’s me, Yova Yager</span>
            <Switch> 
              <Route path="/" exact>
                <div className="footer__content-image">
                  <img src="img/footer/yova-face.png" alt="Yova" />
                </div>
              </Route>
              <div className="footer__content-imageFace">
                <img src="img/footer/mobimg.png" alt="Yova" />
              </div>
            </Switch>
          </div>
          <div className="footer__content-right">
            <div className="footer__content-contacts">
              <span>Drop me aline:</span>
              hello@yovayager.com
              <span>Studio</span>
              Tel.: +380955388407
              Tel.: +380665388407
            </div>
            <div className="footer__content-sendmail"> 
              <span>Send mail letters or card:</span>
              YY Studio <br />
              Ukraine, Kiev 01001 <br />
              Mihaylivsky bystr, 9a, office 35 <br />
            </div>
          </div>
        </div>
        <div className="footer__menu">
          <Navigation place='footer' />
        </div>
        <div className="footer__social">
          <Social place='footer' />
        </div>
        
      </div>
    </footer>
  );
}
 
export default Footer;