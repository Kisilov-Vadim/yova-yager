import React, {useState} from 'react';
import './Workspage.scss';

import {WorksPageNav} from '../../components/WorksPageNav/index';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const WorksPage = ({works, language}) => {
  const [filter, setFilter] = useState('VIEW ALL')

  let categories = new Set(); 
  works.forEach(work => categories.add(work.category_name))

  if (categories.size <= 1 && categories.has('')) {
    categories = []
  } else {
    categories.delete('');
    categories = ['VIEW ALL', ...categories]
  }

  return ( 
    <section className="workspage">
      <div className="wrapper">
        <div className="workspage__nav">
          <h1 className="workspage__nav-title">{language === 'en' ? 'Works' : 'Роботи'}</h1>
          <WorksPageNav setFilter={setFilter} filter={filter} categories={categories} />
        </div>
        <MassonryGallery 
          worksArr={filter === 'VIEW ALL' ? works : works.filter(item => item.categoryName === filter)}
          title={false}
          button={true} 
          photoLoadButton={false}
          area='works'
          count={4}
          buttonAutoStart={true}
        />
      </div>
    </section>
  );
}
 
export default WorksPage;