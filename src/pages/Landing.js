import React from 'react';
import background from '../assets/images/background.jpg';
import { MdWaterDrop } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Landing';

function Landing() {
    return (
        <Wrapper>
            <div className="main-container">
                <div className="left-side">
                    <img className="bg" src={background} alt="water" />
                </div>
                <div className="right-side">
                    <h1>Water changes everything!</h1>
                    <div className="icon-container">
                        <div className="line"></div>
                        <MdWaterDrop className="icon" />
                        <div className="line"></div>
                    </div>
                    <h2>Monitoruj, ile wody wypijasz dziennie i upewnij się, że to wystarczająca ilość!</h2>
                    <Link className="btn" to="/dashboard">
                        start
                    </Link>
                    <div className="ball v1"></div>
                    <div className="ball v2"></div>
                    <div className="ball v3"></div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Landing;
