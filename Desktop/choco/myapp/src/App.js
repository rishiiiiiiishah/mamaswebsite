import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './components/CartContent.jsx'; // Import the CartProvider
import Navbar from "./components/navbar";
import Header from "./components/header";
import Home from "./components/home";
import Our from './components/ourproducts';
import Foot from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Gifting from './components/gifting';
import CakePage from './components/cake.jsx';
import Caksi from './components/caksicle';
import Cook from './components/cookies';
import Brown from './components/brownies';
import Login from './components/login';
import ScrollToTop from './components/ScrollToTop';
import Cart from './components/cart.jsx';
import Product from './components/productpage.jsx';
import Glass from './components/glasses';
import Choc from './components/chocolate.jsx';
import Cookie from './components/Cookiespage.jsx';
import Desse from './components/DessertPage.jsx';
import Brow from './components/BrowniePage.jsx';
import Cak from './components/Caksiclepage.jsx';
import Cakie from './components/Cakepage.jsx';

function App() {
  return (
    <BrowserRouter>
      <CartProvider> {/* Wrap the entire application with CartProvider */}
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<><Header /><Home /><Our /><Gifting /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/ourproducts" element={<Our />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cake" element={<CakePage />} />
            <Route path="/caksicle" element={<Caksi />} />
            <Route path="/glasses" element={<Glass />} />
            <Route path="/chocolate" element={<Choc />} />
            <Route path="/cook" element={<Cook />} />
            <Route path="/brownies" element={<Brown />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cookie/:id" element={<Cookie />} />
            <Route path="/desse/:id" element={<Desse />} />
            <Route path="/brow/:id" element={<Brow />} />
            <Route path="/cak/:id" element={<Cak />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cakie/:id" element={<Cakie />} />
          </Routes>
          <Foot />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
