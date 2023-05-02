import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function BigCup({ bigCupActiveHeight }) {
    return (
        <Wrapper>
            <div className="big-cup-container">
                <div className="big-cup">
                    <div className="water" style={{ height: `${bigCupActiveHeight}px` }}></div>
                </div>
            </div>
        </Wrapper>
    );
}

BigCup.propTypes = {
    bigCupActiveHeight: PropTypes.any
};

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
        box-shadow: 5px 5px 10px #222;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 80px;
        background-color: whitesmoke;
        overflow: hidden;
    }

    .water {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 80px;
        background: #2b2c32;
    }
`;

export default BigCup;
