import React from 'react';

import WorksPageNav from '../../components/WorksPageNav/WorksPageNav';
import MassonryGallery from '../../components/MassonryGallery/MassonryGallery';

const WorksPage = () => {
  return ( 
    <section className="workspage">
      <div className="wrapper">
        <WorksPageNav />
        <MassonryGallery title={false} backgroundY={false} button={true}/>
      </div>
    </section>
  );
}
 
export default WorksPage;