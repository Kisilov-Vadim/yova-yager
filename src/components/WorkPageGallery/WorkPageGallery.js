import React from 'react';
import './WorkPageGallery.scss'; 

const WorkPageGallery = ({images, text}) => {
  return (  
    <div className="workGallery">
      <img src={images[0].imageURL} alt={images[0].description} className='workGallery-one' />
      <img src={images[1].imageURL} alt={images[1].description} className='workGallery-two' />
      <img src={images[2].imageURL} alt={images[2].description} className='workGallery-three' />
      <img src={images[3].imageURL} alt={images[3].description} className='workGallery-four' />
      <img src={images[4].imageURL} alt={images[4].description} className='workGallery-five' />
      <div className='workGallery-six'>
       {text.map((item, index) => {
         if (index < 3) {
           return 
         }
         return <p>{item}</p>
       })}
      </div>
      <img src={images[5].imageURL} alt={images[5].description} className='workGallery-seven' />
      <img src={images[6].imageURL} alt={images[6].description} className='workGallery-eight' />
    </div>
  );
}
 
export default WorkPageGallery;