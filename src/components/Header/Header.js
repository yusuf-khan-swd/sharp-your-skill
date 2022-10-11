import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between bg-gray-900 text-white items-center text-center p-5 mb-24'>
      <Link to={`/home`} className='text-3xl flex mb-3 flex-col md:flex-row justify-center items-center'><img className='w-10 h-10 mr-3' src={'skill.png'} alt="" /> Sharp Your Skill</Link>
      <nav>
        <NavLink className={`mr-3 hover:text-zinc-400`} to='/home'>Home</NavLink>
        <NavLink className={`mr-3 hover:text-zinc-400`} to='/topics'>Quiz Topics</NavLink>
        <NavLink className={`mr-3 hover:text-zinc-400`} to='/statics'>Statics</NavLink>
        <NavLink className={`mr-3 hover:text-zinc-400`} to='/blog'>Blog</NavLink>
      </nav>
    </div>
  );
};

export default Header;