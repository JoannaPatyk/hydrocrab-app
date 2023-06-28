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
        color: #0fb6fa;
        text-align: center;
        font-size: 1rem;
        font-family: 'Righteous', sans-serif;
        font-weight: 500;
    }

    .icon {
        transition: 0.5s;
        color: #0fb7fa67;
        animation: dropMove 2s infinite linear;
    }

    .icon:hover {
        color: #0fb6fa;
    }
`;

export default Wrapper;
