import React, {useEffect} from 'react';
import "./MainPage.scss"; 
import LazyLoad from 'react-lazyload'; 
import {getData, getToken} from '../../store/actions';

import {Message} from '../../components/Message/index'; 
import {Featured} from '../../components/Featured/index'; 
import {MainSociality} from '../../components/MainSociality/index';
import {MassonryGallery} from '../../components/MassonryGallery/index';
import Preloader from '../../components/Preloader/Preloader';

const MainPage = ({works, allSocialities, allText, language, isLoaded, setAllWorks, setIsLoaded, setAllSocialities, setFeatured}) => {

  useEffect(() => {
    setAllWorks([])
    setAllSocialities([])
    getToken('http://yova.praid.com.ua/api/login')
      .then(data => data.data['api_token'])
      .then(token =>  {
        Promise.all(
          [
            getData("http://yova.praid.com.ua/api/projects", token, 'feature', language, '', 'true'),
            getData("http://yova.praid.com.ua/api/projects", token, 'work', language, '', 'true'),
            getData("http://yova.praid.com.ua/api/projects", token, 'soc', language, '', 'true'),
          ])
        .then(data => {
          setFeatured(data[0])
          setAllWorks(data[1])
          setAllSocialities(data[2])
        })
        .catch(err => console.log(err)); 
      })
  }, [])

  if (works.length === 0 && allSocialities.length === 0) {
    return (
      <Preloader />
    )
  } else {
    return ( 
      <main>
        <Message />
        <div className="wrapper">
          <LazyLoad scroll={true} height={400}>
            <Featured />
          </LazyLoad>
          <LazyLoad scroll={true}>
          <div className="main__work">
            <MassonryGallery 
              worksArr={works} 
              count={4}
              title={allText['main_subtitle-second_en']}
              title_ua={allText['main_subtitle-second_ua']}
              button={true} 
              area='works'
              photoLoadButton={true}
              buttonAutoStart={true}
            />
          </div>
          </LazyLoad>
          <MainSociality />
        </div>
      </main>
    );
  }  
}
 
export default MainPage;

