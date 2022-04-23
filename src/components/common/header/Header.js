import React from 'react';
import { selectName, setName } from '../../../redux/search';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './Header.css';

function Header() {
    let state = {
        name: "",
    }
    const name = useSelector(selectName);
    const dispatch = useDispatch();
    const searchRestaurant = (e) => {
        e.preventDefault();
        dispatch(setName(state.name));
    }

    const handleChange = (e) => {
        state.name = e.target.value
    }
  return (
    <div className='max-width header'>
        <img src='https://i.ibb.co/NT8vDhs/restaurant-logo.png'
             alt='logo'
             className='header-logo'
        />
        <div className='header-right'>
            <form className='form-tag' onSubmit={searchRestaurant}>
                <div className="location-wrapper">
                    <div className="location-icon-name">
                        <i className="fi fi-rr-marker absolute-center location-icon"></i>
                        <div>Your Location</div>
                    </div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                </div>
                <div className="location-search-separator"></div>
                <div className="header-search-bar">
                    <i className="fi fi-rr-search absolute-center search-icon"></i>
                    <input placeholder='Search for restaurant' onChange={handleChange} className='search-input' type="text" />
                </div>
                <input type='submit' hidden/>
            </form>
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