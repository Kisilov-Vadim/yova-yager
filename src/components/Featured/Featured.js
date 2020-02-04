import React from 'react';
import './Featured.scss'; 
import WorksCard from '../WorksCard/WorksCard';

const Featured = ({featured}) => {

  return ( 
    <section className="featured">
        <h3>
          Featured Projects
        </h3>
        <div className='featured__projects'>
          {(featured).map((item, i) => {
            if (i < 4 ) {
              let locationArr = item.location.split(',');
              let city = locationArr[2]; 
              let country = locationArr[3]; 
              return <WorksCard 
                key={item.id}
                image={item.projectImage} 
                title={item.title}
                location={`${city}. ${country}`}
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