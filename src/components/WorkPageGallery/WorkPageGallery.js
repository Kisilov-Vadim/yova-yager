import React from 'react';
import './WorkPageGallery.scss'; 
import Image from '../Image/Image'; 

const WorkPageGallery = ({images, text}) => {
  return (  
    <div className="workGallery">
      <Image imageClass="workGallery-one" src={images[0].imageURL} alt={images[0].description} />
      <Image imageClass="workGallery-two" src={images[1].imageURL} alt={images[1].description} />
      <Image imageClass="workGallery-three" src={images[2].imageURL} alt={images[2].description} />
      <Image imageClass="workGallery-four" src={images[3].imageURL} alt={images[3].description} />
      <Image imageClass="workGallery-five" src={images[4].imageURL} alt={images[4].description} />
      <div className='workGallery-six'>
        {text.map((item, index) => {
          if (index < 3) {
            return 
          }
          return <p>{item}</p>
        })}
      </div>
      <Image imageClass="workGallery-seven" src={images[5].imageURL} alt={images[5].description} />
      <Image imageClass="workGallery-eight" src={images[6].imageURL} alt={images[6].description} />
    </div>
  );
}
 
export default WorkPageGallery;