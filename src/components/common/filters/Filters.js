import React from 'react';
import FilterItem from './filterItem/FilterItem';
import './filters.css';

function Filters({filterList, activeFilter, setActiveFilter}) {
  return (
    <div className='filters'>
      {filterList && filterList.map((filter) => {
        return <FilterItem filter={filter} 
                           key={filter.id}
                           activeFilter={activeFilter}
                           setActiveFilter={setActiveFilter} 
                />
      })}
    </div>
  )
}

export default Filters