import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BigCup from '../components/BigCup';
import SmallCup from '../components/SmallCup';
import Footer from '../components/Footer';
import { BsInstagram, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { useAppStateContext } from '../context/AppStateContext';

function Dashboard() {
    const { appState, setAppState } = useAppStateContext();
    const [drunkAmount, setDrunkAmount] = useState(0);

    useEffect(() => {
        setAppState({ ...appState, drunkWaterHeight: (350 * drunkAmount) / appState.literAmount });
        // eslint-disable-next-line
    }, [drunkAmount]);

    const handleSmallCup = () => {
        setDrunkAmount(drunkAmount + 250);
    };

    const handlMediumCup = () => {
        setDrunkAmount(drunkAmount + 300);
    };

    const handleBigCup = () => {
        setDrunkAmount(drunkAmount + 1000);
    };

    const handleCleanUp = () => {
        setDrunkAmount(0);
        setAppState({ ...appState, drunkWaterHeight: 0 });
    };

    return (
        <Wrapper>
            <div className="dashboard-container">
                <div className="main-container">
                    <div className="info-panel">
                        <h2 className="target">Cel: {appState.literAmount} ml</h2>
                        <h2 className="drunk">Wypito: {drunkAmount} ml</h2>
                        <h2 className="balance">Bilans: {appState.literAmount - drunkAmount} ml</h2>
                    </div>
                    <div className="cup-container">
                        <div className="big-cup-container">
                            <BigCup drunkAmount={drunkAmount} />
                            <button className="btn" onClick={handleCleanUp}>
                                wyczyść
                            </button>
                        </div>
                        <div className="small-cup-container">
                            <button onClick={handleSmallCup}>
                                <SmallCup height={'6rem'} text={'250 ml'} />
                            </button>
                            <button onClick={handlMediumCup}>
                                <SmallCup height={'8rem'} text={'500 ml'} />
                            </button>
                            <button onClick={handleBigCup}>
                                <SmallCup height={'10rem'} text={'1000 ml'} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="media-container">
                    <BsInstagram />
                    <BsFacebook />
                    <BsLinkedin />
                </div>

                <Footer />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .dashboard-container {
        position: relative;
        min-height: calc(78vh - 4px);
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

    .info-panel {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
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

    .target,
    .drunk,
    .balance {
        width: 20%;
        font-weight: 400;
        color: #f5f5f5;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        padding: 1rem;
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
