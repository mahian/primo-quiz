import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between items-center p-2 my-2 mx-10 shadow-lg rounded-md'>
            <Link to='/'>
            <div className="flex items-end">
                <img className='logo' src="/assets/logo.png" alt="P" />
                <h2 className='font-bold text-3xl prime-color'>rimo Quize.</h2>
            </div>
            </Link>
            <ul className='flex items-center'>
                <li className='mx-2'><NavLink to='/'>home</NavLink></li>
                <li className='mx-2'><NavLink to='quizes'>quiz</NavLink></li>
                <li className='mx-2'><NavLink to='blog'>blog</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;