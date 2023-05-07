import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import background from '../assets/background.jpg';
import { useAppStateContext } from '../context/AppStateContext';

function BigCup() {
    const { appState } = useAppStateContext();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (appState.drunkWaterHeight === 350) {
            setIsActive(!isActive);
            console.log(isActive);
        }
        // eslint-disable-next-line
    }, [appState.drunkWaterHeight]);

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

const Wrapper = styled.div`
    .big-cup-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .big-cup {
        position: relative;
        height: 340px;
        width: 180px;
        margin-bottom: 4rem;
        box-shadow: 5px 5px 10px #222222;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        background-color: rgb(245, 245, 245);
        overflow: hidden;
    }

    .water {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom-left-radius: 50px;
        border-bottom-right-radius: 50px;
        transition: 0.5s;
    }
`;

export default BigCup;
