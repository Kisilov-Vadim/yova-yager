import React, {useState} from 'react';
import './SocialityPage.scss';
import {Featured} from '../../components/Featured/index';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const SocialityPage = ({allSocialities, categories}) => {
  const [filter, setFilter] = useState("VIEW ALL")

  let set = new Set(); 
  allSocialities.forEach(item => set.add(item.categoryName))
  let actualCategories = Array.from(set)

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
            {actualCategories.map(item => {
              let currentCategory = categories.find(category => category.name === item) 
              return <button 
                key={currentCategory.id}
                onClick={() => setFilter(currentCategory.name)} 
                className={filter === `${currentCategory.name}` ? "workspage__nav-sort-active" : null}
              >
                {currentCategory.name}
              </button>
            })}
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
          backgroundPici={true}
          button={true} 
          color="#da7f7e" 
          area='socialities'
          photoLoadButton={true}
        />
      </div>
    </section>
  );
}
 
export default SocialityPage;