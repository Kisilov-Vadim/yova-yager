import React, {useEffect, useState} from 'react';
import Typist from 'react-typist';
import './Message.scss';
import $ from 'jquery'; 
import {useTrail, animated, config} from 'react-spring'; 

import MainWaveAnimatione from '../MainWaveAnimation/MainWaveAnimatione';

const Message = ({language, allText}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showText, setShowText] = useState(false);

  const infoText = allText.main_message_en.split('\n'); 
  const infoTextUa = allText.main_message_ua.split('\n')

  const showAnimation = useTrail(infoText.length, {
    to: { opacity: showText ? 1 : 0, transform: showText ? 'translate(0)' : 'translate(-30%)' }
  })

  useEffect(() => {
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize); 
    
    if (showText) {
      $('.message__info-title')
      .text(language === 'en' 
        ? 
          allText.main_phrase_en
        : 
          allText.main_phrase_ua
      )
    }

    let rigthMargin = $('.message .wrapper').css('margin-right')
    $('.message__animation').css('right', `-${rigthMargin}`)

    return () => {
      window.removeEventListener('resize', resize); 
      window.removeEventListener('orientationchange', resize); 
    }
  }); 

  const resize = () => {
    setScreenWidth(window.innerWidth);
  }

  return ( 
    <section className="message">
     <div className="wrapper">
        <div className="message__info"> 
          <Typist 
            startDelay={500} 
            onTypingDone={() => setShowText(true)} 
            avgTypingDelay={100} 
            cursor={{show: false}}
          >
            <h1 className="message__info-title">{language === 'en' ? allText.main_phrase_en : allText.main_phrase_ua}</h1>
          </Typist>
          <div className="message__info-text">
            {showAnimation.map((item, index) => (
              showText &&
              language === 'en' 
                ?
                  <animated.p style={item} key={index}>
                    {infoText[index]}
                  </animated.p> 
                :
                  <animated.p style={item} key={index}>
                    {infoTextUa[index]}
                  </animated.p>
            ))}
          </div>
        </div>
      <MainWaveAnimatione start={showText}/>
      <div className="message__social">
        <a href="https://www.instagram.com/yovayager/" target="_blank">Instagram</a>
        <a href="https://www.behance.net/yovayager" target="_blank">Behance</a>
        <a href="https://www.pinterest.com/yovayager/" target="_blank">Pinterest</a>
      </div> 
    </div>
    </section>
   );
}
 
export default React.memo(Message);