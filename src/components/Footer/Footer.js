import React, {useEffect} from 'react';
import "./Footer.scss";

import {Navigation} from '../Navigation/index';
import Social from '../Social/Social';
import {Switch, Route} from 'react-router-dom';
import Image from '../Image/Image'; 

const Footer = ({settings}) => {

  return ( 
    <footer className='footer'>
      <div className="wrapper">
        <h2 className="footer__title">Be free to contact me</h2>
        <div className="footer__content">
          <div className="footer__content-left">
              <Image imageClass="footer__content-mobimage" src="/img/footer/mobimg.png" alt="Yova" />
            <span className="footer__content-name">It’s me, Yova Yager</span>
            <Switch> 
              <Route path="/" exact>
                <Image imageClass="footer__content-image" src="/img/footer/yova-face.png" alt="Yova" />
              </Route>
                <Image imageClass="footer__content-imageFace" src="/img/footer/mobimg.png" alt="Yova" /> 
            </Switch>
          </div>
          <div className="footer__content-right">
            <div className="footer__content-contacts">
              <span>Drop me a line:</span>
              <a href={`mailto:${settings[1].value}`}>{settings[1].value}</a>
              <span>Studio</span>
              {
                settings[3].value.map(item => 
                  <a key={item} href={`tel:${item.split(' ')[1]}`}>{`Tel.: ${item.split(' ')[1]}`}</a>
                )
              }
              
            </div>
            <div className="footer__content-sendmail"> 
              <span>Send mail letters or card:</span>
              {settings[0].value}
              <br/>
              {settings[2].value}
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