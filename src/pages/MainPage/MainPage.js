import React from 'react';
import "./MainPage.scss"; 
// import $ from 'jquery'
import LazyLoad from 'react-lazyload'; 

import {Message} from '../../components/Message/index'; 
import {Featured} from '../../components/Featured/index'; 
import {MainSociality} from '../../components/MainSociality/index';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const MainPage = ({works}) => {
  // const [massonryLoad, setMassonryLoad] = useState(false)

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // })

  // const handleScroll = (e) => {
  //   let gallery = $('.massonry .massonry__gallery'); 
  //   console.log($(window).scrollTop())
  //   console.log(gallery.scrollTop())
  // }

  return ( 
    <main>
      <Message />
      <div className="wrapper">
        <LazyLoad scroll={true} height={400}>
          <Featured />
        </LazyLoad>
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
        <LazyLoad scroll={true} height={1000} unmountIfInvisible={true}>
          <MainSociality />
        </LazyLoad> 
      </div>
    </main>
  );
}
 
export default MainPage;