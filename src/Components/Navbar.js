import React from "react";
import { NavL, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div class="logo">আলোর দেখা</div>
      <input type="checkbox" id="checkbox"></input>
      <label for="checkbox" id="icon">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/create-blog">Create Blog</NavLink>
        </li>
        <li>
          <NavLink to="/create-poster">Create Poster</NavLink>
        </li>
        <li>
          <NavLink to="/create-author">Create Author</NavLink>
        </li>
        <li>
          <NavLink to="/authors">Authors</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
