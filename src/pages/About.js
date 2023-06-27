import React from 'react';
import { BsInstagram, BsFacebook, BsTwitter, BsDroplet } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/About';

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

export default About;
