import React from 'react';
import './Featured.scss'; 
import Fade from 'react-reveal/Fade';

const Featured = () => {
  return ( 
    <section className="featured">
      <div className="wrapper">
        <h3>
          Featured Projects
        </h3>
        <div className='featured__projects'>
          <div>
            <Fade bottom delay={200}>
              <img src='./img/body/featured/1.png' alt='1'/>
            </Fade>
          </div>
          <div>
            <Fade bottom delay={300}>
              <img src='./img/body/featured/2.png' alt='2'/>
            </Fade>
          </div>
          <div>
            <Fade bottom delay={200}>
              <img src='./img/body/featured/3.png' alt='3'/>
            </Fade>
          </div>
          <div>
            <Fade bottom delay={300}>
              <img src='./img/body/featured/4.png' alt='4'/>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default Featured;