import React, { useEffect, useState } from 'react';
import background from '../assets/images/background.jpg';
import { useAppStateContext } from '../context/AppStateContext';
import Wrapper from '../assets/wrappers/BigCup';

function BigCup() {
    const { appState } = useAppStateContext();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (appState.drunkWaterHeight === 350) {
            setIsActive(!isActive);
        }
    }, [isActive, appState.drunkWaterHeight]);

    return (
        <Wrapper>
            <div className="big-cup-container">
                <div className="big-cup">
                    <div
                        className="water"
                        style={{ height: `${appState.drunkWaterHeight < 350 ? appState.drunkWaterHeight : 350}px` }}
                    >
                        <img src={background} alt="glass of water" />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default BigCup;
