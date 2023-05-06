import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footer';
import FormSelect from '../components/FormSelect';
import FormInput from '../components/FormInput';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { useAppStateContext } from '../context/AppStateContext';
import genderOptions from '../utils/gender';
import activityOptions from '../utils/activity';

function Settings() {
    const { appState, setAppState } = useAppStateContext();

    const handleLiterAmountChange = (event) => {
        const value = event.target.value;
        setAppState({ ...appState, literAmount: value });
    };

    const handleLiterAmountChangeMyself = () => {
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

        setAppState({ ...appState, literAmount: baseAmount });
    };

    const handleWeightChange = (event) => {
        const value = event.target.value;
        setAppState({ ...appState, weight: value });
    };

    useEffect(() => {
        handleLiterAmountChangeMyself();
        // eslint-disable-next-line
    }, [appState.weight, appState.gender, appState.activity]);

    const handleGender = (selected) => {
        const value = selected.value;
        setAppState({ ...appState, gender: value });
    };

    const handleActivity = (selected) => {
        const value = selected.value;
        setAppState({ ...appState, activity: value });
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
                        <FormInput
                            id="weightInput"
                            value={appState.weight}
                            type="number"
                            onChange={handleWeightChange}
                        />
                        <h3>kg</h3>
                    </div>
                    <div className="question">
                        <h4>Podaj swoją płeć:</h4>
                        <FormSelect
                            options={genderOptions}
                            value={{ value: appState.gender, label: appState.gender }}
                            onChange={handleGender}
                        />
                    </div>
                    <div className="question">
                        <h4>Podaj poziom aktywności:</h4>
                        <FormSelect
                            options={activityOptions}
                            value={{ value: appState.activity, label: appState.activity }}
                            onChange={handleActivity}
                        />
                    </div>
                    <h4>sugerowana ilość wody to</h4>
                    <div className="answer">
                        <FormInput
                            id="literInput"
                            value={appState.literAmount}
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
                            value={appState.literAmount}
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
        color: #f5f5f5;
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
        color: #f5f5f5;
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
        border-bottom: 1px solid #f5f5f5;
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
`;

export default Settings;
