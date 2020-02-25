import React from 'react';
import "./MainPage.scss"; 

import {Message} from '../../components/Message/index'; 
import {Featured} from '../../components/Featured/index'; 
import {MainSociality} from '../../components/MainSociality/index';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const MainPage = ({works}) => {

  return ( 
    <main>
      <Message />
      <div className="wrapper">
        <Featured />
        <div className="main__work">
          <MassonryGallery 
            worksArr={works} 
            count={4}
            title='Works' 
            button={true} 
            area='works'
            photoLoadButton={true}
          />
          </div>
          <MainSociality />
      </div>
    </main>
  );
}
 
export default MainPage;