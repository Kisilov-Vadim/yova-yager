import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './WorkPage.scss';
import {useSpring, animated} from 'react-spring'; 
// import {JSONLD, Generic} from 'react-structured-data'
// import Helmet from 'react-helmet'
import LazyLoad from 'react-lazyload'; 

import {ButtonDecorate} from '../../components/ButtonDecorate/index';
import {WorkPageGallery} from '../../components/WorkPageGallery/index';
import {MassonryGallery} from '../../components/MassonryGallery/index';
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

const WorkPage = ({screenWidth, id, language, area, works, featured, allSocialities, currentWorkData, setCurrentWorkData}) => {
  const [showDetails, setShowDetails] = useState(true); 

  useEffect(() => {
    setCurrentWorkData(false)
    getToken('http://yova.praid.com.ua/api/login')
      .then(data => data.data['api_token'])
      .then(token => {
        getData(`http://yova.praid.com.ua/api/project`, token, '', language, id)
          .then(data => setCurrentWorkData(data))
          .catch(err => console.log(err))
      })
  }, [])

  useEffect(() => {
    if (!currentWorkData) return
    setShowDetails(false)
  }, [currentWorkData])

  const showContentAnimation = useSpring({ 
    height: showDetails ? 'auto' : 0, 
    opacity: showDetails ? 1 : 0, 
    visibility: showDetails ? 'visible' : 'hidden',
    marginBottom: showDetails ? 50 : 0
  })
 
  const worksForAlsoLike = () => {
    let returnArr = []; 
    let filteredFeature = featured.filter(item => item.type === area)

    if (area === 'works') {
      let worksWithFeatured = [...works, ...filteredFeature]; 
      worksWithFeatured.forEach(item => {
        if (!returnArr.find(x => x.id === item.id) && item.id != id) {
          returnArr.push(item)
        }
      })
    } else {
      let socWithFeatured = [...allSocialities, ...filteredFeature];
      socWithFeatured.forEach(item => {
        if (!returnArr.find(x => x.id === item.id) && item.id != id) {
          returnArr.push(item)
        }
      }) 
    }
    return shuffle(returnArr)
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
              currentWorkData.play === 1 
                ? <iframe 
                    data-test="main_video"
                    className="work__mainVideo"
                    width="100%" 
                    height="100%" 
                    src={currentWorkData.video}>
                  </iframe>
                : <LazyPhotoLoad 
                    data-test="main_image"
                    actualClass="work__image" 
                    image={currentWorkData.mainImage} 
                    alt={currentWorkData.title} 
                  />
            }
          </div>
            <h1 className="work__left-mobtitle" itemProp="name">{currentWorkData.title}</h1> 
            <animated.div id="contentShow" className="work__info" style={window.innerWidth < 799 ? showContentAnimation : null}>
              <div className="work__left">
                <WorkPageTable language={language} content={currentWorkData.common_info} />
                { currentWorkData.file.length > 0 &&
                  <LazyLoad height={screenWidth > 799 ? 85 : 0} unmountIfInvisible={true}>
                    <div className="work__left-button">
                      <a href={currentWorkData.file} download={currentWorkData.title}>
                        <ButtonDecorate 
                          title="media kit" 
                          title_ua="Медіа комплект"
                          id={'buttonMedia'} 
                          autoStart={true}
                        />
                      </a>
                    </div>
                  </LazyLoad>
                }
              </div>
              <div className="work__right">
              <h1 
                data-test={`main_title-${language}`} 
                itemProp="name" className="work__right-title"
              >
                {currentWorkData.title}
              </h1>
              <p data-test={`main_description-${language}`} className="work__right-text">{currentWorkData.description}</p>
              </div>
            </animated.div>
            <button className="work__details" onClick={() => setShowDetails(!showDetails)}>MORE DETAILS {`${showDetails === true ? '-' : '+'}`}</button>
            {
              currentWorkData.images.length > 0 
                ? 
                  <WorkPageGallery 
                    images={currentWorkData.images} 
                  />
                :
                  null
            }
          <h3 className='work__also'>{language === 'en' ? 'YOU MIGHT ALSO LIKE' : 'Вам може сподобатись'}</h3>
          <MassonryGallery 
            title={false} 
            button={true} 
            worksArr={worksForAlsoLike()} 
            count={4} 
            area={area}
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