import React from "react";
import { NavLink } from "react-router-dom";
import Pokeball from "../../pokeball.png";

const Header = () => {
  return (
    <div className="mb-90">
      <nav className="navbar">
        <NavLink exact to="/" className="navbar-brand navlink">
          <img src={Pokeball} alt="" style={imgStyle} className="img-fluid" />{" "}
          Pokemon
        </NavLink>
        <ul>
          <li>
            <NavLink exact to="/" className="navlink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about" className="navlink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/pokemon" className="navlink">
              Pokemon
            </NavLink>
          </li>
        </ul>
        <button className="navbar-toggler">
          <span></span>
        </button>
      </nav>
    </div>
  );
};

const imgStyle = {
  height: "40px",
  width: "40px",
};

export default Header;
