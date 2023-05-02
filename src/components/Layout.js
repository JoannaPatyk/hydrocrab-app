import React from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../components/Logo';
import Menu from '../components/Menu';

function Layout() {
    return (
        <main className="dashboard">
            <Logo />
            <Menu />
            <div className="dashboard-page">
                <Outlet />
            </div>
        </main>
    );
}

export default Layout;
