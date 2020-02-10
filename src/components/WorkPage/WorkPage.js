import React, { useState, useEffect } from 'react';
import './WorkPage.scss';
import Warp from 'warpjs'; 

import ButtonDecorate from '../ButtonDecorate/ButtonDecorate';
import WorkPageGallery from '../WorkPageGallery/WorkPageGallery';
import MassonryGallery from '../MassonryGallery/MassonryGallery';
import {getToken, getData} from '../../store/actions'; 

const WorkPage = ({data, works, allImages, currentWorkData, setCurrentWorkData, setIsLoaded, isLoaded, area}) => {
  const [showDetails, setShowDetails] = useState(false);
  let animIdMedia, svgMedia, warpMedia, animateMedia;
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
    if (!currentWorkData) {
      return
    }
    svgMedia = document.getElementById('buttonMedia');
    warpMedia = new Warp(svgMedia);
    warpMedia.interpolate(10);
    warpMedia.transform(([ x, y ]) => [ x, y, y ]);
    animateMedia = () => {
      warpMedia.transform(([ x, y, oy ]) => [ x, oy + 4 * Math.sin(x / 16 + offsetMedia), oy ])
      animIdMedia = requestAnimationFrame(animateMedia);
      offsetMedia += 0.2;
    } 
  })

  const startAnimate = () => {
    if (!animIdMedia) {
      animateMedia();
    } else {
      return
    }
  }

  const stopAnimate = () => {
    setTimeout(() => {
      cancelAnimationFrame(animIdMedia); 
      animIdMedia = null;
    }, 1000) 
  }

  const currentAllImages = allImages
    .filter(item => (area === 'works' ? item.worksID : item.socialityID) === data.id)
    .sort((first, second) => first.order - second.order); 

  return (  
    <section className="work">
      <div className="wrapper">
        <div className="work__image">
          <img src={currentWorkData.mainImage} alt={currentWorkData.title || "Altruist"} />
        </div>
        <h1 className="work__left-mobtitle">
          {data.title}
        </h1>
          <div className={`work__info ${showDetails === true ? null : 'work__info-invisible'}`}>
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
          </div>
          <button className="work__details" onClick={() => setShowDetails(!showDetails)}>MORE DETAILS {`${showDetails === true ? '-' : '+'}`}</button>
          <WorkPageGallery images={currentAllImages} text={data.description.split('\r\n\r\n')} />
        <h3 className='work__also'>YOU MIGHT ALSO LIKE</h3>
        <MassonryGallery title={false} backgroundY={true} button={true} worksArr={works} count={4} area='works' />
      </div>
    </section>
  );
}
 
export default WorkPage;