import React from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import background from '../assets/waves.png';
import crab from '../assets/crab.png';

function Dashboard() {
    return (
        <Wrapper>
            <div className="dashboard-container">
                <img className="bg-img" src={background} alt="" />
                <div className="title-container">
                    <h1 className="title">HydroCrab</h1>
                    <img className="title-img" src={crab} alt="crab" />
                </div>
                <div className="main-container">
                    <Menu />
                </div>
                <Footer />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .dashboard-container {
        position: relative;
        min-height: 100vh;
        width: 100vw;
        overflow: hidden;
        text-align: center;
    }

    .title-container {
        height: 100%;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
    }

    .title {
        margin: 0.5rem;
        height: 10vh;
        line-height: 10vh;
        color: #fe9586;
        font-size: 5.5rem;
        font-weight: 500;
        text-shadow: 5px 5px 2px #331e1b;
        font-family: 'Rubik Moonrocks', cursive;
    }

    .title-img {
        margin-left: -1rem;
        height: 8rem;
    }

    .main-container {
        height: 80vh;
    }

    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100;
        opacity: 0.1;
    }
`;

export default Dashboard;
