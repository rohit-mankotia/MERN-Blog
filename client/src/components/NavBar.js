import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MERN Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
              <Link to="/india" className="nav-link">
                India
              </Link>
              <Link to="/world" className="nav-link">
                World
              </Link>
              <Link to="/business" className="nav-link">
                Business
              </Link>
              <Link to="/sports" className="nav-link">
                Sports
              </Link>
              <Link to="/createblog" className="nav-link">
                Create Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
