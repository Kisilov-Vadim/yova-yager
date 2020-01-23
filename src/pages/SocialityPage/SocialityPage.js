import React from 'react';
import './SocialityPage.scss';
import Featured from '../../components/Featured/Featured';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const SocialityPage = () => {
  return (  
    <section className="sociality">
      <div className="wrapper">
        <div className="sociality__nav">
          <h1 className="sociality__nav-title">Sociality</h1>
          <div className="sociality__nav-sort">
            <button>Zhuli-Buli</button>
            <button>Zhuli-Buli</button>
            <button>Zhuli-Buli</button>
            <button>Zhuli-Buli</button>
          </div>
        </div>
        <p className="sociality__info">
          In fact, we are all able to succeed in any achievement, no matter who we are
          So keep doing good and change this world
        </p>
        <Featured />
        <MassonryGallery 
          title="All Sociality" 
          backgroundY={true} 
          button={true} 
          color="#da7f7e" 
        />
      </div>
    </section>
  );
}
 
export default SocialityPage;