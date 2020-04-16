import React, {useState, useEffect} from 'react';
import './SocialityPage.scss';
import LazyLoad from 'react-lazyload'; 
import Masonry from 'react-masonry-css'; 

import WorksPageNav from '../../components/WorksPageNav/WorksPageNav';
import {WorksCard} from '../../components/WorksCard/index';
import {ButtonDecorate} from '../../components/ButtonDecorate/index';


const SocialityPage = ({allSocialities, language, allText}) => {
  const [filter, setFilter] = useState("VIEW ALL")
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); 
  const [elementCount, setElementCount] = useState(5)

  useEffect(() => {
    window.addEventListener('resize', resize);
    window.addEventListener('orientationchange', resize);
    
    return () => {
      window.removeEventListener('resize', resize); 
      window.removeEventListener('orientationchange', resize);
    }
  })

  const resize = () => {
    setScreenWidth(window.innerWidth);
  }

  let categories = new Set(); 
  allSocialities.forEach(work => categories.add(work.categoryName))

  if (categories.size <= 1 && categories.has('')) {
    categories = []
  } else {
    categories.delete('');
    categories = ['VIEW ALL', ...categories]
  }

  const filteredSociality = allSocialities.filter(item => {
    if (filter === 'VIEW ALL') {
      return item
    } else {
      return item.categoryName === filter
    }
  }); 

  return (  
    <section className="sociality">
      <div className="wrapper">
        <div className="sociality__nav">
          <h1 className="sociality__nav-title">{language === 'en' ? 'Sociality' : 'Соціальність'}</h1>
          <WorksPageNav setFilter={setFilter} filter={filter} categories={categories} />
        </div>
        <Masonry 
          breakpointCols={`${screenWidth < 699 ? 1 : 2}`}
          className="sociality__gallery-table"
          columnClassName="sociality__gallery-columns"
        >
          {
            language === 'en' ?
                <p className="sociality__gallery-text">
                  YOVA YAGER studio hospitality design and Kiev restaurant Alltrueeast take conscious steps to ensure the preservation of the environment. <br/><br/> Brands care about the environment, adhere to the principles of application of development and implement meaningful objects oriented to a person. In the life of a restaurant it is sorting garbage and using recyclable materials. Design studio - the use of environmental materials, products of local manufacturers and the offer of tools to solve problems facing public organizations. 
                </p>
              :
                <p className="sociality__gallery-text">
                  Студия YOVA YAGER hospitality design и киевский ресторан Alltrueeast делают осознанные шаги, направленные на сохранение окружающей среды. <br/><br/> Бренды заботятся об экологии, соблюдают принципы устойчивого развития и реализовывают осмысленные объекты, ориентированные на человека. В жизни ресторана это – сортировка мусора и использование перерабатываемых материалов. В жизни дизайн-студии – применение экологичных материалов, продукции локальных производителей и предложение инструментов для решения задач, стоящих перед современным обществом.
                </p>
          }
          
          {filteredSociality.map((item, index) => {
              let locationArr = item.location.split(',');
              let city = locationArr[2]; 
              let country = locationArr[3];
              return <WorksCard 
                  key={item.id}
                  image={item.projectImage} 
                  title={item.title}
                  location={`${city}. ${country}`}
                  location_ua='Київ, Україна'
                  backgroundPici={index === 3 ? true : false}
                  area="sociality"
                />   
            })
          }
        </Masonry>
      </div>
      {
        elementCount < filteredSociality.length ?
          <LazyLoad height={elementCount >= filteredSociality.length ? 0 : 80} unmountIfInvisible={true} offset={200}>
            <div 
              onClick={() => setElementCount(elementCount + 6)} 
            >
              <ButtonDecorate 
                title={allText.button_more_en} 
                title_ua={allText.button_more_ua}
                id={'buttonSocialityPage'}
                autoStart={true}
              />
            </div> 
          </LazyLoad>
          : null
      }
    </section>
  );
}
 
export default SocialityPage;