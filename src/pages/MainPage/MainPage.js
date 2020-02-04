import React from 'react';

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
        <MassonryGallery 
          worksArr={works} 
          count={4}
          title='Works' 
          backgroundY={true} 
          button={true} 
        />
        <MainSociality />
      </div>
    </main>
  );
}
 
export default MainPage;