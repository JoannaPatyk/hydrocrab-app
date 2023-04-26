import React from 'react';
import styled from 'styled-components';

function BigCup() {
    return (
        <Wrapper>
            <div className="big-cup-container">
                <div className="big-cup"></div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .big-cup-container {
        height: 75vh;
        width: 30vw;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 15rem;
    }

    .big-cup {
        height: 50%;
        width: 35%;
        border: 6px solid navy;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
    }
`;

export default BigCup;
