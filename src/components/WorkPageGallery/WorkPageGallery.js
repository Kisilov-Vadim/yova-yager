import React from 'react';
import './WorkPageGallery.scss'; 
import PropTypes from 'prop-types';

import Image from '../Image/Image';
import TextAndPhoto from './TextAndPhoto'; 
import DoublePhoto from './DoublePhoto';

const WorkPageGallery = ({images}) => {
  return (  
    <div className="workGallery">
      {
        images.map((image, index) => {
          if (image.type === 'single-image') {
            return <Image imageClass="workGallery__large" src={image.imageURL[0]} alt="photo" />
          } else if (image.type === 'left-side') {
            return (
              <TextAndPhoto 
                image={image.imageURL[0]} 
                imagePosition={image.type} 
                text={image.description}
              />
            )
          } else if (image.type === 'right-side') {
            return (
              <TextAndPhoto 
                image={image.imageURL[0]} 
                imagePosition={image.type} 
                text={image.description} 
              />
            )
          } else if (image.type === 'double-image') {
            return <DoublePhoto images={image.imageURL} /> 
          }
        })
      }
      {/* <Image imageClass="workGallery__large" src={images[0].imageURL} alt="photo" />
      <Image imageClass="workGallery__short-left" src={images[0].imageURL} alt="photo" />
      <Image imageClass="workGallery__short-right" src={images[0].imageURL} alt="photo" />
      <Image imageClass="workGallery__large" src={images[0].imageURL} alt="photo" />
      <Image imageClass="workGallery__short-left" src={images[0].imageURL} alt="photo" />
      <Image imageClass="workGallery__short-right" src={images[0].imageURL} alt="photo" /> */}

      {/* <Image imageClass="workGallery-two" src={`http://yova.praid.com.ua${images[1].imageURL}`} alt={images[1].description} />
      <Image imageClass="workGallery-three" src={`http://yova.praid.com.ua${images[2].imageURL}`} alt={images[2].description} />
      <Image imageClass="workGallery-four" src={`http://yova.praid.com.ua${images[3].imageURL}`} alt={images[3].description} />
      <Image imageClass="workGallery-five" src={`http://yova.praid.com.ua${images[4].imageURL}`} alt={images[4].description} />
      <div className='workGallery-six'>
        {
          language === 'en' 
            ?
              text_en.map((item, index) => {
                if (index < 3) {
                  return 
                }
                return <p itemProp="about">{item}</p>
              })
            :
              text_ua.map((item, index) => {
                if (index < 3) {
                  return 
                }
                return <p itemProp="about">{item}</p>
              })
        }
      </div>
      <Image imageClass="workGallery-seven" src={`http://yova.praid.com.ua${images[5].imageURL}`} alt={images[5].description} />
      <Image imageClass="workGallery-eight" src={`http://yova.praid.com.ua${images[6].imageURL}`} alt={images[6].description} /> */}
    </div>
  );
}
 
WorkPageGallery.prototype = { 
  images: PropTypes.array.isRequired, 
}

export default WorkPageGallery;