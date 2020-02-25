import React, {useState} from 'react';

import {WorksPageNav} from '../../components/WorksPageNav/index';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const WorksPage = ({works}) => {
  const [filter, setFilter] = useState("VIEW ALL")

  return ( 
    <section className="workspage">
      <div className="wrapper">
        <WorksPageNav setFilter={setFilter} filter={filter}/>
        <MassonryGallery 
          worksArr={filter === 'VIEW ALL' ? works : works.filter(item => item.categoryName === filter)}
          title={false}
          button={true} 
          photoLoadButton={false}
          area='works'
          count={4}
        />
      </div>
    </section>
  );
}
 
export default WorksPage;