import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import ImagesLoaded from 'react-images-loaded';

const Image = ({imageClass, src, alt}) => {
  const [doneImage, setDoneImage] = useState(false);
  const showImage = useSpring({ opacity: doneImage ? 1 : 0 })

  return (
    <>
      {
        src
          ?
            <ImagesLoaded
              elementType={'div'}
              className={imageClass}
              done={() => setDoneImage(true)}
            >
              <animated.img itemprop="image" src={src} alt={alt} style={showImage} />
            </ImagesLoaded>
          :
            <div className={imageClass}></div>
        }
    </>
  );
}

export default Image;
