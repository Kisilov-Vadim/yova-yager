import React, {useState} from 'react';
import './SocialityPage.scss';
import {Featured} from '../../components/Featured/index';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const SocialityPage = ({allSocialities, categories}) => {
  const [filter, setFilter] = useState("VIEW ALL")

  return (  
    <section className="sociality">
      <div className="wrapper">
        <div className="sociality__nav">
          <h1 className="sociality__nav-title">Sociality</h1>
          <div className="sociality__nav-sort">
            <button 
              onClick={() => setFilter('VIEW ALL')} 
              className={filter === "VIEW ALL" ? "sociality__nav-sort-active" : null}
            >
              View all
            </button>
            {categories.map(item => (
              <button 
                key={item.id}
                onClick={() => setFilter(item.name)} 
                className={filter === `${item.name}` ? "workspage__nav-sort-active" : null}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        <p className="sociality__info">
          In fact, we are all able to succeed in any achievement, no matter who we are
          So keep doing good and change this world
        </p>
        <Featured />
        <MassonryGallery 
          worksArr={filter === 'VIEW ALL' ? allSocialities : allSocialities.filter(item => item.categoryName === filter)}
          count={4}
          title="All Sociality" 
          backgroundY={true} 
          backgroundPici={true}
          button={true} 
          color="#da7f7e" 
          area='socialities'
        />
      </div>
    </section>
  );
}
 
export default SocialityPage;