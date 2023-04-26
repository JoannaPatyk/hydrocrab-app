import React from 'react';
import styled from 'styled-components';

function Footer() {
    return (
        <Wrapper>
            <div className="footer-container">
                <h4>Copyright © 2023 Joanna Patyk | All Rights Reserved</h4>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .footer-container {
        position: absolute;
        bottom: 0;
        width: 100%;
        min-height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: navy;
    }

    h4 {
        font-weight: 300;
        line-height: 5vh;
    }
`;

export default Footer;
