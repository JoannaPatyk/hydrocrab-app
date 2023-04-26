import React from 'react';
import styled from 'styled-components';
import links from '../utils/links';
import waterdrop from '../assets/waterdrop.png';

function Menu() {
    return (
        <Wrapper>
            <nav className="menu-container">
                {links.map(({ id, text }) => {
                    return (
                        <div className="menu-element" key={id}>
                            <h1>{text}</h1>
                            <img className="accent-wave" src={waterdrop} alt="wave" />
                        </div>
                    );
                })}
            </nav>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .menu-container {
        min-height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    h1 {
        padding: 1rem 2rem;
        font-weight: 400;
        font-size: 1.8rem;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
        text-align: center;
        transition: 0.6s;
        cursor: pointer;
    }

    .accent-wave {
        margin-top: -0.5rem;
        width: 5rem;
        visibility: hidden;
        opacity: 0;
        transition: 0.6s;
        cursor: pointer;
    }

    .menu-element {
        display: flex;
    }

    .menu-element:hover .accent-wave {
        visibility: visible;
        opacity: 1;
    }
`;

export default Menu;
