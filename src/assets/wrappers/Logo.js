import styled from 'styled-components';

const Wrapper = styled.div`
    .title-container {
        padding-top: 2rem;
    }

    @media (max-width: 820px) {
        .title {
            font-size: 4rem;
        }

        .icon {
            font-size: 3rem;
        }
    }

    @media (max-width: 585px) {
        .title {
            font-size: 3rem;
        }

        .icon {
            font-size: 2.5rem;
        }
    }

    @media (max-width: 460px) {
        .title {
            font-size: 2.5rem;
        }
        .icon {
            font-size: 2rem;
        }
    }
`;

export default Wrapper;
