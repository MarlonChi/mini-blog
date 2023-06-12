import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <NavLink to="/" className="Navbar__brand">
        Mini <span>Blog</span>
      </NavLink>
      <ul className="Links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cadastro
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
