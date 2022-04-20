import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className='max-width header'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'
             alt='logo'
             className='header-logo'
        />
        <div className='header-right'>
            <div className='header-location-search-container'>
                <div className="location-wrapper">
                    <div className="location-icon-name">
                        <i className="fi fi-rr-marker absolute-center location-icon"></i>
                        <div>Bangladore</div>
                    </div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className="location-search-separator"></div>
                <div className="header-search-bar">
                    <i className="fi fi-rr-search absolute-center search-icon"></i>
                    <input placeholder='Search for restaurant, cuisine, or a dish' className='search-input' type="text" />

                </div>
            </div>
            <div className="profile-wrapper">
                <img src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
                     alt="Profile" 
                     className='header-profile-image'
                />
                <div className='header-user-name'>John Doe</div>
                <i className="fi fi-rr-angle-small-down absolute-center"></i>

            </div>
        </div>
    </div>
  )
}

export default Header