import React from 'react';

const Header = () => {
    return (
        <nav className='flex justify-between items-center p-2 my-2 mx-10 shadow-lg rounded-md'>
            <div className="flex items-end">
                <img className='logo' src="logo.png" alt="P" />
                <h2 className='font-bold text-3xl'>rimo Quize.</h2>
            </div>
            <ul className='flex items-center'>
                <li className='mx-2'>Home</li>
                <li className='mx-2'>Home</li>
                <li className='mx-2'>Home</li>
            </ul>
        </nav>
    );
};

export default Header;