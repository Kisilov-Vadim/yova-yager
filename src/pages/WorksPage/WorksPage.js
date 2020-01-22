import React from 'react';

import Works from '../../components/Works/Works';
import WorksPageNav from '../../components/WorksPageNav/WorksPageNav';

const WorksPage = () => {
  return ( 
    <section className="workspage">
      <div className="wrapper">
        <WorksPageNav />
        <Works place='workspage'/>
      </div>
    </section>
  );
}
 
export default WorksPage;