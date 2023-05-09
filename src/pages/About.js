import React from 'react';
import styled from 'styled-components';
import { BsInstagram, BsFacebook, BsTwitter, BsDroplet } from 'react-icons/bs';

function About() {
    return (
        <Wrapper>
            <div className="description-container">
                <p>
                    Aplikacja <span>Hydrodrop</span> została stworzona do monitorowania spożywanej ilości płynów,
                    przypomina o potrzebie nawodnienia, jej celem jest eliminowanie problem zapominania o piciu wody.
                    Stanowi to doskonałe rozwiązanie dla osób borykających się z trudnościami w utrzymaniu odpowiedniego
                    poziomu nawodnienia.
                </p>
                <p>
                    Spożywanie odpowiedniej ilości wody stanowi istotny element zdrowego stylu życia, obok zrównoważonej
                    diety oraz odpowiedniego czasu na regenerację organizmu. Osoby aktywne fizycznie powinny szczególną
                    uwagę zwracać na zagadnienie dostatecznego nawadniania, jako że ich organizmy, po intensywnym
                    wysiłku, odczuwają zwiększone zapotrzebowanie na płyny.
                </p>
                <p>
                    <span>Hydrodrop</span> pomoże wyrobić Ci nawyk picia wody!
                </p>
                <div className="media-container">
                    <h2>
                        <span>Znajdziesz nas:</span>
                    </h2>

                    <div className="drops-container">
                        <div className="drop">
                            <BsDroplet className="drop-icon" />
                            <a href="https://www.instagram.com/">
                                <BsInstagram className="ig" />
                            </a>
                        </div>
                        <div className="drop">
                            <BsDroplet className="drop-icon" />
                            <a href="https://www.facebook.com/">
                                <BsFacebook className="fb" />
                            </a>
                        </div>
                        <div className="drop">
                            <BsDroplet className="drop-icon" />
                            <a href="https://twitter.com/">
                                <BsTwitter className="tt" />
                            </a>
                        </div>
                    </div>
                </div>
                <h1>Water changes everything!</h1>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .description-container {
        min-height: 70vh;
        width: 60%;
        margin: 2rem auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px 50px;
        text-align: center;
    }

    h2 {
        text-align: center;
        font-weight: 300;
    }

    h1 {
        font-size: 3rem;
        font-family: 'Cedarville Cursive', sans-serif;
    }

    p {
        line-height: 1.9rem;
        letter-spacing: 0.05rem;
    }

    span {
        font-weight: 600;
    }

    .media-container {
        width: 80%;
        height: 18vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px 50px;
        margin: 0 auto;
    }

    .drops-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0 40px;
    }

    .drop {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fa7a5a;
        animation: dropMove 2s infinite linear;
        transition: 0.5s;
        cursor: pointer;
    }

    .drop:hover {
        color: #f5532a;
        transform: scale(0.95);
    }

    .drop-icon {
        font-size: 5rem;
    }

    .ig,
    .fb,
    .tt {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        color: #fa7a5a;
    }

    @media (max-width: 1160px) {
        .description-container {
            width: 80%;
        }
    }

    @media (max-width: 880px) {
        h1 {
            font-size: 2.5rem;
        }

        p {
            line-height: 1.7rem;
            font-size: 0.9rem;
        }
    }

    @media (max-width: 570px) {
        h1 {
            font-size: 2rem;
        }

        .drops-container {
            gap: 0 20px;
        }
    }
`;

export default About;
