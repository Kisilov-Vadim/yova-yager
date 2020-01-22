import React, {useState, useEffect} from 'react';
import './Works.scss'

import Masonry from 'react-masonry-css';
import WorksCard from '../WorksCard/WorksCard';

const Works = ({place}) => {
  const [screenWidth, setScreenWidth] = useState(); 

  const resize = () => {
    setScreenWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", resize.bind(this));
    resize(); 

    return () => {
      window.removeEventListener('resize', resize); 
    }
  }, [])

  return ( 
    <section className='works'>
        {place === 'workspage' ? null : <h3 className="works__title">Works</h3>}
        <div className="works__gallery">
          <Masonry 
            breakpointCols={`${screenWidth < 700 ? 1 : 2}`}
            className="works__gallery-table"
            columnClassName="works__gallery-columns"> 
            <WorksCard image="./img/body/works/1.png" background={false} />
            <WorksCard image="./img/body/works/2.png" background={place === 'workspage' ? false : true} />
            <WorksCard image="./img/body/works/3.png" background={false} />
            <WorksCard image="./img/body/works/4.png" background={false} />
          </Masonry>   
        </div>
        <div className="works__more">
          <button className="works__more-button">Load more</button>
        </div>
    </section>
  );
}
 
export default Works;