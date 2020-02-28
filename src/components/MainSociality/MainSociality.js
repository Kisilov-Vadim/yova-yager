import React from 'react';
import "./MainSociality.scss"; 
import WorksCard from '../WorksCard/WorksCard';
import {Link} from 'react-router-dom';


const MainSociality = ({allSocialities}) => {

  return ( 
    <section className="mainSociality">
      <h3 className="mainSociality__title">Sociality</h3>
      <div className="mainSociality__gallery">
        {allSocialities.map((item, i) => {
          if (i < 2) {
            let locationArr = item.location.split(','); 
            let city = locationArr[2]; 
            let country = locationArr[3]; 
            return <WorksCard 
              key={item.id}
              image={item.projectImage}
              title={item.title}
              location={`${city}. ${country}`}
              backgroundPici={i === 0 ? true : false}
              area='socialities'
            />
          }
        })
        }
      </div>
      <Link to="/sociality" className="mainSociality__gallery-button" onClick={() => window.scrollTo(0,0)}>View All</Link>
    </section>
  );
}
 
export default MainSociality;