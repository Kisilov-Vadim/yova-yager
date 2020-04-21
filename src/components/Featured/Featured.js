import React, {useEffect, useState} from 'react';
import './Featured.scss'; 
import {WorksCard} from '../WorksCard/index';
import $ from 'jquery'; 

const Featured = ({screenWidth, featured, language, allText}) => {
  const [cardsHeight, setCardsHeight] = useState() 
  
  useEffect(() => {
    setCardsHeight($($('.card')[0]).width())
  }, [screenWidth])

  return ( 
    <section className="featured">
      <h3>{language === 'en' ? allText['main_subtitle-first_en'] : allText['main_subtitle-first_ua']}</h3>
      <div className='featured__projects' style={{ gridAutoRows: `${cardsHeight}px` }}>
        {featured.map((item, i) => {
            return <WorksCard 
              key={item.id}
              image={item.projectImage} 
              title={item.title}
              link={item.alias}
              location={item.city_country}
              area={item.type}
            />
        })}
      </div>
    </section>
  );
}
 
export default Featured;