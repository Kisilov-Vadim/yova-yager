import React from 'react';

import Message from '../../components/Message/Message'; 
import Featured from '../../components/Featured/Featured'; 
import Works from '../../components/Works/Works';
import MainSociality from '../../components/MainSociality/MainSociality';

const MainPage = () => {
  return ( 
    <main>
      <Message />
      <div className="wrapper">
        <Featured />
        <Works />
        <MainSociality />
      </div>
    </main>
  );
}
 
export default MainPage;