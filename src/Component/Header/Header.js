import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="/"><span className="text-danger">Learn</span><span className="text-success">Up</span></a>
        <div>
          <NavLink className="p-3 text-decoration-none " activeStyle={activeStyle} to="/home">Home</NavLink>
          <NavLink className="p-3 text-decoration-none" activeStyle={activeStyle} to="/service">Service</NavLink>
          <NavLink className="p-3 text-decoration-none" activeStyle={activeStyle} to="/about">About</NavLink>
          <NavLink className="p-3 text-decoration-none" activeStyle={activeStyle} to="/contact">Contact</NavLink>
        </div>

        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Header;