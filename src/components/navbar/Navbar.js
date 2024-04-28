import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png"
import search from "../../images/search.png"


const Navbar = () => {
  return (
    <>
      <nav class="navbar nav_class navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <Link className="navbar_logo" href="#">
            <img className="logo" width={210} height={62} src={logo}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse menu navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
              <a class="nav-link" href="#">
                SERVICES
              </a>
              <Link class="nav-link" to="/about">
                ABOUT
              </Link>
              <Link class="nav-link" to="/contact">
                CONTACT
              </Link>
            </div>
           <div>
              <img src={search} alt="search icon"/>
            </div>
          </div>
          <div className="buy-template">
              <div className="nav_btn">
                <button type="button" class="btn btn-light">Buy Template</button>
              </div>
          </div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
