import React, {useEffect} from 'react';
import "./MainPage.scss"; 
import {getData, getToken} from '../../store/actions';

import {Message} from '../../components/Message/index'; 
import {Featured} from '../../components/Featured/index'; 
import {MainSociality} from '../../components/MainSociality/index';
import {MassonryGallery} from '../../components/MassonryGallery/index';
import Preloader from '../../components/Preloader/Preloader';

const MainPage = ({works, allSocialities, allText, language, setAllWorks, setAllSocialities}) => {

  useEffect(() => {
    setAllWorks(false)
    setAllSocialities(false)
    getToken('http://yova.praid.com.ua/api/login')
      .then(data => data.data['api_token'])
      .then(token =>  {
        Promise.all(
          [
            getData("http://yova.praid.com.ua/api/projects", token, 'work', language, '', 'true'),
            getData("http://yova.praid.com.ua/api/projects", token, 'soc', language, '', 'true'),
          ])
        .then(data => {
          setAllWorks(data[0])
          setAllSocialities(data[1])
        })
        .catch(err => console.log(err)); 
      })
  }, [])

  if (!works || !allSocialities) {
    return (
      <Preloader />
    )
  } else {
    return ( 
      <main>
        <Message />
        <div className="wrapper">
          <Featured />
          <div className="main__work">
            <MassonryGallery 
              worksArr={works} 
              count={8}
              title={allText['main_subtitle-second_en']}
              title_ua={allText['main_subtitle-second_ua']}
              button={true} 
              area='works'
              photoLoadButton={true}
              buttonAutoStart={true}
            />
          </div>
          <MainSociality />
        </div>
      </main>
    );
  }  
}
 
export default MainPage;

