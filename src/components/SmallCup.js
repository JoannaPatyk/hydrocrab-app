import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function SmallCup({ activeCupIndex, index }) {
    return (
        <Wrapper>
            <div className={activeCupIndex >= index ? 'small-cup active' : 'small-cup'}></div>
        </Wrapper>
    );
}

SmallCup.propTypes = {
    activeCupIndex: PropTypes.number,
    index: PropTypes.number
};

const Wrapper = styled.div`
    .small-cup {
        position: relative;
        height: 5rem;
        width: 3rem;
        margin: 0.5rem;
        border: 2px solid #2b2c32;
        box-shadow: 2px 3px 5px #2b2c32;
        border-bottom-left-radius: 30px;
        border-bottom-right-radius: 30px;
        background-color: #f5f5f5;
    }

    .active {
        background-color: #7293ee;
    }

    .small-cup:hover {
        cursor: pointer;
    }

    p {
        color: black;
        text-align: center;
        line-height: 35px;
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 50%;
    }
`;

export default SmallCup;
