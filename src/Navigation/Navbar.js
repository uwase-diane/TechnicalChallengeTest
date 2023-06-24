import React from "react";
import { MdAccountCircle, MdSearch,MdShoppingCart } from "react-icons/md";
import './Navbar.css'


const Navbar = () => {
    return(

        <nav class="navbar navbar-expand-lg navbar-light bg">
  <div class="container">
    <a class="navbar-brand" href="#"><img src="https://res.cloudinary.com/auca/image/upload/v1687376166/logo_vtpe0b.png"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#home">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#gallery">GALLERY</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#about">ABOUT US</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#contact">CONTACT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#blog">BLOG</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><MdSearch className="iconLink"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"> <MdAccountCircle className="iconLink"/>  </a>
        </li>
         <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#"><MdShoppingCart className="iconLinks"/> </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
};

export default Navbar