import React, { useEffect } from 'react';
import ExploreCard from './exploreCard/ExploreCard';
import './exploreSection.css';
import { useSelector } from 'react-redux';
import { selectActiveFilterExists, selectTitle } from '../../../redux/filter';


function ExploreSection({list, collectionName}) {
    const title = useSelector(selectTitle);
    const activeFilterExists = useSelector(selectActiveFilterExists);
    let filteredList = list;
    useEffect(() => {

    }, [list,filteredList, title])
    if(!activeFilterExists) {
        filteredList = list;
    }
    if(title === "Rating: 4.0+") {
        filteredList = filteredList.filter((restaurant) => {
            return restaurant.info.rating.rating_text >= "4.0"
        });
    }
  
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className="explore-grid">
            {filteredList.map((restaurant) => {
                return <ExploreCard restaurant={restaurant} key={restaurant.info.resId} />
            })}
        </div>
    </div>
  )
}

export default ExploreSection