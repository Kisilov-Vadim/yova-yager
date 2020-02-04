import React from 'react';
import './ButtonDecorate.scss'; 

const ButtonDecorate = ({title, id, startAnimate, stopAnimate}) => {

  return (  
    <div className="decorateButton" onMouseOver={startAnimate} onMouseLeave={stopAnimate}>
      <button className="decorateButton-button">{title}</button>
      <svg xmlns="http://www.w3.org/2000/svg" width="145" height="82" viewBox="0 0 145 82" id={id}>
        <g>
          <path fill="none" stroke="#201600" strokeMiterlimit="50" 
            d='M21.846 49.814C14.717 45.661-5.908 24.69 3.346 8.793 12.6-7.104 46.543 6.36 59.743 5.653c24.678-1.326 40.03-6.292 52.881-2.209 18.068 5.741 44.949 40.629 23.356 58.735-7.17 6.013-42.746 31.797-67.423 10.6C54.29 60.524 40.795 60.854 21.846 49.813z'>
          </path>
        </g>
      </svg>
    </div>  
  );
}
 
export default React.memo(ButtonDecorate);