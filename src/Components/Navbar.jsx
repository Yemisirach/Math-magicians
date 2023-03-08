import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const navbarStyle = {
    display: 'inline-flex',
    float: 'right',
    marginLeft: '5vw',
  };
  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    fontSize: '1.2rem',
  };
  const anchorStyle = {
    textDecoration: 'none',
    color: 'orange',
    margin: '3vw',
  };
  const liStyle = {
    borderRight: '1px solid black',
    borderLeft: '1px solid black',
  };
  return (
    <div className="nav">
      <div>
        <h1 className="home-heading">Math Magicians</h1>
      </div>
      <nav style={navbarStyle}>
        <ul style={ulStyle}>
          <li>
            <NavLink to="/" style={anchorStyle}>
              Home
            </NavLink>
          </li>
          <li style={liStyle}>
            <NavLink to="/Calculator" style={anchorStyle}>
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/Quote" style={anchorStyle}>
              Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
