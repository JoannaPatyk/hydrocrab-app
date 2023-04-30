import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import links from '../utils/links';

function Menu() {
    return (
        <Wrapper>
            <nav className="menu-container">
                {links.map(({ id, path, text }) => {
                    return (
                        <NavLink to={path} className="menu-element" key={id}>
                            <h1>{text}</h1>
                            <div className="line"></div>
                        </NavLink>
                    );
                })}
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.nav`
    .menu-container {
        min-height: 8vh;
        display: flex;
        justify-content: center;
        align-items: center;
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
        color: #2b2c32;
        text-decoration: none;
    }

    .line {
        height: 2px;
        width: 0;
        border-radius: 10px;
        background: linear-gradient(to right, #3771c8, #f37151);
        transition: 0.6s;
    }

    .menu-element:hover .line {
        width: 10rem;
    }
`;

export default Menu;
