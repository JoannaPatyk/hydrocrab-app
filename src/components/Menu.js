import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdWaterDrop } from 'react-icons/md';
import Wrapper from '../assets/wrappers/Menu';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleSmallMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Wrapper>
            <AiOutlineMenu className="menu-icon" onClick={handleToggleSmallMenu} />

            <div className="bigMenu">
                <nav className="bigMenu-container">
                    {links.map(({ id, path, text }) => {
                        return (
                            <NavLink to={path} className="menu-element" key={id}>
                                <h1>{text}</h1>
                            </NavLink>
                        );
                    })}
                </nav>
                <hr />
            </div>

            <div className={isOpen ? 'smallMenu open' : 'smallMenu'}>
                <nav className="smallMenu-container">
                    <div className="icon-container">
                        <div className="line"></div>
                        <MdWaterDrop className="icon" />
                        <div className="line"></div>
                    </div>
                    {links.map(({ id, path, text }) => {
                        return (
                            <NavLink to={path} className="menu-element" key={id} onClick={handleToggleSmallMenu}>
                                <h1>{text}</h1>
                            </NavLink>
                        );
                    })}
                </nav>

                <hr />
            </div>
        </Wrapper>
    );
}

export default Menu;
