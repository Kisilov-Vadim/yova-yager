import React, { useState, useEffect } from 'react';
import './WorkPage.scss';
import Warp from 'warpjs'; 
import {useSpring, animated} from 'react-spring'; 
import ImagesLoaded from 'react-images-loaded';

import ButtonDecorate from '../ButtonDecorate/ButtonDecorate';
import WorkPageGallery from '../WorkPageGallery/WorkPageGallery';
import MassonryGallery from '../MassonryGallery/MassonryGallery';
import {getToken, getData} from '../../store/actions'; 


const WorkPage = ({data, works, allImages, currentWorkData, setCurrentWorkData, setIsLoaded, isLoaded, area}) => {
  const [showDetails, setShowDetails] = useState(true);
  const [contentHeight, setContentHeight] = useState(0)
  const [mainPhoto, setMainPhoto] = useState(false); 
  let animIdMedia, svgMedia, warpMedia, animateMedia;
  let animateSpeed = 4; 
  let offsetMedia = 0;

  useEffect(() => {
    getToken('http://yova.praid.com.ua/api/login')
      .then(data => data.data['api_token'])
      .then(token => {
        getData(`http://yova.praid.com.ua/api/${area}/${data.id}`, token)
          .then(data => setCurrentWorkData(data))
          .catch(err => console.log(err))
      })
  }, [])

  useEffect(() => {
    setContentHeight(document.getElementById('contentShow').scrollHeight); 
    setShowDetails(false)
  }, [])

  useEffect(() => {
    if (!currentWorkData) {
      return
    }
    svgMedia = document.getElementById('buttonMedia');
    warpMedia = new Warp(svgMedia);
    warpMedia.interpolate(10);
    warpMedia.transform(([ x, y ]) => [ x, y, y ]);
    animateMedia = () => {
      warpMedia.transform(([ x, y, oy ]) => [ x, oy + animateSpeed * Math.sin(x / 16 + offsetMedia), oy ])
      animIdMedia = requestAnimationFrame(animateMedia);
      offsetMedia += 0.08;
    } 
  })

  const startAnimate = () => {
    if (!animIdMedia) {
      animateSpeed = 4; 
      animateMedia();
    } else {
      return
    }
  }

  const stopAnimate = () => {
    cancelAnimationFrame(animIdMedia); 
    animIdMedia = null
    animateSpeed = 3.5
    animateMedia()
    
    setTimeout(() => {
      cancelAnimationFrame(animIdMedia); 
      animIdMedia = null
      animateSpeed = 3
      animateMedia()
    }, 200)

    setTimeout(() => {
      cancelAnimationFrame(animIdMedia); 
      animIdMedia = null
      animateSpeed = 2.5
      animateMedia()
    }, 400)

    setTimeout(() => {
      cancelAnimationFrame(animIdMedia); 
      animIdMedia = null
      animateSpeed = 2
      animateMedia()
    }, 600)

    setTimeout(() => {
      cancelAnimationFrame(animIdMedia); 
      animIdMedia = null
      animateSpeed = 1.5
      animateMedia()
    }, 800)

    setTimeout(() => {
      cancelAnimationFrame(animIdMedia); 
      animIdMedia = null
      animateSpeed = 1
      animateMedia()
    },1000)

    setTimeout(() => {
      cancelAnimationFrame(animIdMedia); 
      animIdMedia = null
      animateSpeed = 0.5
      animateMedia()
    }, 1200)

    setTimeout(() => {
      cancelAnimationFrame(animIdMedia); 
      animIdMedia = null
    }, 1400)
  }

  const currentAllImages = allImages
    .filter(item => (area === 'works' ? item.worksID : item.socialityID) === data.id)
    .sort((first, second) => first.order - second.order); 

  const showContentAnimation = useSpring({ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0, visibility: showDetails ? 'visible' : 'hidden' })
  const showMainPhoto = useSpring({ opacity: mainPhoto ? 1 : 0 })
 

  return (  
    <section className="work">
      <div className="wrapper">
        {
          currentWorkData 
          ? 
            <ImagesLoaded
              elementType={'div'}
              className={'work__image'}
              done={() => setMainPhoto(true)}
            >
              <animated.img src={currentWorkData.mainImage} alt={currentWorkData.title || "Altruist"} style={showMainPhoto} />
            </ImagesLoaded> 
          : 
            <div className="work__image"></div>
        }
        
        <h1 className="work__left-mobtitle">
          {data.title}
        </h1>
          <animated.div id="contentShow" className="work__info" style={window.innerWidth < 799 ? showContentAnimation : null}>
            <div className="work__left">
              <table className="work__left-table">
                <tbody>
                  <tr>
                    <td>Location</td>
                    <td>{data.location}</td>
                  </tr>
                  <tr>
                    <td>Function</td>
                    <td>{data.function}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>{data.area}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{data.status}</td>
                  </tr>
                  <tr>
                    <td>Designer</td>
                    <td>{data.designer}</td>
                  </tr>
                  <tr>
                    <td>Art pattern</td>
                    <td>{data.art_pattern}</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td>{data.studio}</td>
                  </tr>
                  <tr>
                    <td>Photographer</td>
                    <td>{data.photographer}</td>
                  </tr>
                </tbody>
              </table>
              <div className="work__left-button">
                <a href={`http://yova.praid.com.ua/${area}pdf/${data.id}`}>
                  <ButtonDecorate 
                    title="media kit" 
                    id={'buttonMedia'} 
                    startAnimate={startAnimate}
                    stopAnimate={stopAnimate} 
                  />
                </a>
              </div>
            </div>
            <div className="work__right">
              <h1 className="work__right-title">
                {data.title}
              </h1>
              {data.description.split('\r\n\r\n').map((item, index) => {
                if (index >= 3) {
                  return 
                } 
                return <p key={item} className="work__right-text">
                  {item}
                </p>
                }
              )}
            </div>
          </animated.div>
          <button className="work__details" onClick={() => setShowDetails(!showDetails)}>MORE DETAILS {`${showDetails === true ? '-' : '+'}`}</button>
          <WorkPageGallery images={currentAllImages} text={data.description.split('\r\n\r\n')} />
        <h3 className='work__also'>YOU MIGHT ALSO LIKE</h3>
        <MassonryGallery title={false} button={true} worksArr={works} count={4} area='works' />
      </div>
    </section>
  );
}
 
export default WorkPage;