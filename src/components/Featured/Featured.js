import React, {useEffect, useState} from 'react';
import './Featured.scss'; 
import WorksCard from '../WorksCard/WorksCard';
import $ from 'jquery'; 

const Featured = ({featured}) => {
  const [cardsHeight, setCardsHeight] = useState()

  let sortedFeatured = featured.sort((first, second) => first.numberInFeatured - second.numberInFeatured); 

  // const calcCardHeight = () => {
  //   let cw = $($('.card')[0]).width();
  //   setCardsHeight(cw)
  // }

  useEffect(() => {
    setCardsHeight($($('.card')[0]).width())
  })

  console.log(cardsHeight)
  return ( 
    <section className="featured">
        <h3>
          Featured Projects
        </h3>
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