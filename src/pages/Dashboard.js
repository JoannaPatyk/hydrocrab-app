import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import BigCup from '../components/BigCup';
import Footer from '../components/Footer';
import water from '../assets/water.png';
import SmallCup from '../components/SmallCup';
import { useWaterContext } from '../context/WaterContext';

function Dashboard() {
    const { literAmount, count, setCount } = useWaterContext();
    const [activeCupIndex, setActiveCupIndex] = useState(null);

    useEffect(() => {
        setCount(literAmount / 250);
        // eslint-disable-next-line
    }, [literAmount]);

    const handleSmallCup = (index) => {
        setActiveCupIndex(index);
    };

    return (
        <Wrapper>
            <div className="dashboard-container">
                <div className="title-container">
                    <h1 className="title">HYDRO</h1>
                    <img className="title-img" src={water} alt="crab" />
                    <h1 className="title">DROP</h1>
                </div>
                <Menu />
                <div className="main-container">
                    <h1 className="target">CEL: {literAmount} ml</h1>
                    <div className="cup-container">
                        <div className="big-cup-container">
                            <BigCup />
                        </div>
                        <div className="small-cup-container">
                            {(() => {
                                const cups = [];
                                for (let index = 0; index < count; index++) {
                                    cups.push(
                                        <button className="btn-cup" key={index} onClick={() => handleSmallCup(index)}>
                                            <SmallCup activeCupIndex={activeCupIndex} index={index} />
                                        </button>
                                    );
                                }
                                return cups;
                            })()}
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
        margin: 2rem auto 1rem;
    }

    .title {
        margin: 0.5rem;
        height: 10vh;
        line-height: 10vh;
        color: #3771c8;
        font-size: 5rem;
        font-weight: 200;
        text-shadow: 5px 5px 2px #001d43;
    }

    .title-img {
        height: 9rem;
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
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .big-cup-container {
        height: 80%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .target {
        width: 20%;
        font-size: 2.5rem;
        font-weight: 300;
        color: #f37151;
        padding: 2rem;
    }

    .btn-cup {
        margin: 0.2rem;
        border: none;
        background-color: transparent;
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
