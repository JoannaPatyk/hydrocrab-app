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
        background-color: transparent;
    }

    h4 {
        font-weight: 300;
        line-height: 5vh;
    }
`;

export default Wrapper;
