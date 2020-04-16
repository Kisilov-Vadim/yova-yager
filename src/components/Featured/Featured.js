import React, {useEffect, useState} from 'react';
import './Featured.scss'; 
import {WorksCard} from '../WorksCard/index';
import $ from 'jquery'; 

const Featured = ({featured, language, allText}) => {
  const [cardsHeight, setCardsHeight] = useState()

  let sortedFeatured = featured.sort((first, second) => first.numberInFeatured - second.numberInFeatured); 

  useEffect(() => {
    setCardsHeight($($('.card')[0]).width())
  }, [])

  return ( 
    <section className="featured">
      <h3>{language === 'en' ? allText['main_subtitle-first_en'] : allText['main_subtitle-first_ua']}</h3>
      <div className='featured__projects' style={{ gridAutoRows: `${cardsHeight}px` }}>
        {sortedFeatured.map((item, i) => {
          if (i < 4 ) {
            let locationArr = item.location.split(',');
            let city = locationArr[2]; 
            let country = locationArr[3]; 
            return <WorksCard 
              key={item.id}
              image={item.projectImage} 
              title={item.title}
              location={`${city}. ${country}`}
              location_ua='Київ, Україна'
              area={item.type}
            />
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
}
 
export default Featured;