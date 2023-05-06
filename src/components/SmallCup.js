import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MdWaterDrop } from 'react-icons/md';

function SmallCup({ height, text }) {
    return (
        <Wrapper>
            <div className="small-cup">
                <MdWaterDrop className="icon" style={{ fontSize: height }} />
                <p>{text}</p>
            </div>
        </Wrapper>
    );
}

SmallCup.propTypes = {
    height: PropTypes.string,
    text: PropTypes.string
};

const Wrapper = styled.div`
    .small-cup {
        position: relative;
        width: 4rem;
    }

    .small-cup:hover {
        cursor: pointer;
    }

    p {
        color: #f5f5f5;
        text-align: center;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    .icon {
        animation: dropMove 2s infinite linear;
    }
`;

export default SmallCup;
