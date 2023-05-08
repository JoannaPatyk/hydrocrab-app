import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import { AiOutlineLogout, AiOutlineLeft } from 'react-icons/ai';

function Layout() {
    const location = useLocation();

    return (
        <main className="dashboard">
            {location.pathname !== '/dashboard' && (
                <Link to="/dashboard" className="btn-back">
                    <AiOutlineLeft />
                </Link>
            )}
            <Link to="/">
                <AiOutlineLogout className="btn-logout" />
            </Link>
            <Logo />
            <Menu />
            <div className="dashboard-page">
                <Outlet />
            </div>
        </main>
    );
}

export default Layout;
