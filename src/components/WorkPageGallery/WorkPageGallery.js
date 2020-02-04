import React from 'react';
import './WorkPageGallery.scss'; 

const WorkPageGallery = () => {
  return (  
    <div className="workGallery">
      <img src="/img/work/1.png" alt="1" className='workGallery-one' />
      <img src="/img/work/2.png" alt="2" className='workGallery-two' />
      <img src="/img/work/3.png" alt="3" className='workGallery-three' />
      <img src="/img/work/4.png" alt="4" className='workGallery-four' />
      <img src="/img/work/5.png" alt="5" className='workGallery-five' />
      <p className='workGallery-six'>
        Остатки крышек превратили в столы и панели, которыми облицевали фургон Alltrueeast, кочующий по музыкальным фестивалям и фестивалям еды. 
        <br/> <br/>
        Любовь студии YOVA YAGER hospitality design к белой плитке проявилась и в этом проекте. Поскольку фургон не выдержал бы вес керамики, Йова Ягер и Аня нарисовали плитку маркерами  внутри.
      </p>
      <img src="/img/work/7.png" alt="7" className='workGallery-seven' />
      <img src="/img/work/8.png" alt="8" className='workGallery-eight' />
    </div>
  );
}
 
export default WorkPageGallery;