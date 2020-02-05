import React from 'react';
import './WorkPageGallery.scss'; 

const WorkPageGallery = ({images}) => {
  return (  
    <div className="workGallery">
      <img src={images[0].imageURL} alt="1" className='workGallery-one' />
      <img src={images[1].imageURL} alt="2" className='workGallery-two' />
      <img src={images[2].imageURL} alt="3" className='workGallery-three' />
      <img src={images[3].imageURL} alt="4" className='workGallery-four' />
      <img src={images[4].imageURL} alt="5" className='workGallery-five' />
      <p className='workGallery-six'>
        Остатки крышек превратили в столы и панели, которыми облицевали фургон Alltrueeast, кочующий по музыкальным фестивалям и фестивалям еды. 
        <br/> <br/>
        Любовь студии YOVA YAGER hospitality design к белой плитке проявилась и в этом проекте. Поскольку фургон не выдержал бы вес керамики, Йова Ягер и Аня нарисовали плитку маркерами  внутри.
      </p>
      <img src={images[5].imageURL} alt="7" className='workGallery-seven' />
      <img src={images[6].imageURL} alt="8" className='workGallery-eight' />
    </div>
  );
}
 
export default WorkPageGallery;