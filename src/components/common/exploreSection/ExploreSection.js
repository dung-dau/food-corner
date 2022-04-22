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

    }, [list, filteredList, title])


    if(!activeFilterExists) {
        filteredList = list.sort((a,b) => (
            a.info.name.localeCompare(b.info.name)
        ));
    }
    if(title === "Rating: 4.0+") {
        filteredList = filteredList.filter((restaurant) => {
            return restaurant.info.rating.rating_text >= "4.0"
        }).sort((a,b) => (
            b.info.rating.rating_text - a.info.rating.rating_text
        )).sort((a,b) => {
            if (a.info.rating.rating_text.localeCompare(b.info.rating.rating_text) === 0) {
                return a.info.name.localeCompare(b.info.name)
            }
            return 0;
        });
    }
    if(title === "Delivery Time") {
        filteredList = filteredList.sort((a,b) => {
            return a.order.deliveryTime.localeCompare(b.order.deliveryTime);
        }).sort((a,b) => {
            if (a.order.deliveryTime.localeCompare(b.order.deliveryTime) === 0) {
                 return a.info.name.localeCompare(b.info.name)
            }
            return 0;
        })
    }

    if(title === "Safe and Hygienic") {
        filteredList = filteredList.filter((restaurant) => (
            restaurant.bottomContainers.length !== 0
        ))
    }

    if(title === "Price") {
        filteredList = filteredList.sort((a, b) => (
            a.info.cfo.text.localeCompare(b.info.cfo.text)
        ));
    }

    if(title === "Pro Offers") {
        filteredList = filteredList.filter((restaurant) => (
            restaurant.checkBulkOffers === true 
        ))
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