import React, {useEffect} from 'react';
import "./Footer.scss";

import {Navigation} from '../Navigation/index';
import Social from '../Social/Social';
import {Switch, Route} from 'react-router-dom';
import Image from '../Image/Image'; 

const Footer = ({settings, language, allText}) => {

  return ( 
    <footer className='footer' id="footer">
      <div className="wrapper">
        <h2 className="footer__title">{language === 'en' ? allText.footer_title_en : allText.footer_title_ua}</h2>
        <div className="footer__content">
          <div className="footer__content-left">
            <span className="footer__content-name" itemProp="author">{language === 'en' ? allText.footer_withPhoto_en : allText.footer_withPhoto_ua}</span>
            <Image imageClass="footer__content-imageFace" src="img/footer/YY-10.png" alt="Yova" /> 
          </div>
          <div className="footer__content-right">
            <div className="footer__content-right-info">
              <div className="footer__content-contacts">
                <span>{language === 'en' ? allText['footer_mail-title_en'] : allText['footer_mail-title_ua']}</span>
                {
                  allText['footer_mail-text_en'].split('\n').map(item => 
                    <a key={item} href={`mailto:${item}`}>{item}</a>
                  )
                }
                <span className="second-span">{language === 'en' ? allText['footer_call-title_en'] : allText['footer_call-title_ua']}</span>
                {
                  allText['footer_call-text_en'].split('\n').map(item => 
                    <a key={item} href={`tel:${item}`}>{item}</a>
                  )
                }
                
              </div>
              <div className="footer__content-sendmail"> 
                <span>{language === 'en' ? allText['footer_post-title_en'] : allText['footer_post-title_ua']}</span>
                <p>{language === 'en' ? allText['footer_post-text_en'] : allText['footer_post-text_ua']}</p>
                <div className="footer__social">
                  <Social place='footer' />
                </div>
              </div>
            </div>
            <div className="footer__menu">
              <Navigation place='footer' />
            </div>
          </div>
        </div>        
      </div>
    </footer>
  );
}
 
export default Footer;