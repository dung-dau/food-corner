import React from 'react';
import './tabOptions.css';

function TabOptions({activeTab, setActiveTab}) {
  const tabs = [
      {
          id: 1,
          name: "Delivery",
          activeImage: "https://thumbs.dreamstime.com/b/delivery-man-motorbike-logo-icon-scooter-bike-vector-express-free-209736021.jpg",
          backDrop: "FCEEC0",
      },
      {
        id: 2,
        name: "Dining Out",
        activeImage: "https://static.vecteezy.com/system/resources/thumbnails/002/703/311/small/restaurant-food-and-cuisine-plate-with-cutlery-fork-and-spoon-icon-cartoons-illustration-graphic-design-free-vector.jpg",
        backdrop: "#E5F3F3",
      },
      {
        id: 3,
        name: "Nightlife",
        activeImage: "https://i.ibb.co/4F92t0v/wine-glass.jpg",
        backdrop: "#EDf4FF",
      },
  ];
  return (
    <div className="tab-options">
        <div className="max-width options-wrapper">
            {tabs.map((tab) => {
                return (
                    <div onClick={() =>setActiveTab(tab.name)}
                         className={`tab-item absolute-center cur-po ${activeTab === tab.name && "active-tab"}`}
                         key={tab.id}
                    >
                        <div className='tab-image-container absolute-center'
                             style={{backgroundColor: `${activeTab === tab.name?tab.backDrop : ""}`}}
                        >
                            <img className='tab-image' src={tab.activeImage} alt={tab.name} />
                        </div>
                        <div className="tab-name">{tab.name}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TabOptions