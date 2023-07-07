import React from 'react';
import { useAppStateContext } from '../context/AppStateContext';
import Wrapper from '../assets/wrappers/BigCup';
import { BiCrown } from 'react-icons/bi';

function BigCup() {
    const { appState } = useAppStateContext();
    const { drunkWaterHeight } = appState;

    const crownClassName = drunkWaterHeight >= 350 ? 'crown show' : 'crown';

    return (
        <Wrapper>
            <div className="container">
                <BiCrown className={crownClassName} />
                <div className="big-cup">
                    <div
                        className="water"
                        style={{
                            height: `${drunkWaterHeight < 350 ? drunkWaterHeight : 350}px`,
                            backgroundColor: '#66a1fb'
                        }}
                    ></div>
                </div>
            </div>
        </Wrapper>
    );
}

export default BigCup;
