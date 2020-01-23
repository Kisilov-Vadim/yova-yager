import React, {useState, useEffect} from 'react';
import './MassonryGallery.scss';
import Masonry from 'react-masonry-css';
import WorksCard from '../WorksCard/WorksCard';

const MassonryGallery = ({title, backgroundY, button, color}) => {
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
    <div className="massonry">
      {title === false ? null : 
        <h2 className="massonry__title" style={{color: `${color}`}}>
          {title}
        </h2>
      }
      <div className="massonry__gallery">
        <Masonry 
          breakpointCols={`${screenWidth < 700 ? 1 : 2}`}
          className="massonry__gallery-table"
          columnClassName="massonry__gallery-columns"> 
          <WorksCard image="./img/body/works/1.png" background={false} />
          <WorksCard image="./img/body/works/2.png" background={backgroundY} />
          <WorksCard image="./img/body/works/3.png" background={false} />
          <WorksCard image="./img/body/works/4.png" background={false} />
        </Masonry>   
      </div>
      {button === false ? null : 
        <div className="massonry__more">
          <button className="massonry__more-button">Load more</button>
        </div>
      }
    </div>
  );
}
 
export default MassonryGallery;