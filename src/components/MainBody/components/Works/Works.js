import React from 'react';
import './Works.scss'
import Fade from 'react-reveal/Fade';
import Masonry from 'react-masonry-css';

const Works = () => {
  
  return ( 
    <section className='works'>
      <div className="wrapper">
        <h3 className="works__title">
          Works  
        </h3>
        <div className="works__gallery">
          <Masonry 
            breakpointCols={2}
            className="works__gallery-table"
            columnClassName="works__gallery-columns"> 
            <div>
              <Fade bottom delay={200}>
                <img src='./img/body/works/1.png' alt='1'/>
              </Fade>
            </div>
            <div>
              <div className="works__Y"></div>
              <Fade bottom delay={300}>              
                <img src='./img/body/works/2.png' alt='2'/>
              </Fade>
            </div>
            <div>
              <Fade bottom delay={200}>
                <img src='./img/body/works/3.png' alt='3'/>
              </Fade>
              </div>
            <div>
              <Fade bottom delay={300}>
                <img src='./img/body/works/4.png' alt='4'/>
              </Fade>
            </div>
          </Masonry>   
        </div>
        <div className="works__more">
          <button className="works__more-button">Load more</button>
        </div>
      </div>
    </section>
  );
}
 
export default Works;