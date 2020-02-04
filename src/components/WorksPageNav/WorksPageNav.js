import React from 'react';
import './WorksPageNav.scss';

const WorksPageNav = ({setFilter, filter}) => {
  return (  
    <div className="workspage__nav">
      <h1 className="workspage__nav-title">Works</h1>
      <div className="workspage__nav-sort">
        <button 
          onClick={() => setFilter('VIEW ALL')} 
          className={filter === "VIEW ALL" ? "workspage__nav-sort-active" : null}
        >
          View all
        </button>
        <button 
          onClick={() => setFilter('HOTELS')} 
          className={filter === "HOTELS" ? "workspage__nav-sort-active" : null}
        >
          Hotels
        </button>
        <button 
          onClick={() => setFilter('BARS')} 
          className={filter === "BARS" ? "workspage__nav-sort-active" : null}
        >
          Bars
        </button>
        <button 
          onClick={() => setFilter('RESTAURANTS')}
          className={filter === "RESTAURANTS" ? "workspage__nav-sort-active" : null}
        >
          Restaurants
        </button>
      </div>
    </div>
  );
}
 
export default WorksPageNav;