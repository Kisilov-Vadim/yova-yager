import React from 'react';
import Fade from 'react-reveal/Fade';
import './WorksCard.scss';
import {Link} from 'react-router-dom';

const WorksCard = ({image, background}) => {
  return (  
    <div className="card">
      {background === true ? <div className="card__Y"></div> : null}
      <Fade bottom duration={1700} delay={100}>
        <img src={image} alt='1'/>
      </Fade>
      <Link to="/works/altruist" exact className="card__info" onClick={() => window.scrollTo(0, 0)}>
        <div>
          <span>Zmist</span>
          <p>Kyiv. Ukraine</p>
        </div>
      </Link>
    </div>
  );
}
 
export default WorksCard;