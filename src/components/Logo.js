import React from 'react';
import { MdWaterDrop } from 'react-icons/md';

function Logo() {
    return (
        <div className="title-container">
            <h1 className="title">HYDRO</h1>
            <MdWaterDrop className="icon" />
            <h1 className="title">DROP</h1>
        </div>
    );
}

export default Logo;
