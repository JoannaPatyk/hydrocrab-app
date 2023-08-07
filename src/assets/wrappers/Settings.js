import styled from 'styled-components';

const Wrapper = styled.div`
    .settings-container {
        min-height: 76vh;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        display: grid;
        grid-template-columns: 10fr 1fr;
    }

    h3 {
        font-size: 1.3rem;
        margin: 1rem 0;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .choice-container {
        min-height: 76vh;
        width: 50%;
        margin: -1rem auto 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .questions-container {
        width: 600px;
        margin: 1rem;
    }

    .question {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }

    .weight,
    .answer {
        display: flex;
        align-items: center;
    }

    .calculate {
        margin: 2rem 0;
        font-size: 1.3rem;
    }

    p {
        width: 30%;
        font-size: 0.8rem;
        line-height: 1.5rem;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        h4 {
            padding-left: 0.5rem;
            text-align: start;
        }
    }

    .form-container h4 {
        padding-left: 0.5rem;
        text-align: start;
    }

    .select-container {
        width: 38%;
    }

    .form-input {
        width: 12rem;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-bottom: 1px solid #66a1fb;
        font-size: 1.5rem;
        font-family: inherit;
        text-align: center;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }

    .form-select {
        width: 15rem;
        margin: 0.5rem 0;
    }

    .drop {
        width: 8rem;
        position: absolute;
        z-index: -1;
        opacity: 0.7;
        animation: dropMove 2s infinite linear;
    }

    .v0 {
        bottom: 55%;
        right: 30%;
    }

    .v1 {
        bottom: 55%;
        right: 30%;
    }

    .v2 {
        bottom: 55%;
        right: 30%;
    }

    .v3 {
        bottom: 55%;
        right: 30%;
    }

    .image {
        position: absolute;
        height: 90%;
        top: 0;
        right: 28%;
        z-index: -1;
        opacity: 0.8;
    }

    @media (max-width: 1300px) {
        .choice-container {
            width: 45vw;
        }
    }

    @media (max-width: 1080px) {
        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1rem;
        }

        .form-input {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 860px) {
        .choice-container {
            min-height: 85vh;
        }

        .form-input {
            width: 8rem;
        }
    }

    @media (max-width: 720px) {
        .select-container {
            width: 27%;
        }

        .form-select {
            width: 10rem;
            margin: 0.25rem 0;
        }

        .question {
            gap: 5px;
        }
    }

    @media (max-width: 680px) {
        h2 {
            font-size: 1.2rem;
        }

        h3 {
            font-size: 0.9rem;
        }

        .form-input {
            font-size: 1rem;
        }

        .choice-container {
            width: 65vw;
        }
    }

    @media (max-width: 460px) {
        .select-container {
            width: 21%;
        }

        .form-select {
            width: 8rem;
        }

        .choice-container {
            width: 90vw;
        }
    }
`;

export default Wrapper;
