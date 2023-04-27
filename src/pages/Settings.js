import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import coral from '../assets/coral.png';
import drop from '../assets/water-drop.png';
import wave from '../assets/waves.png';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import { BsArrow90DegLeft } from 'react-icons/bs';
import Footer from '../components/Footer';
function Settings({ liter, setLiter }) {
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [activity, seActivity] = useState('');

    const handleLiterAmountChange = (event) => {
        const value = event.target.value;
        setLiter(value);
    };

    const handleLiterAmountChange2 = () => {
        setLiter(weight * 30);
        console.log(liter);
    };

    const handleWeightChange = (event) => {
        const value = event.target.value;
        setWeight(value);
        console.log(weight);
    };

    useEffect(() => {
        handleLiterAmountChange2();
    }, [weight]);

    const handleSubmit = () => {};
    const handleSubmit2 = () => {};

    return (
        <Wrapper>
            <Menu />
            <Link to="/" className="back-icon">
                <BsArrow90DegLeft />
            </Link>
            <div className="settings-container">
                <img className="background-img" src={drop} alt="" />
                <img className="wave-img" src={wave} alt="" />
                <h2>Ile wody chcesz wypić?</h2>

                <h3>Podaj sam ilość wody</h3>
                <h4>
                    <input type="number" value={liter} onChange={handleLiterAmountChange} />
                    ml
                </h4>

                <h3>lub oblicz ilość wody do wypicia</h3>
                <form method="post" onSubmit={handleSubmit}>
                    <label>
                        Płeć:
                        <select name="selectedGender" defaultValue="-">
                            <option value="other">-</option>
                            <option value="woman">Kobieta</option>
                            <option value="man">Mężczyzna</option>
                        </select>
                    </label>
                </form>
                <label>
                    Waga:
                    <input type="number" value={weight} onChange={handleWeightChange} />
                    kg
                </label>
                <form method="post" onSubmit={handleSubmit2}>
                    <label>
                        Aktywność:
                        <select name="selectedActivity" defaultValue={activity}>
                            <option value="small">Mała</option>
                            <option value="medium">Średnia</option>
                            <option value="big">Duża</option>
                        </select>
                    </label>
                </form>

                <h3>sugerowana ilość wody to</h3>
                <h4>
                    <input type="number" value={liter} onChange={handleLiterAmountChange2} />
                    ml
                </h4>

                <img className="settings-img" src={coral} alt="coral" />
            </div>
            <Footer />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .settings-container {
        position: relative;
        height: 90vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: -1rem auto 0;
        color: #2b2c32;
        overflow: hidden;
    }

    .menu-container {
        margin-top: 1rem;
    }

    .back-icon {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 1.5rem;
        line-height: 50px;
        text-align: center;
        color: #2b2c32;
    }

    h2,
    h3 {
        margin: 1rem;
        font-weight: 300;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-weight: 300;
    }

    input,
    select {
        border: none;
        border-bottom: 1px solid #ccc;
        font-size: 1.1rem;
        font-family: inherit;
        font-weight: 500;
        text-align: center;
        color: inherit;
        padding: 5px 10px;
        width: 8rem;
        background-color: transparent;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    label {
        padding: 1rem;
        font-size: 1.1rem;
    }

    .background-img {
        height: 85%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -90;
        opacity: 0.9;
    }

    .wave-img {
        width: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -100;
        opacity: 0.1;
    }

    .settings-img {
        height: 75%;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: -50;
        opacity: 0.9;
    }
`;
Settings.propTypes = {
    liter: PropTypes.number,
    setLiter: PropTypes.func
};

export default Settings;
