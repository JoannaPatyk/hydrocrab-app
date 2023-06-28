import styled from 'styled-components';

const Wrapper = styled.div`
    .container {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: 0.25fr 0.75;
        place-items: center;
    }

    .crown {
        display: none;
        font-size: 4rem;
        color: #ff401b;
    }

    .show {
        display: block;
    }

    .big-cup {
        position: relative;
        height: 340px;
        width: 180px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        box-shadow: 5px 5px 10px #111111;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
        background-color: rgb(245, 245, 245);
        overflow: hidden;
    }

    .water {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        transition: 0.5s;
    }
`;

export default Wrapper;
