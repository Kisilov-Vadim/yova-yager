import React from 'react';
import './MainBody.scss'; 

import Message from './components/Message/Message'; 
import Featured from './components/Featured/Featured'; 
import Works from './components/Works/Works';

const MainBody = () => {
  
  return ( 
    <main>
      <Message />
      <Featured />
      <Works />
    </main>
   );
}


export default MainBody;