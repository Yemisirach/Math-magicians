import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navbar = {
    display: "inline-flex",
    float: "right",
    marginLeft: "5vw",
  };
  const linkListBox = {
    listStyle: "none",
    display: "flex",
    fontSize: "1.2rem",
  };
  const linkStyle = {
    textDecoration: "none",
    color: "orange",
    margin: "3vw",
  };
  const linkList = {
    borderRight: "2px solid black",
    borderLeft: "2px solid black",
  };
  return (
    <div className="nav">
      <div>
        <h1 className="home-heading">Math Magicians</h1>
      </div>
      <nav style={navbar}>
        <ul style={linkListBox}>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li style={linkList}>
            <NavLink to="/Calculator" style={linkStyle}>
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/Quote" style={linkStyle}>
              Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
