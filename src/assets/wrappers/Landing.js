import styled from 'styled-components';

const Wrapper = styled.div`
    .container {
        position: relative;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .left-side img {
        margin-left: 10rem;
        height: 80%;
    }

    .main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem 20px;
    }

    h1 {
        margin: 0.5rem 2rem;

        letter-spacing: 0.5rem;
        font-size: 8rem;
        text-align: center;

        .changes {
            color: #66a1fb;
        }

        .water {
            padding: 0 2rem;
            color: #ffffff;
            background-color: #66a1fb;
        }
    }

    h2 {
        width: 45%;
        margin: 0.5rem 2rem;

        text-align: center;
        letter-spacing: 0.2rem;
        line-height: 3rem;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        color: #66a1fb;
        font-size: 4.5;
    }

    .line {
        width: 8rem;
        height: 2px;
        background-color: #66a1fb;
    }

    .btn {
        margin-top: 1rem;
    }

    .image {
        position: absolute;
        z-index: -1;
        height: 100%;
        opacity: 0.7;
    }

    .bg-image-1 {
        top: 0;
        left: 5%;
    }

    .bg-image-2 {
        top: -5%;
        right: 5%;
        transform: rotate(140deg);
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
