import React, {useState, useEffect} from 'react';
import './MassonryGallery.scss';
import Masonry from 'react-masonry-css';
import WorksCard from '../WorksCard/WorksCard';
import ButtonDecorate from '../ButtonDecorate/ButtonDecorate';
import PropTypes from 'prop-types'
import Warp from 'warpjs'; 
import $ from 'jquery'


const MassonryGallery = ({title, backgroundPici, button, color, worksArr, area, photoLoadButton, count}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); 
  const [elementCount, setElementCount] = useState(count); 

  let animIdGallery, svgGallery, warpGallery, animateGallery; 
  let offsetGallery = 0
  let animateSpeed = 4; 

  let countWorks = [...worksArr, ...worksArr, ...worksArr]; 
  let testCountWorks = [...countWorks]
  testCountWorks.length = elementCount; 
  
  useEffect(() => {
    setElementCount(count)
  }, [worksArr])

  useEffect(() => {
    window.addEventListener('resize', resize);
    if (photoLoadButton && screenWidth > 800 && button) {
      svgGallery = document.getElementById('buttonMassonry');
      warpGallery = new Warp(svgGallery)
      warpGallery.interpolate(10)
      warpGallery.transform(([ x, y ]) => [ x, y, y ])
      animateGallery = () => {
        warpGallery.transform(([ x, y, oy ]) => [ x, oy + animateSpeed * Math.sin(x / 16 + offsetGallery), oy ])
        animIdGallery = requestAnimationFrame(animateGallery)
        offsetGallery += 0.08;
      } 
    }

    if (!photoLoadButton) {
      window.addEventListener('scroll', onScrollList);
    }
    
    return () => {
      window.removeEventListener('resize', resize); 
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null;
      
      if (!photoLoadButton) {
        window.removeEventListener('scroll', onScrollList);
      }
    }
  })

  const resize = () => {
    setScreenWidth(window.innerWidth);
  }

  const startAnimate = () => {
    if (!animIdGallery) {
      console.log(animateGallery)
      animateSpeed = 4; 
      animateGallery();
    } else {
      return
    }
  }

  const stopAnimate = () => {
    console.log(animateGallery)
    cancelAnimationFrame(animIdGallery); 
    animIdGallery = null
    animateSpeed = 3.5
    animateGallery()
    
    setTimeout(() => {
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null
      animateSpeed = 3
      animateGallery()
    }, 200)

    setTimeout(() => {
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null
      animateSpeed = 2.5
      animateGallery()
    }, 400)

    setTimeout(() => {
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null
      animateSpeed = 2
      animateGallery()
    }, 600)

    setTimeout(() => {
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null
      animateSpeed = 1.5
      animateGallery()
    }, 800)

    setTimeout(() => {
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null
      animateSpeed = 1
      animateGallery()
    },1000)

    setTimeout(() => {
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null
      animateSpeed = 0.5
      animateGallery()
    }, 1200)

    setTimeout(() => {
      cancelAnimationFrame(animIdGallery); 
      animIdGallery = null
    }, 1400)
  }

  const onScrollList = () => {
    let gallery = $('.massonry .massonry__gallery'); 
    const scrollBottom = gallery.scrollTop() + gallery.outerHeight() - ($(window).scrollTop() + $(window).innerHeight() / 2); 

    if (scrollBottom < 0) {
      setElementCount(elementCount + 6)
    }
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

          {testCountWorks.map((work, index) => {
            let locationArr = work.location.split(',');
            let city = locationArr[2]; 
            let country = locationArr[3];
            return <WorksCard 
              key={work.id}
              image={work.projectImage} 
              title={work.title}
              location={`${city}. ${country}`}
              backgroundPici={backgroundPici === true ? index === 0 ? true : false : false}
              area={area}
            />
          })}

        </Masonry>   
      </div>
      {
        photoLoadButton && button ?
          <div 
            onClick={() => setElementCount(elementCount + 6)} 
            className={elementCount >= countWorks.length ? 'massonry__gallery-button-invisible' : null}
          >
            <ButtonDecorate 
              title='Load More' 
              id={'buttonMassonry'} 
              startAnimate={startAnimate}
              stopAnimate={stopAnimate} 
            />
          </div> 
          : null
      }
    </div>
  );
}
 
MassonryGallery.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string, 
  button: PropTypes.bool.isRequired, 
  photoLoadButton: PropTypes.bool
}

MassonryGallery.defaultProps = {
  photoLoadButton: true
}

export default MassonryGallery;