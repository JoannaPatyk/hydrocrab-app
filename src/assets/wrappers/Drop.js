import styled from 'styled-components';

const Wrapper = styled.div`
    .small-cup {
        position: relative;
        width: 4rem;
    }

    .small-cup:hover {
        cursor: pointer;
    }

    p {
        color: #0fb6fa;
        text-align: center;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    .icon {
        transition: 0.5s;
        animation: dropMove 2s infinite linear;
    }

    .icon:hover {
        color: #6fbee5;
    }
`;

export default Wrapper;
