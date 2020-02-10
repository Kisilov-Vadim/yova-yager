import React from 'react';
import './WorksPageNav.scss';

const WorksPageNav = ({setFilter, filter, categories}) => {
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
  );
}
 
export default WorksPageNav;