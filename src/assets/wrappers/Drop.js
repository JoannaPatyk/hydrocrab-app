import styled from 'styled-components';

const Wrapper = styled.div`
    .small-cup {
        position: relative;
        width: 10rem;
    }

    .small-cup:hover {
        cursor: pointer;
    }

    p {
        color: #66a1fb;
        text-align: center;
        font-size: 1rem;
        font-family: 'Righteous', sans-serif;
    }

    .icon {
        transition: 0.5s;
        animation: dropMove 2s infinite linear;
    }

    .icon:hover {
        color: #66a1fb;
    }
`;

export default Wrapper;
