import React, {useState, useEffect} from 'react';
import './MassonryGallery.scss';
import Masonry from 'react-masonry-css';
import WorksCard from '../WorksCard/WorksCard';
import ButtonDecorate from '../ButtonDecorate/ButtonDecorate';
import PropTypes from 'prop-types'
import Warp from 'warpjs'; 


const MassonryGallery = ({title, backgroundY, backgroundPici, button, color, worksArr}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); 
  const [elementCount, setElementCount] = useState(4); 
  
  let animIdGallery, svgGallery, warpGallery, animateGallery; 
  let offsetGallery = 0

  let countWorks = [...worksArr]; 
  countWorks.length = elementCount;  

  useEffect(() => {
    window.addEventListener('resize', resize);
    if (screenWidth > 800) {
      svgGallery = document.getElementById('buttonMassonry');
      warpGallery = new Warp(svgGallery)
      warpGallery.interpolate(10)
      warpGallery.transform(([ x, y ]) => [ x, y, y ])
      animateGallery = () => {
        warpGallery.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 16 + offsetGallery), oy ])
        animIdGallery = requestAnimationFrame(animateGallery)
        offsetGallery += 0.2;
      } 
    }
    
    return () => {
      window.removeEventListener('resize', resize); 
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null;
    }
  })

  const resize = () => {
    setScreenWidth(window.innerWidth);
  }

  const startAnimate = () => {
    if (!animIdGallery) {
      animateGallery();
    } else {
      return
    }
  }

  const stopAnimate = () => {
    setTimeout(() => {
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null;
    }, 1000) 
  }


  return (  
    <div className="massonry">
      {title === false ? null : 
        <h2 className="massonry__title" style={{color: `${color}`}}>
          {title}
        </h2>
      }
      <div className="massonry__gallery">
        <Masonry 
          breakpointCols={`${screenWidth < 699 ? 1 : 2}`}
          className="massonry__gallery-table"
          columnClassName="massonry__gallery-columns"> 

          {countWorks.map((work, index) => {
            let locationArr = work.location.split(',');
            let city = locationArr[2]; 
            let country = locationArr[3];
            return <WorksCard 
              key={work.id}
              image={work.projectImage} 
              title={work.title}
              location={`${city}. ${country}`}
              backgroundY={backgroundY === true ? index === 1 ? true : false : false}
              backgroundPici={backgroundPici === true ? index === 0 ? true : false : false}
              area={work.categoryUrl}
            />
          })}

        </Masonry>   
      </div>
      <div 
        onClick={() => setElementCount(elementCount + 2)} 
        className={elementCount >= worksArr.length ? 'massonry__gallery-button-invisible' : null}
      >
        {button === false ? null : 
          <ButtonDecorate 
            title='Load More' 
            id={'buttonMassonry'} 
            startAnimate={startAnimate}
            stopAnimate={stopAnimate} 
          />
        }
      </div>
    </div>
  );
}
 
MassonryGallery.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string, 
  backgroundY: PropTypes.bool, 
  button: PropTypes.bool.isRequired
}

MassonryGallery.defaultProps = {
  backgroundY: false, 
  count: 4
}

export default MassonryGallery;