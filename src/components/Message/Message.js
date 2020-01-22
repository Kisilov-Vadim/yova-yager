import React from 'react';
import Typist from 'react-typist';
import './Message.scss';

const Message = () => {
  return ( 
    
      <section className="message">
        <div className="message__animation">
          <img src="img/body/wave_1.svg" alt="animation" />
        </div> 
        <div className="wrapper">
          <div className="message__info"> 
            <Typist avgTypingDelay={100} cursor={{show: false}}>
              <h1 className="message__info-title">
                IT'S TIME <br /> TO <span>RETHINK</span>
              </h1>
            </Typist>
            <div className="message__info-text">
              The way we live <br />
              The way we eat <br />
              The materials we use
            </div>
          </div> 
        </div>
      </section>
   );
}
 
export default Message;