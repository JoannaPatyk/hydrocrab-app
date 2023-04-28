import React from 'react';
import styled from 'styled-components';

function SmallCup() {
    return (
        <Wrapper>
            <div className="small-cup-container">
                <div className="small-cup"></div>
                <div className="small-cup"></div>
                <div className="small-cup"></div>
                <div className="small-cup"></div>
                <div className="small-cup"></div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .small-cup-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .small-cup {
        height: 15%;
        width: 10%;
        margin: 0.5rem;
        border: 2px solid #2b2c32;
        box-shadow: 1px 1px 10px #2b2c32;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        background-color: #f5f5f5;
    }
`;

export default SmallCup;
