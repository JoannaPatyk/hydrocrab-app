import React from 'react';
import { MdWaterDrop } from 'react-icons/md';
import Wrapper from '../assets/wrappers/Logo';

function Logo() {
    return (
        <Wrapper>
            <div className="title-container">
                <h1 className="title">hydro</h1>
                <MdWaterDrop className="icon" />
                <h1 className="title">drop</h1>
            </div>
        </Wrapper>
    );
}

export default Logo;
