import React from 'react';
import "../styles/footer.css"

const Footer = () => {
  return (
    <footer>
        <div className='f-head' >
            <h1>NOVA</h1>
            <p>@all right reserved</p>
        </div>
        <div className='f-text' >
            <h3>Follow Us</h3>
            <div className='f-link' >
                <a href="https://linkedin.com" target={"blank"} >LinkedIn</a>
                <a href="https://www.instagram.com/djs.nova/" target={"blank"} >Instagram</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;