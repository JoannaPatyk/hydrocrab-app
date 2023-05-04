import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BigCup from '../components/BigCup';
import SmallCup from '../components/SmallCup';
import Footer from '../components/Footer';

import { useWaterContext } from '../context/WaterContext';

function Dashboard() {
    const { literAmount } = useWaterContext();
    const [bigCupActiveHeight, setBigCupActiveHeight] = useState(0);
    const [partSmallCup, setPartSmallCup] = useState(0);
    const [partMediumCup, setPartMediumCup] = useState(0);
    const [partLargeCup, setPartLargeCup] = useState(0);

    const MAX_CUP_HEIGHT = 330;
    const CUP_HEIGHT_INCREMENT = 350;

    useEffect(() => {
        setPartSmallCup(literAmount / 250);
        setPartMediumCup(literAmount / 500);
        setPartLargeCup(literAmount / 1000);
    }, [literAmount]);

    const handleCup = (partCup) => {
        if (bigCupActiveHeight < MAX_CUP_HEIGHT) {
            setBigCupActiveHeight(bigCupActiveHeight + CUP_HEIGHT_INCREMENT / partCup);
        }
    };

    const handleSmallCup = () => {
        handleCup(partSmallCup);
    };

    const handleMediumCup = () => {
        handleCup(partMediumCup);
    };

    const handleLargeCup = () => {
        handleCup(partLargeCup);
    };

    const handleCleanUp = () => {
        setBigCupActiveHeight(0);
        console.log(bigCupActiveHeight);
    };

    return (
        <Wrapper>
            <div className="dashboard-container">
                <div className="main-container">
                    <h1 className="target">Cel: {literAmount} ml</h1>
                    <div className="cup-container">
                        <div className="big-cup-container">
                            <BigCup bigCupActiveHeight={bigCupActiveHeight} />
                            <button className="btn" onClick={handleCleanUp}>
                                wyczyść
                            </button>
                        </div>
                        <div className="small-cup-container">
                            <button onClick={handleSmallCup}>
                                <SmallCup height={'6rem'} text={'250 ml'} />
                            </button>
                            <button onClick={handleMediumCup}>
                                <SmallCup height={'8rem'} text={'500 ml'} />
                            </button>
                            <button onClick={handleLargeCup}>
                                <SmallCup height={'10rem'} text={'1000 ml'} />
                            </button>
                        </div>
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
        min-height: 78vh;
        width: 100vw;
        overflow: hidden;
        text-align: center;
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
        width: 50vw;
        display: grid;
        place-items: center;
        grid-template-columns: 1fr 1fr;
        margin: -2.5rem auto 0;
    }

    .small-cup-container {
        height: 70%;
        width: 150%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .small-cup-container button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 9rem;
        height: 9rem;
        background-color: transparent;
        border: none;
    }

    .target {
        width: 20%;
        font-size: 2.5rem;
        font-weight: 300;
        padding: 1rem;
        border: 2px solid whitesmoke;
    }

    .big-cup-container {
        height: 100%;
        width: 100%;
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .btn {
        width: 14rem;
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
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

export default Dashboard;
