import React from 'react';
import "./MainPage.scss"; 
// import $ from 'jquery'
import LazyLoad from 'react-lazyload'; 

import {Message} from '../../components/Message/index'; 
import {Featured} from '../../components/Featured/index'; 
import {MainSociality} from '../../components/MainSociality/index';
import {MassonryGallery} from '../../components/MassonryGallery/index';

const MainPage = ({works, allText}) => {

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
 
export default MainPage;

