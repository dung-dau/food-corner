import React from 'react';
import FilterItem from './filterItem/FilterItem';
import './filters.css';

function Filters({filterList}) {
  return (
    <div className='filters'>
      {filterList && filterList.map((filter) => {
        return <FilterItem filter={filter} 
                           key={filter.id}
                />
      })}
    </div>
  )
}

export default Filters