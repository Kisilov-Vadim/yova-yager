import React from 'react';
import "./MainSociality.scss"; 
import {WorksCard} from '../WorksCard/index';
import {Link} from 'react-router-dom';
import {ButtonDecorate} from '../ButtonDecorate/index';
import LazyLoad from 'react-lazyload';


const MainSociality = ({allSocialities, language, allText}) => {

  return ( 
    <section className="mainSociality">
      <h3 className="mainSociality__title">{language === 'en' ? "Sociality" : "Соціальність"}</h3>
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
              location_ua='Київ, Україна'
              backgroundPici={i === 0 ? true : false}
              area='socialities'
            />
          }
        })
        }
      </div>
      <LazyLoad unmountIfInvisible={true} offset={200} height={80}>
        <Link to="/sociality" className="mainSociality__gallery-button" onClick={() => window.scrollTo(0,0)}>
          <ButtonDecorate 
            title={allText.button_link_en}
            title_ua={allText.button_link_ua}
            id="viewAllButton"
            autoStart={true}
          />
        </Link>
      </LazyLoad>
    </section>
  );
}
 
export default MainSociality;