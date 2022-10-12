import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center text-center p-5 container mx-auto">
        <Link
          to={`/`}
          className="flex mb-3 flex-col md:flex-row justify-center items-center"
        >
          <img className="w-10 h-10 mr-3" src={logo} alt="" />
          <p className="text-3xl">Sharp Your Skill</p>
        </Link>
        <nav>
          <NavLink className={`mr-3 hover:text-zinc-400 ${({ isActive }) => isActive ? 'active' : undefined}`} to="/home">
            Home
          </NavLink>
          <NavLink className={`mr-3 hover:text-zinc-400`} to="/topics">
            Quiz Topics
          </NavLink>
          <NavLink className={`mr-3 hover:text-zinc-400`} to="/statistics">
            Statistics
          </NavLink>
          <NavLink className={`mr-3 hover:text-zinc-400`} to="/blog">
            Blog
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
