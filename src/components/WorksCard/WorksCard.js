import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import './WorksCard.scss';
import {Link} from 'react-router-dom';

const WorksCard = ({image, background}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  const handleResize = () => {
    setWindowWidth(window.innerWidth); 
  }

  useEffect(() => {
    document.addEventListener('resize', handleResize); 
    
    return () => {
      document.removeEventListener('resize', handleResize); 
    }
  })

  if (windowWidth > 400) {

    return ( 
      <Fade bottom duration={1700} delay={100}>
        <div className="card">
          {background === true ? <div className="card__Y"></div> : null}
          <img src={image} alt='1'/>
          <Link to="/works/altruist" exact className="card__info" onClick={() => window.scrollTo(0, 0)}>
            <div>
              <span>Zmist</span>
              <p>Kyiv. Ukraine</p>
            </div>
          </Link>
        </div>
      </Fade>
    );
  } else {

    return (
      <div className="card">
        {background === true ? <div className="card__Y"></div> : null}
        <img src={image} alt='1'/>
        <Link to="/works/altruist" exact className="card__info" onClick={() => window.scrollTo(0, 0)}>
          <div>
            <span>Zmist</span>
            <p>Kyiv. Ukraine</p>
          </div>
        </Link>
      </div>
    )
  }

  
}
 
export default WorksCard;