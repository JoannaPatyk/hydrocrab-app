import React from 'react';
import styled from 'styled-components';
import background from '../assets/water-bg-landing.png';
import { MdWaterDrop } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <Wrapper>
            <div className="main-container">
                <div className="left-side">
                    <img className="bg" src={background} alt="Water" />
                </div>
                <div className="right-side">
                    <div className="icon-container">
                        <div className="line"></div>
                        <MdWaterDrop className="icon" />
                        <div className="line"></div>
                    </div>
                    <h2>Water changes everything</h2>
                    <h1>
                        Monitor how much water you drink per day
                        <br /> and make sure it's at a good level...
                    </h1>
                    <Link className="btn" to="/dashboard">
                        start
                    </Link>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .main-container {
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 2fr;
    }

    .right-side {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem 20px;
        background-color: #2b2c32;
    }

    h2 {
        font-weight: 100;
        letter-spacing: 0.5rem;
        text-transform: uppercase;
    }

    h1 {
        margin: 0.5rem 0;
        font-weight: 100;
        font-family: 'Cedarville Cursive', cursive;
        text-align: center;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        color: whitesmoke;
        font-size: 3rem;
    }

    .line {
        width: 5rem;
        height: 1px;
        background-color: whitesmoke;
    }

    .btn {
        margin-top: 1rem;
    }

    .bg {
        position: absolute;
        top: 0;
        left: -5%;
        z-index: -10;
        height: 100%;
    }
`;

export default Landing;
