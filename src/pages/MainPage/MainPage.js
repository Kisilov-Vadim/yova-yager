import React from 'react';

import Message from '../../components/Message/Message'; 
import Featured from '../../components/Featured/Featured'; 
import MainSociality from '../../components/MainSociality/MainSociality';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const MainPage = () => {
  return ( 
    <main>
      <Message />
      <div className="wrapper">
        <Featured />
        <MassonryGallery title='Works' backgroundY={true} button={true} />
        <MainSociality />
      </div>
    </main>
  );
}
 
export default MainPage;