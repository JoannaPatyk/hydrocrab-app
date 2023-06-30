import React, { useEffect } from 'react';
import BigCup from '../components/BigCup';
import Drop from '../components/Drop';
import { useAppStateContext } from '../context/AppStateContext';
import Wrapper from '../assets/wrappers/Dashboard';
import background from '../assets/images/water.png';
import background2 from '../assets/images/water-2.png';

function Dashboard() {
    const { appState, setAppState } = useAppStateContext();

    useEffect(() => {
        setAppState({ ...appState, drunkWaterHeight: (350 * appState.drunkAmount) / appState.literAmount });
        // eslint-disable-next-line
    }, [appState.drunkAmount]);

    const handleDrop = () => {
        setAppState({ ...appState, drunkAmount: appState.drunkAmount + 250 });
    };

    const handlMediumCup = () => {
        setAppState({ ...appState, drunkAmount: appState.drunkAmount + 500 });
    };

    const handleBigCup = () => {
        setAppState({ ...appState, drunkAmount: appState.drunkAmount + 1000 });
    };

    const handleCleanUp = () => {
        setAppState({ ...appState, drunkAmount: 0, drunkWaterHeight: 0 });
    };

    return (
        <Wrapper>
            <div className="dashboard-container">
                <div className="main-container">
                    <div className="info-panel">
                        <h2 className="target">Cel: {appState.literAmount} ml</h2>
                        <h2 className="drunk">Wypito: {appState.drunkAmount} ml</h2>
                        <h2 className="balance">Bilans: {-(appState.literAmount - appState.drunkAmount)} ml</h2>
                    </div>
                    <div className="cup-container">
                        <div className="small-cup-container">
                            <button onClick={handleDrop}>
                                <Drop height={'6rem'} text={'250 ml'} />
                            </button>
                            <button onClick={handlMediumCup}>
                                <Drop height={'8rem'} text={'500 ml'} />
                            </button>
                            <button onClick={handleBigCup}>
                                <Drop height={'10rem'} text={'1000 ml'} />
                            </button>
                        </div>
                        <div className="big-cup-container">
                            <BigCup drunkAmount={appState.drunkAmount} />
                            <button className="btn" onClick={handleCleanUp}>
                                wyczyść
                            </button>
                        </div>
                    </div>
                    <img className="image bg-image-1" src={background} alt="water" />
                    <img className="image bg-image-2" src={background2} alt="water" />
                </div>
            </div>
        </Wrapper>
    );
}

export default Dashboard;
