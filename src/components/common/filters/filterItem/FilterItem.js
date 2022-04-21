import React from 'react';
import './filterItem.css';

function FilterItem({filter, activeFilter, setActiveFilter}) {
  return (
    <div className={`filter-item cur-po ${activeFilter === filter.title && "active-filter"}`}
         onClick={() => setActiveFilter(filter.title)}
    >
        {filter.icon && filter.icon}
        <div className='filter-name'>{filter.title}</div>
    </div>
  )
}

export default FilterItem