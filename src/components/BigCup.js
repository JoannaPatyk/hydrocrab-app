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
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .big-cup {
        height: 70%;
        width: 35%;
        border: 6px solid navy;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 80px;
        background-color: #f5f5f5;
    }
`;

export default BigCup;
