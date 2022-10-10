import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;