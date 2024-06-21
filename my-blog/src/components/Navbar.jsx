import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top custom-navbar">
      <div className="container">
       {/*  <Link className="navbar-brand" to="/">My Blog</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
       <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link className="nav-link" to="/"><h1>Home</h1></Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/posts"><h1>Posts</h1></Link>
    </li>
  </ul>
  <div className="nav-buttons ms-auto">
    <button className="btn btn-outline-success me-2">Login</button>
    <button className="btn btn-outline-danger">Logout</button>
  </div>
</div>
      </div>
    </nav>
  );
};

export default Navbar;
