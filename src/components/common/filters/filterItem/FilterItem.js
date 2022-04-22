import React from 'react';
import './filterItem.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setTitle } from '../../../../redux/filter';
import { selectTitle } from '../../../../redux/filter';

function FilterItem({filter}) {
  const title = useSelector(selectTitle);
  const dispatch = useDispatch();

  return (
    <div className={`filter-item cur-po ${title === filter.title && "active-filter"}`}
         onClick={() => dispatch(setTitle(filter.title))}
    >
        {filter.icon && filter.icon}
        <div className='filter-name'>{filter.title}</div>
    </div>
  )
}

export default FilterItem