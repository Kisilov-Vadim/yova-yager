import React from 'react';
import Fade from 'react-reveal/Fade';
import './WorksCard.scss';

const WorksCard = ({image, background}) => {
  return (  
    <div>
      {background === true ? <div className="works__Y"></div> : null}
      <Fade bottom delay={200}>
        <img src={image} alt='1'/>
      </Fade>
      <div className="works__info">
        <div>
          <span>Zmist</span>
          <p>Kyiv. Ukraine</p>
        </div>
      </div>
    </div>
  );
}
 
export default WorksCard;