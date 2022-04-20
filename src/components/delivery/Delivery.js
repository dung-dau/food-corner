import React from 'react';
import Filters from '../common/filters/Filters';
import './delivery.css';

function Delivery() {
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
  return (
    <div className='max-width'>
        <Filters filterList={deliveryFilters}/>
    </div>
  )
}

export default Delivery