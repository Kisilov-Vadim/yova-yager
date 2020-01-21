import React from 'react';
import "./Social.scss"; 

const Social = ({place}) => {
  return ( 
    <div className={`social ${place === 'footer' ? 'social__footer' : null}`}>
      <a href="/">
        <span>Inst</span>
      </a>
      <a href="/">
        <span>Fb</span>
      </a>
      <a href="/">
        <span>Be</span>
      </a>
      {place === 'menu' ? 
        <a href="/">
          <span>Pnt</span>
        </a>  : null
      }
    </div>
  );
}
 
export default Social;