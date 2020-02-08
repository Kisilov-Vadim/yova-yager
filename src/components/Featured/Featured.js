import React from 'react';
import './Featured.scss'; 
import WorksCard from '../WorksCard/WorksCard';

const Featured = ({featured}) => {

  let sortedFeatured = featured.sort((one, two) => one.numberInFeatured - two.numberInFeatured); 

  return ( 
    <section className="featured">
        <h3>
          Featured Projects
        </h3>
        <div className='featured__projects'>
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
                area={item.categoryUrl}
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