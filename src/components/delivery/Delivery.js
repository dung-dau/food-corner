import React, { useState } from 'react';
import { restaurants } from '../../data/Restaurants';
import ExploreSection from '../common/exploreSection/ExploreSection';
import Filters from '../common/filters/Filters';
import './delivery.css';
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import TopBrands from './topBrands/TopBrands';

function Delivery() {
  let [activeFilter, setActiveFilter] = useState("");
  const deliveryFilters = [
      {
          id: 1,
          icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
          title: "Filters",
      },
      {
        id: 2,
        title: "Rating: 4.0+",
      },
      {
        id: 3,
        title: "Safe and Hygienic",
      },
      {
        id: 4,
        title: "Pure Veg",
      },
      {
        id: 5,
        title: "Delivery Time",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
      },
      {
        id: 6,
        title: "Great Offers",
      },
  ]
  const restaurantList = restaurants;
  return (
    <div>
        <div className='max-width'>
            <Filters filterList={deliveryFilters} 
                     activeFilter={activeFilter} 
                     setActiveFilter={setActiveFilter}
            />
        </div>
        <DeliveryCollections />
        <TopBrands />
        <ExploreSection list={restaurantList} collectionName='Delivery Restaurants'/>
    </div>
  )
}

export default Delivery