import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <header className="navq py-3 shadow-none w-100 top-0 start-0 px-4">
    <div className="container-fluid d-flex justify-content-between align-items-center">
      
      
        
        {/* Logo and Title */}
        <h1 className="fs-2 fw-bold text-uppercase tracking-wide m-0">
          <span className="text-primary">Happy </span>
          <span className="text-muted">Life</span>
        </h1>

        {/* Navbar */}
        <nav>
          <ul className="navbar-nav d-flex flex-row gap-4">
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="/contact-us">Contact Us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Login</a></li>
                <li><a className="dropdown-item" href="#">Sign Up</a></li>
              
              </ul>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
