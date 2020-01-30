import React, {useState, useEffect} from 'react';
import "./MainSociality.scss"; 
import Fade from 'react-reveal/Fade';

const MainSociality = () => {
  
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

  return ( 
      <section className="mainSociality">
        <h3 className="mainSociality__title">Sociality</h3>
        <div className="mainSociality__gallery">
          {
            windowWidth > 400 ? 
            <Fade bottom delay={200}>
              <div>
                <img src="/img/body/sociality/1.png" alt="Sociality" />
              </div>
              <div>
                <img src="/img/body/sociality/2.png" alt="Sociality" />
              </div>
            </Fade> : 
            <>
              <div>
                <img src="/img/body/sociality/1.png" alt="Sociality" />
              </div>
              <div>
                <img src="/img/body/sociality/2.png" alt="Sociality" />
              </div>
            </>
          }
        </div>
        <button className="mainSociality__gallery-button">View All</button>
    </section>
  );
}
 
export default MainSociality;