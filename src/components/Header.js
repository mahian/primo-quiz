import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(false);
    const handleNav = ()=>{
        if(open === !open){
            setOpen(true)
        }else{
            setOpen(!open)
        }
        console.log(open);
    }
    return (
        <nav className='flex justify-between items-center p-3 my-2 mx-10 shadow-lg rounded-md'>
            <Link to='/'>
            <div className="flex items-end">
                <img className='logo' src="/assets/logo.png" alt="P" />
                <h2 className='font-bold text-3xl prime-color'>rimo Quize.</h2>
            </div>
            </Link>
            <button className="w-7 h-7 transition-all md:hidden" onClick={handleNav}>
                {!open ? <Bars3Icon/> : <XMarkIcon/>}
            </button>
            <ul className={`absolute md:static md:flex md:items-center bg-white md:bg-transparent shadow-md md:shadow-none right-[45px] top-[65px] w-52 md:w-auto transition-all transition-200 overflow-hidden ${!open ? 'h-0 md:h-auto' : 'h-auto'}`}>
                <li className='md:mx-4 p-3 md:p-0 border-b md:border-0 hover:text-red-500'><NavLink to='/'>home</NavLink></li>
                <li className='md:mx-4 p-3 md:p-0 border-b md:border-0 hover:text-red-500'><NavLink to='quizes'>quiz</NavLink></li>
                <li className='md:mx-4 p-3 md:p-0 border-b md:border-0 hover:text-red-500'><NavLink to='blog'>blog</NavLink></li>
                <li className='md:mx-4 p-3 md:p-0 border-b md:border-0 hover:text-red-500'><NavLink to='statistic'>statistic</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;