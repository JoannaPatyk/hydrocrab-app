import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import { BsArrow90DegLeft } from 'react-icons/bs';
import Footer from '../components/Footer';
import FormSelect from '../components/FormSelect';
import FormInput from '../components/FormInput';
import { useWaterContext } from '../context/WaterContext';

const genderOptions = [
    { value: '-', label: '-' },
    { value: 'kobieta', label: 'kobieta' },
    { value: 'mężczyzna', label: 'mężczyzna' }
];

const activityOptions = [
    { value: '-', label: '-' },
    { value: 'mała', label: 'mała' },
    { value: 'średnia', label: 'średnia' },
    { value: 'duża', label: 'duża' }
];
function Settings() {
    const { literAmount, setLiterAmount } = useWaterContext();

    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [activity, seActivity] = useState('');

    const handleLiterAmountChange = (event) => {
        const value = event.target.value;
        setLiterAmount(value);
    };

    const handleLiterAmountChange2 = () => {
        setLiterAmount((weight * 30) / 1000);
    };

    const handleWeightChange = (event) => {
        const value = event.target.value;
        setWeight(value);
    };

    useEffect(() => {
        handleLiterAmountChange2();
        // eslint-disable-next-line
    }, [weight]);

    const handleGender = (selected) => {
        setGender(selected.value);
    };

    const handleActivity = (selected) => {
        const value = selected.value;
        seActivity(value);
    };

    return (
        <Wrapper>
            <Menu />
            <Link to="/" className="back-icon">
                <BsArrow90DegLeft />
            </Link>
            <div className="settings-container">
                <h2>Ile wody chcesz wypić?</h2>
                <div className="questions">
                    <h3>Podaj sam ilość wody</h3>
                    <FormInput
                        id="literInput"
                        value={literAmount}
                        type="number"
                        text={'ml'}
                        onChange={handleLiterAmountChange}
                    />
                    <h3>lub oblicz ilość wody do wypicia</h3>
                    <FormInput
                        id="weightInput"
                        value={weight}
                        type="number"
                        text={'kg'}
                        onChange={handleWeightChange}
                    />
                    <FormSelect
                        options={genderOptions}
                        value={{ value: gender, label: gender }}
                        text={'Płeć:'}
                        onChange={handleGender}
                    />
                    <FormSelect
                        options={activityOptions}
                        value={{ value: activity, label: activity }}
                        text={'Aktywność:'}
                        onChange={handleActivity}
                    />
                    <h3>sugerowana ilość wody to</h3>
                    <FormInput
                        id="literInput"
                        value={literAmount}
                        type="number"
                        text={'ml'}
                        onChange={handleLiterAmountChange2}
                    />
                </div>
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

    .questions {
        padding-left: 6rem;
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
        margin: 1rem 0;
        font-weight: 300;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.4rem;
    }

    h4 {
        font-weight: 300;
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

    .form-container {
        display: flex;
        align-items: center;
        h4 {
            font-weight: 400;
            padding-left: 0.5rem;
            text-align: start;
        }
    }

    .select-container {
        width: 30%;
        h4 {
            text-align: start;
            padding-right: 0.5rem;
        }
    }

    .form-input {
        width: 12rem;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 5px;
        border: 1px solid #fff;
        font-size: 1.1rem;
        font-family: inherit;
        font-weight: 500;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }

    .form-select {
        width: 16rem;
        padding: 0.5rem 0;
    }

    .background-img {
        height: 90%;
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

export default Settings;
