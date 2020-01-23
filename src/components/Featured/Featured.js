import React from 'react';
import './Featured.scss'; 
import WorksCard from '../WorksCard/WorksCard';

const Featured = () => {
  return ( 
    <section className="featured">
      {/* <div className="wrapper"> */}
        <h3>
          Featured Projects
        </h3>
        <div className='featured__projects'>
          <WorksCard image="./img/body/featured/1.png" background={false} />
          <WorksCard image="./img/body/featured/2.png" background={false} />
          <WorksCard image="./img/body/featured/3.png" background={false} />
          <WorksCard image="./img/body/featured/4.png" background={false} />
        </div>
      {/* </div> */}
    </section>
  );
}
 
export default Featured;