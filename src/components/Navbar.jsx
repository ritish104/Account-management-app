import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
  <Link className="navbar-brand mb-0 h1" to="/">Account App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className="nav-link" to="/">Login</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/account">Account</Link>
        </li>
        
      
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
