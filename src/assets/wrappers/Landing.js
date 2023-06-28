import styled from 'styled-components';

const Wrapper = styled.div`
    .main-container {
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr 3fr;
    }

    .right-side {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem 20px;
    }

    h1 {
        margin: 0.5rem 2rem;
        font-weight: 100;
        letter-spacing: 0.5rem;
        font-size: 3.5rem;
        text-align: center;
    }

    h2 {
        width: 50%;
        margin: 0.5rem 2rem;
        font-weight: 100;
        text-align: center;
        letter-spacing: 0.3rem;
        line-height: 3rem;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        color: #0fb6fa;
        font-size: 4rem;
    }

    .line {
        width: 5rem;
        height: 1px;
        background-color: #0fb6fa;
    }

    .btn {
        margin-top: 1rem;
    }

    .bg {
        position: absolute;
        top: 0;
        left: -5%;
        z-index: -10;
        height: 100%;
    }

    .ball {
        position: absolute;
        z-index: -1;
        border-radius: 50%;
        animation: dropMove 3s infinite;
    }

    .v1 {
        bottom: 5%;
        right: 15%;
        width: 4rem;
        height: 4rem;
    }

    .v2 {
        bottom: 5%;
        right: 15%;
        bottom: 10%;
        right: 5%;
        width: 6rem;
        height: 6rem;
    }

    .v3 {
        bottom: 15%;
        right: 12%;
        width: 10rem;
        height: 10rem;
    }

    @media (max-width: 1150px) {
        h1 {
            font-size: 2.5rem;
        }

        h2 {
            font-size: 1.3rem;
            line-height: 2.5rem;
        }

        .icon {
            font-size: 3.5rem;
        }
    }

    @media (max-width: 945px) {
        h1 {
            font-size: 2.2rem;
        }

        h2 {
            font-size: 1.2rem;
            line-height: 2.5rem;
        }

        .icon {
            font-size: 3rem;
        }
    }

    @media (max-width: 620px) {
        .main-container {
            grid-template-columns: 0.25fr 2.75fr;
        }
        .btn {
            width: 18rem;
            font-size: 1.6rem;
        }
    }

    @media (max-width: 495px) {
        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1rem;
            line-height: 1.8rem;
        }
        .btn {
            width: 16rem;
            font-size: 1.6rem;
        }
    }
`;

export default Wrapper;
