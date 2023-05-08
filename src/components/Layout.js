import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import { AiOutlineLogout } from 'react-icons/ai';

function Layout() {
    return (
        <main className="dashboard">
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
