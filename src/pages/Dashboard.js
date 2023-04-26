import React from 'react';
import styled from 'styled-components';

import Menu from '../components/Menu';
import BigCup from '../components/BigCup';
import SmallCup from '../components/SmallCup';
import Footer from '../components/Footer';
import background from '../assets/waves.png';

function Dashboard() {
    return (
        <Wrapper>
            <div className="dashboard-container">
                <img className="bg-img" src={background} alt="" />
                <Menu />
                <BigCup />
                <SmallCup />
                <Footer />
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .dashboard-container {
        position: relative;
        min-height: 100vh;
        width: 100vw;
        overflow: hidden;
    }

    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -100;
        opacity: 0.1;
    }
`;

export default Dashboard;
