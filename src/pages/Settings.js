import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormSelect from '../components/FormSelect';
import FormInput from '../components/FormInput';
import { AiOutlineLeft } from 'react-icons/ai';
import { useAppStateContext } from '../context/AppStateContext';
import genderOptions from '../utils/gender';
import activityOptions from '../utils/activity';
import additionalAmount from '../utils/additionalAmount';

function Settings() {
    const { appState, setAppState } = useAppStateContext();

    const handleLiterAmountChange = () => {
        let baseAmount = appState.weight * 30;

        if (appState.gender === 'kobieta') {
            baseAmount += 200;
        } else if (appState.gender === 'mężczyzna') {
            baseAmount += 400;
        }

        if (appState.activity === 'mała') {
            baseAmount += 200;
        } else if (appState.activity === 'średnia') {
            baseAmount += 400;
        } else if (appState.activity === 'duża') {
            baseAmount += 800;
        }

        console.log(additionalAmount);
        baseAmount = baseAmount + parseInt(appState.additionalAmount);

        setAppState({ ...appState, literAmount: baseAmount });
    };

    const handleNameChange = (event) => {
        const value = event.target.value;
        setAppState({ ...appState, name: value });
    };

    const handleWeightChange = (event) => {
        const value = event.target.value;
        setAppState({ ...appState, weight: value });
    };

    useEffect(() => {
        handleLiterAmountChange();
        // eslint-disable-next-line
    }, [appState.weight, appState.gender, appState.activity, appState.additionalAmount]);

    const handleGender = (selected) => {
        const value = selected.value;
        setAppState({ ...appState, gender: value });
    };

    const handleActivity = (selected) => {
        const value = selected.value;
        setAppState({ ...appState, activity: value });
    };

    const handleAdditional = (selected) => {
        const value = selected.value;
        setAppState({ ...appState, additionalAmount: value });
    };

    return (
        <Wrapper>
            <Link to="/dashboard" className="btn-back">
                <AiOutlineLeft />
            </Link>
            <div className="settings-container">
                <div className="choice-container">
                    <div className="question">
                        <h3>Podaj swoje imię:</h3>
                        <FormInput id="nameInput" value={appState.name} type="text" onChange={handleNameChange} />
                    </div>
                    <h2>Oblicz ile wody powinieneś/aś wypić?</h2>
                    <div className="weight">
                        <h3>Podaj swoją wagę:</h3>
                        <FormInput
                            id="weightInput"
                            value={appState.weight}
                            type="number"
                            onChange={handleWeightChange}
                        />
                        <h3>kg</h3>
                    </div>
                    <div className="questions-container">
                        <div className="question">
                            <h3>Podaj swoją płeć:</h3>
                            <FormSelect
                                options={genderOptions}
                                value={{ value: appState.gender, label: appState.gender }}
                                onChange={handleGender}
                            />
                        </div>
                        <div className="question">
                            <h3>Podaj poziom aktywności:</h3>
                            <FormSelect
                                options={activityOptions}
                                value={{ value: appState.activity, label: appState.activity }}
                                onChange={handleActivity}
                            />
                        </div>
                        <div className="question">
                            <h3>Chcesz dodać więcej ml wody?</h3>
                            <FormSelect
                                options={additionalAmount}
                                value={{ value: appState.additionalAmount, label: appState.additionalAmount }}
                                onChange={handleAdditional}
                            />
                        </div>
                    </div>

                    <h2>sugerowana ilość wody do wypicia w trakcie dnia to</h2>

                    <div className="answer">
                        <FormInput
                            id="literInput"
                            value={appState.literAmount}
                            type="number"
                            disabled
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
        color: #f5f5f5;
        text-align: center;
        overflow: hidden;
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
        height: 90%;
    }

    .questions-container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 10px 30px;
        margin: 1rem 0;
    }

    .question {
        display: flex;
        align-items: center;
        gap: 0 20px;
    }

    .weight,
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
        border-bottom: 1px solid #f5f5f5;
        font-size: 1.5rem;
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
`;

export default Settings;
