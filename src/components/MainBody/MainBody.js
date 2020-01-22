import React from 'react';
import './MainBody.scss'; 

import Message from './components/Message/Message'; 
import Featured from './components/Featured/Featured'; 
import Works from './components/Works/Works';
import MainSociality from './components/MainSociality/MainSociality';

const MainBody = () => {
  
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


export default MainBody;