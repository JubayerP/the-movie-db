import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='px-12 h-20 flex justify-between items-center bg-slate-600'>
            <Link to='/'><img className='w-20' src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" /></Link>
            <ul className='flex items-center space-x-8 text-gray-300'>
                <NavLink className={({isActive}) => `${isActive ? 'text-green-500 font-semibold underline underline-offset-4' : undefined}`} to='/home'><li>Home</li></NavLink>
                <NavLink to='/movies'><li>Movies</li></NavLink>
                <NavLink to='/about'><li>About</li></NavLink>
                <NavLink to='/contact'><li>Contact</li></NavLink>
                <NavLink to='/blog'><li>Blog</li></NavLink>
            </ul>
        </nav>
    );
};

export default Header;