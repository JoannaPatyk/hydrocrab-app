import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../components/Menu';
import BigCup from '../components/BigCup';
import Footer from '../components/Footer';
import background from '../assets/waves.png';
import crab from '../assets/crab.png';
import SmallCup from '../components/SmallCup';

function Dashboard({ liter }) {
    return (
        <Wrapper>
            <div className="dashboard-container">
                <img className="bg-img" src={background} alt="" />
                <div className="title-container">
                    <h1 className="title">HydroCrab</h1>
                    <img className="title-img" src={crab} alt="crab" />
                </div>
                <Menu />
                <div className="main-container">
                    <h1 className="target">CEL: {liter}L</h1>
                    <div className="cup-container">
                        <BigCup />
                        <SmallCup />
                    </div>
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
        color: #f37151;
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
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .cup-container {
        height: 60vh;
        width: 60vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: -2.5rem auto 0;
    }

    .target {
        width: 20%;
        font-size: 3rem;
        font-weight: 200;
        padding: 2rem;
    }

    .bg-img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -100;
        opacity: 0.1;
    }
`;

Dashboard.propTypes = {
    liter: PropTypes.number.isRequired
};

export default Dashboard;
