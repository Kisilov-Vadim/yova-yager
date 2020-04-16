import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './WorkPage.scss';
import {useSpring, animated} from 'react-spring'; 
// import {JSONLD, Generic} from 'react-structured-data'
// import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'; 
import $ from 'jquery';

import {ButtonDecorate} from '../../components/ButtonDecorate/index';
import {WorkPageGallery} from '../../components/WorkPageGallery/index';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';
import LazyPhotoLoad from '../../components/LazyPhotoLoad/LazyPhotoLoad';
import {getToken, getData} from '../../store/actions'; 
import Preloader from '../../components/Preloader/Preloader';
import WorkPageTable from './WorkPageTable'; 

const shuffle = (arr) => {
	let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

const WorkPage = ({id, language, works, currentWorkData, setCurrentWorkData, area}) => {
  const [showDetails, setShowDetails] = useState(true);
  const [contentHeight, setContentHeight] = useState(0); 
  const [screenWidth, setScreenWidth] = useState($(window).width())

  useEffect(() => {
    setCurrentWorkData(false)
    getToken('http://yova.praid.com.ua/api/login')
      .then(data => data.data['api_token'])
      .then(token => {
        getData(`http://yova.praid.com.ua/api/${area}/${id}`, token)
          .then(data => setCurrentWorkData(data))
          .catch(err => console.log(err))
      })
  }, [])

  useEffect(() => {
    if (!currentWorkData) return
    setContentHeight(document.getElementById('contentShow').scrollHeight); 
    setShowDetails(false)
  }, [currentWorkData])

  useEffect(() => {
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);
    
    return () => {
      window.removeEventListener('resize', resize); 
      window.removeEventListener('orientationchange', resize);
    }
  })

  const resize = () => {
    setScreenWidth($(window).width());
  }

  const showContentAnimation = useSpring({ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0, visibility: showDetails ? 'visible' : 'hidden' })
 
  const worksForAlsoLike = (arr) => {
    let newWorks = arr.filter(item => item.id != id)
    return shuffle(newWorks)
  }

  if (!currentWorkData) {
    return (
      <Preloader />
    )
  } else {

    return (  
      <section className="work" itemscope itemtype="http://schema.org/CreativeWork" itemProp="isFamilyFriendly">
        <div className="wrapper">
          <div className="work__mainTitleContent">
            {
              currentWorkData.en.play === 1 
                ? <iframe 
                    data-test="main_video"
                    className="work__mainVideo"
                    width="100%" 
                    height="100%" 
                    src={currentWorkData.en.video}>
                  </iframe>
                : <LazyPhotoLoad 
                    data-test="main_image"
                    actualClass="work__image" 
                    image={currentWorkData.en.mainImage} 
                    alt={currentWorkData[language === 'en' ? 'en' : 'ua'].title} 
                  />
            }
          </div>
            { 
              language === "en" 
                ? <h1 className="work__left-mobtitle" itemProp="name">{currentWorkData.en.title}</h1> 
                : <h1 className="work__left-mobtitle" itemProp="name">{currentWorkData.ua.title}</h1> 
            }
            <animated.div id="contentShow" className="work__info" style={window.innerWidth < 799 ? showContentAnimation : null}>
              <div className="work__left">
                {
                  language === 'en' 
                    ? <WorkPageTable language="en" content={currentWorkData.en.common_info} />
                    : <WorkPageTable language="ua" content={currentWorkData.ua.common_info} />
                }
                <LazyLoad height={screenWidth > 799 ? 85 : 0} unmountIfInvisible={true}>
                  <div className="work__left-button">
                    <a href={currentWorkData.en.file} download={currentWorkData.en.title}>
                      <ButtonDecorate 
                        title="media kit" 
                        title_ua="Медіа комплект"
                        id={'buttonMedia'} 
                        autoStart={true}
                      />
                    </a>
                  </div>
                </LazyLoad>
              </div>
              <div className="work__right">
                {
                  language === 'en' 
                    ? <h1 
                        data-test="main_title-en" 
                        itemProp="name" className="work__right-title"
                      >
                        {currentWorkData.en.title}
                      </h1>
                    : <h1 
                        data-test="main_title-ua"
                        itemProp="name" 
                        className="work__right-title"
                      >
                        {currentWorkData.ua.title}
                      </h1>
                }
                {
                  language === 'en' 
                    ? 
                      <p data-test="main_description-en" className="work__right-text">{currentWorkData.en.description}</p>
                    : 
                      <p data-test="main_description-us" className="work__right-text">{currentWorkData.ua.description}</p>
                }
              </div>
            </animated.div>
            <button className="work__details" onClick={() => setShowDetails(!showDetails)}>MORE DETAILS {`${showDetails === true ? '-' : '+'}`}</button>
            <WorkPageGallery 
              images={language === 'en' ? currentWorkData.en.images : currentWorkData.ua.images} 
              text_en={currentWorkData.en.description.split('\n')} 
              text_ua={currentWorkData.ua.description.split('\n')}
            />
          <h3 className='work__also'>{language === 'en' ? 'YOU MIGHT ALSO LIKE' : 'Вам може сподобатись'}</h3>
          <MassonryGallery 
            title={false} 
            button={false} 
            worksArr={worksForAlsoLike(works)} 
            count={4} 
            area='works' 
            photoLoadButton={true}
            buttonAutoStart={true}
          />
        </div>
        {/* <JSONLD>
          <Generic type="CreativeWork" jsonldtype="CreativeWork" 
            schema={{ 
              contentLocation: `${currentWorkData[0].location}`,
              materialExtent: `${currentWorkData[0].area}`, 
              creativeWorkStatus: `${currentWorkData[0].status}`, 
              genre: `${currentWorkData[0].art_pattern}`, 
              locationCreated: `${currentWorkData[0].studio}`, 
              additionalType: `${currentWorkData[0].function}`,
            }}>
            <Generic type="author" jsonldtype="Person" schema={{name: `${currentWorkData[0].designer}`}}/>
            <Generic type="contributor" jsonldtype="Person" schema={{ name: `${currentWorkData[0].photographer}` }}/>
          </Generic>
        </JSONLD> */}
        {/* <Helmet>
          <meta name="description" content="Helmet application" />
          <script  type="application/ld+json">
            {`{
              "@context":"https://schema.org/","@type":"CreativeWork","contentLocation":"Antonovicha st., 1, Kiev, Ukraine","materialExtent":"12 m2","creativeWorkStatus":"Realization 2018","genre":"Verdi","locationCreated":"YOVA YAGER hospitality design","additionalType":"Mobile van","author":{"@type":"Person","name":"Yova Yager"},"contributor":{"@type":"Person","name":"Sergei Polushko"}
            }`}
          </script>
        </Helmet> */}
      </section>
    );
  }
}
 
export default WorkPage;