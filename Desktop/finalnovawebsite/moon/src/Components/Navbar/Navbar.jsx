import React,{useState} from 'react'
import './navbar.css';
import { BsMoonStars } from "react-icons/bs";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SlGrid } from "react-icons/sl";


const Navbar = () => {
    const [active, setActive] = useState('navBar')
const showNav = ()=> {
    setActive('navBar activeNavbar')
}

const removeNavbar = ()=> {
    setActive('navBar')
}

  return (
  <section className='navBarSection'>
<header className="header flex">
    <div className="logoDiv">
        <a href="#" className="logo flexs">
            <h1><BsMoonStars className="icon"/> Nova</h1>
        </a>
    </div>


<div className={active}>
    <ul className='navLists flex'>
<li className="navItem">
    <a href="#" className="navLink">Home</a>
</li>

<li className="navItem">
    <a href="#" className="navLink">Image Gallery</a>
</li>

<li className="navItem">
    <a href="#" className="navLink">Magazine</a>
</li>

<li className="navItem">
    <a href="#" className="navLink">About Us</a>
</li>


<button className='btn'>
    <a href="#">Contact Us</a>
</button>
    </ul>

<div onClick={removeNavbar} className="closeNavbar">
<IoIosCloseCircleOutline className="icon"/>
</div>

</div>

<div onClick={showNav} className="toggleNavbar">
<SlGrid className='icon'/>

</div>
</header>
  </section>
  )
}

export default Navbar
