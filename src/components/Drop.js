import React from 'react';
import PropTypes from 'prop-types';
import { MdWaterDrop } from 'react-icons/md';
import Wrapper from '../assets/wrappers/Drop';

function Drop({ height, text }) {
    return (
        <Wrapper>
            <div className="small-cup">
                <MdWaterDrop className="icon" style={{ fontSize: height }} />
                <p>{text}</p>
            </div>
        </Wrapper>
    );
}

Drop.propTypes = {
    height: PropTypes.string,
    text: PropTypes.string
};

export default Drop;
