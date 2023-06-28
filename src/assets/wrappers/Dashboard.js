import styled from 'styled-components';

const Wrapper = styled.div`
    .dashboard-container {
        position: relative;
        min-height: calc(78vh - 8px);
        width: 100vw;
        overflow: hidden;
        text-align: center;
    }

    .main-container {
        height: 70vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .info-panel {
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .cup-container {
        height: 60vh;
        width: 50vw;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .small-cup-container {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .small-cup-container button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 9rem;
        height: 9rem;
        background-color: transparent;
        border: none;
    }

    .target,
    .drunk,
    .balance {
        width: 35%;
        font-weight: 400;
        color: #0fb6fa;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        padding: 1rem;
    }

    .big-cup-container {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .drop {
        position: absolute;
        bottom: 100px;
        right: 10px;
        font-size: 4rem;
    }

    .btn {
        width: 14rem;
        font-size: 1.2rem;
        letter-spacing: 0.2rem;
    }

    .bg-img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -100;
        opacity: 0.1;
    }

    @media (max-width: 1070px) {
        .info-panel {
            width: 90%;
            gap: 5px;
            font-size: 1rem;
        }
    }

    @media (max-width: 920px) {
        .info-panel {
            width: 100%;
            gap: 0;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 750px) {
        .info-panel {
            flex-direction: column;
            gap: 10px;
            margin: 50px 0;
        }

        .target,
        .drunk,
        .balance {
            width: 60%;
            padding: 0.5rem;
        }
    }

    @media (max-width: 650px) {
        .cup-container {
            width: 100vw;
        }
    }
`;

export default Wrapper;
