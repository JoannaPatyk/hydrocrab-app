import React from 'react';
import background from '../assets/images/water.png';
import background2 from '../assets/images/water-2.png';
import { IoIosCafe } from 'react-icons/io';
import { BsCupStraw } from 'react-icons/bs';
import { CiCoffeeCup } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Landing';

function Landing() {
    return (
        <Wrapper>
            <div className="container">
                <img className="image bg-image-1" src={background} alt="water" />
                <img className="image bg-image-2" src={background2} alt="water" />
                <div className="main">
                    <h1>
                        Water <br /> <span>changes</span> <br /> everything!
                    </h1>
                    <div className="icon-container">
                        <div className="line"></div>
                        <BsCupStraw className="icon" />
                        <IoIosCafe className="icon" />
                        <CiCoffeeCup className="icon" />
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
