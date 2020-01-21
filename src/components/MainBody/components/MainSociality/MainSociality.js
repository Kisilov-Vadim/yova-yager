import React from 'react';
import "./MainSociality.scss"; 
import Fade from 'react-reveal/Fade';

const MainSociality = () => {

  return ( 
      <section className="mainSociality">
        <div className="wrapper">
          <h3 className="mainSociality__title">Sociality</h3>
          <div className="mainSociality__gallery">
            <Fade bottom delay={200}>
              <div>
                <img src="img/body/sociality/1.png" alt="Sociality" />
              </div>
            </Fade>
            <Fade bottom delay={200}>
              <div>
                <img src="img/body/sociality/2.png" alt="Sociality" />
              </div>
            </Fade>
          </div>
          <button className="mainSociality__gallery-button">View All</button>
      </div> 
    </section>
  );
}
 
export default MainSociality;