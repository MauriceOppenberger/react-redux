import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink exact={true} activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/new">
            New Tweet
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
