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
                        </NavLink>
                    );
                })}
            </nav>
            <hr />
        </Wrapper>
    );
}

const Wrapper = styled.nav`
    .menu-container {
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
`;

export default Menu;
