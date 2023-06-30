import styled from 'styled-components';

const Wrapper = styled.div`
    .footer-container {
        position: fixed;
        bottom: 0;
        width: 100%;
        min-height: 5vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: #66a1fb;
    }

    h4 {
        line-height: 5vh;
        color: #ffffff;
        letter-spacing: 0.1rem;
    }
`;

export default Wrapper;
