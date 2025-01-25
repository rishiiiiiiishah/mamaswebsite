import React from 'react';
import "../styles/Navbar.css"; // Import CSS file
import "../Acordion";

const Navbar = () => {
  return (
    <div className='navbar-container' id='ri'>
      <div className="background-image" id='ri'>
        <h1><a href="#ri">Home</a></h1>
        <h1><a href="#events">Events</a></h1>
        <h1><a href="#sponsors">Sponsors</a></h1>
        <h1><a href="#faq">FAQs</a></h1>
        <h1><a href="#contact">Contact Us</a></h1>
      </div>
    </div>
  );
};

export default Navbar;
