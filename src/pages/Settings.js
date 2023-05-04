import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormSelect from '../components/FormSelect';
import FormInput from '../components/FormInput';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { useWaterContext } from '../context/WaterContext';
import genderOptions from '../utils/gender';
import activityOptions from '../utils/activity';

function Settings() {
    const { literAmount, setLiterAmount } = useWaterContext();
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [activity, seActivity] = useState('');

    const handleLiterAmountChange = (event) => {
        const value = event.target.value;
        setLiterAmount(value);
    };

    const handleLiterAmountChangeMyself = () => {
        let baseAmount = weight * 30;

        if (gender === 'kobieta') {
            baseAmount += 100;
        } else if (gender === 'mężczyzna') {
            baseAmount += 200;
        }

        if (activity === 'mała') {
            baseAmount += 50;
        } else if (activity === 'średnia') {
            baseAmount += 200;
        } else if (activity === 'duża') {
            baseAmount += 300;
        }

        setLiterAmount(baseAmount);
    };

    const handleWeightChange = (event) => {
        const value = event.target.value;
        setWeight(value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleLiterAmountChangeMyself();
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line
    }, [weight, gender, activity]);

    const handleGender = (selected) => {
        const value = selected.value;
        setGender(value);
    };

    const handleActivity = (selected) => {
        const value = selected.value;
        seActivity(value);
    };

    return (
        <Wrapper>
            <Link to="/dashboard" className="back-icon">
                <BsArrow90DegLeft />
            </Link>
            <div className="settings-container">
                <div className="choice-container">
                    <h3>Oblicz, ile wody powinieneś wypić?</h3>
                    <div className="question">
                        <h4>Podaj swoją wagę:</h4>
                        <FormInput id="weightInput" value={weight} type="number" onChange={handleWeightChange} />
                        <h3>kg</h3>
                    </div>
                    <div className="question">
                        <h4>Podaj swoją płeć:</h4>
                        <FormSelect
                            options={genderOptions}
                            value={{ value: gender, label: gender }}
                            onChange={handleGender}
                        />
                    </div>
                    <div className="question">
                        <h4>Podaj poziom aktywności:</h4>
                        <FormSelect
                            options={activityOptions}
                            value={{ value: activity, label: activity }}
                            onChange={handleActivity}
                        />
                    </div>
                    <h4>sugerowana ilość wody to</h4>
                    <div className="answer">
                        <FormInput
                            id="literInput"
                            value={literAmount}
                            type="number"
                            onChange={handleLiterAmountChangeMyself}
                        />
                        <h3>ml</h3>
                    </div>
                    <h3>lub sam określ limit wody do wypicia</h3>
                    <p>
                        *możesz również samodzielnie określić jaką ilość wody chcesz wypić. Wystarczy, że poniżej
                        wpiszesz wybraną wartość. Pamiętaj, że wartości podawane są w ml.
                    </p>
                    <div className="answer">
                        <FormInput
                            id="literInput"
                            value={literAmount}
                            type="number"
                            onChange={handleLiterAmountChange}
                        />
                        <h3>ml</h3>
                    </div>
                </div>
            </div>
            <Footer />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .settings-container {
        position: relative;
        height: 78vh;
        width: 70vw;
        margin: 0 auto;
        color: #2b2c32;
        text-align: center;
        overflow: hidden;
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
        padding-right: 0.5rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .choice-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80%;
    }

    .question,
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
        border-bottom: 1px solid #fff;
        font-size: 1.1rem;
        font-family: inherit;
        font-weight: 500;
        text-align: center;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }

    .form-select {
        width: 16rem;
        padding: 0.5rem 0;
    }

    label {
        font-size: 1.4rem;
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
