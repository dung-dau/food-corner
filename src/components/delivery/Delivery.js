import { restaurants } from '../../data/Restaurants';
import ExploreSection from '../common/exploreSection/ExploreSection';
import Filters from '../common/filters/Filters';
import './delivery.css';
import DeliveryCollections from './deliveryCollections/DeliveryCollections';
import TopBrands from './topBrands/TopBrands';

function Delivery() {
  const deliveryFilters = [
      {
        id: 1,
        title: "Rating: 4.0+",
      },
      {
        id: 2,
        title: "Price",
        icon: <i className="fi fi-rr-dollar absolute-center"></i>,
      },
      {
        id: 3,
        title: "Delivery Time",
        icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
      },
      {
        id: 4,
        title: "Pro Offers",
      },
  ]
  const restaurantList = restaurants;
  return (
    <div>
        <div className='max-width'>
            <Filters filterList={deliveryFilters} />
        </div>
        <DeliveryCollections />
        <TopBrands />
        <ExploreSection list={restaurantList} collectionName='Delivery Restaurants' />
    </div>
  )
}

export default Delivery