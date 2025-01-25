import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useCart } from './CartContent'; // Import the useCart hook
import '../navbar.css';
import axios from 'axios';

function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const { getCartCount } = useCart(); // Get the cart count
    const navigate = useNavigate();

    const navToggle = () => {
        setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
        setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
    };

    const handleLogout = async() => {
        try {
            const response = await axios.get('http://localhost:4000/logout',
                
                {
                headers:{
                    'Content-Type':'application/json',

                },
                withCredentials:true
            } );
               console.log("now signed out");
               navigate('/login');
              
            
        } 
    
        catch (error) {
            console.error('Signup Error:', error);
            // Add your signup error handling here
        }
    };

    // Check if authentication token is available in localStorage
    const authToken = localStorage.getItem('token');

    return (
        <nav className='nav'>
            <Link to="/" className='nav__brand'>
                Chocolicious
            </Link>

            <ul className={active}>
                <li className='nav__item'>
                    <Link to="/" className='nav__link'>
                        Home
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to="/about" className='nav__link'>
                        About Us
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to="/ourproducts" className='nav__link'>
                        Products
                    </Link>
                </li>
                <li className='nav__item'>
                    <Link to="/contact" className='nav__link'>
                        Contact Us
                    </Link>
                </li>
            </ul>

            <div className='nav__search'>
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>

            <div className='nav__actions'>
                {authToken ? (
                    <button onClick={handleLogout} className='nav__logout'>
                        Logout
                    </button>
                ) : (
                    <Link to="/login" className='nav__login'>
                        Login
                    </Link>
                )}
                <Link to="/cart" className='nav__cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-count">{getCartCount()}</span> {/* Display cart count */}
                </Link>
            </div>

            <div onClick={navToggle} className={toggleIcon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    );
}

export default Navbar;
