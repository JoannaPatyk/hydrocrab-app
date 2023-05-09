import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import links from '../utils/links';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdWaterDrop } from 'react-icons/md';

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

const Wrapper = styled.nav`
    .bigMenu-container {
        position: relative;
        min-height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #222222;
    }

    h1 {
        padding: 1rem 2rem;
        font-weight: 400;
        font-size: 1.5rem;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
        transition: 0.3s;
        cursor: pointer;
    }

    .menu-element {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fa7a5a;
        text-decoration: none;
        transition: 0.5s;
    }

    .menu-element:hover {
        color: #f5532a;
        transform: scale(0.95);
    }

    hr {
        width: 100%;
        height: 4px;
        border: none;
        margin: 0 auto;
        background: linear-gradient(to right, #2b2c32, #f37151);
    }

    .menu-icon {
        display: none;
        position: absolute;
        top: 70px;
        left: 20px;
        z-index: 11;
        font-size: 2rem;
        color: #fa7a5a;
        cursor: pointer;
    }

    .menu-icon:hover {
        color: #f5532a;
    }

    .smallMenu {
        display: none;
        position: absolute;
        top: 0;
        left: -100%;
        width: 100vw;
        height: calc(95vh - 4px);
        z-index: 10;
        background-color: #222;
        transition: 0.5s;
    }

    .smallMenu-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .open {
        left: 0;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .smallMenu-icon {
        position: absolute;
        bottom: 0;
        right: 0%;
        font-size: 10rem;
        opacity: 0.4;
    }

    .line {
        width: 5rem;
        height: 1px;
        background-color: #f5f5f5;
    }

    @media (max-width: 1080px) {
        h1 {
            font-size: 1.2rem;
            padding: 1rem 1.7rem;
        }
    }

    @media (max-width: 860px) {
        .bigMenu-container {
            display: none;
        }

        .smallMenu {
            display: block;
        }

        .menu-icon {
            display: block;
        }

        h1 {
            font-size: 1.1rem;
            padding: 1rem 1.5rem;
            letter-spacing: 0.3rem;
        }
    }
`;

export default Menu;
