import React from 'react';
import './WorksPageNav.scss';

const WorksPageNav = () => {
  return (  
    <div className="workspage__nav">
      <h1 className="workspage__nav-title">Works</h1>
      <div className="workspage__nav-sort">
        <button>View all</button>
        <button>Hotels</button>
        <button>Bars</button>
        <button>Restaurants</button>
      </div>
    </div>
  );
}
 
export default WorksPageNav;