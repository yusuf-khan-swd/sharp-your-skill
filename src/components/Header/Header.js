import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-col text-center'>
      <h1 className='text-3xl'>Sharp Your Skill</h1>
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