import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import FormSelect from '../components/FormSelect';
import FormInput from '../components/FormInput';
import { AiOutlineLeft } from 'react-icons/ai';
import { useAppStateContext } from '../context/AppStateContext';
import genderOptions from '../utils/gender';
import activityOptions from '../utils/activity';
import additionalWater from '../utils/additionalAmount';
import Wrapper from '../assets/wrappers/Settings';
import background from '../assets/images/glass.png';

function Settings() {
    const { appState, setAppState } = useAppStateContext();
    const { name, weight, gender, activity, additionalAmount, literAmount } = appState;

    const handleLiterAmountChange = useCallback(() => {
        let baseAmount = weight * 30;

        if (gender === 'kobieta') {
            baseAmount += 200;
        } else if (gender === 'mężczyzna') {
            baseAmount += 400;
        }

        if (activity === 'mała') {
            baseAmount += 200;
        } else if (activity === 'średnia') {
            baseAmount += 400;
        } else if (activity === 'duża') {
            baseAmount += 800;
        }

        baseAmount = baseAmount + parseInt(additionalAmount);

        setAppState({ ...appState, literAmount: baseAmount });
        // eslint-disable-next-line
    }, [weight, gender, activity, additionalAmount, setAppState]);

    useEffect(() => {
        handleLiterAmountChange();
    }, [handleLiterAmountChange]);

    const handleNameChange = (event) => {
        setAppState({ ...appState, name: event.target.value });
    };

    const handleWeightChange = (event) => {
        setAppState({ ...appState, weight: event.target.value });
    };

    const handleGender = (selected) => {
        setAppState({ ...appState, gender: selected.value });
    };

    const handleActivity = (selected) => {
        setAppState({ ...appState, activity: selected.value });
    };

    const handleAdditional = (selected) => {
        setAppState({ ...appState, additionalAmount: selected.value });
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
                        <FormInput id="nameInput" value={name} type="text" onChange={handleNameChange} />
                    </div>
                    <h3>Oblicz ile wody powinieneś/aś wypić?</h3>
                    <div className="weight">
                        <h3>Podaj swoją wagę:</h3>
                        <FormInput id="weightInput" value={weight} type="number" onChange={handleWeightChange} />
                        <h3>kg</h3>
                    </div>
                    <div className="questions-container">
                        <div className="question">
                            <FormSelect
                                options={genderOptions}
                                value={{ value: gender, label: gender }}
                                onChange={handleGender}
                            />
                            <h3>- podaj swoją płeć</h3>
                        </div>
                        <div className="question">
                            <FormSelect
                                options={activityOptions}
                                value={{ value: activity, label: activity }}
                                onChange={handleActivity}
                            />
                            <h3>- podaj poziom aktywności</h3>
                        </div>
                        <div className="question">
                            <FormSelect
                                options={additionalWater}
                                value={{ value: additionalAmount, label: additionalAmount }}
                                onChange={handleAdditional}
                            />
                            <h3>- dodać więcej ml wody?</h3>
                        </div>
                    </div>
                    <h3>sugerowana ilość wody do wypicia to:</h3>
                    <div className="answer">
                        <FormInput
                            id="literInput"
                            value={literAmount}
                            type="number"
                            disabled
                            onChange={handleLiterAmountChange}
                        />
                        <h3>ml</h3>
                    </div>
                </div>
                <img className="image" src={background} alt="water" />
            </div>
        </Wrapper>
    );
}

export default Settings;
