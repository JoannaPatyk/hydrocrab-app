import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FormSelect from '../components/FormSelect';
import FormInput from '../components/FormInput';
import { AiOutlineLeft } from 'react-icons/ai';
import { useAppStateContext } from '../context/AppStateContext';
import genderOptions from '../utils/gender';
import activityOptions from '../utils/activity';
import additionalAmount from '../utils/additionalAmount';
import drop from '../assets/images/water-drop.png';
import Wrapper from '../assets/wrappers/Settings';

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
                    <h3>Oblicz ile wody powinieneś/aś wypić?</h3>
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
                            <FormSelect
                                options={genderOptions}
                                value={{ value: appState.gender, label: appState.gender }}
                                onChange={handleGender}
                            />
                            <h3>- podaj swoją płeć</h3>
                        </div>
                        <div className="question">
                            <FormSelect
                                options={activityOptions}
                                value={{ value: appState.activity, label: appState.activity }}
                                onChange={handleActivity}
                            />
                            <h3>- podaj poziom aktywności</h3>
                        </div>
                        <div className="question">
                            <FormSelect
                                options={additionalAmount}
                                value={{ value: appState.additionalAmount, label: appState.additionalAmount }}
                                onChange={handleAdditional}
                            />
                            <h3>- dodać więcej ml wody?</h3>
                        </div>
                    </div>
                    <h3>sugerowana ilość wody do wypicia to:</h3>
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
            <img src={drop} alt="drop" className="drop v0" />
            <img src={drop} alt="drop" className="drop v1" />
            <img src={drop} alt="drop" className="drop v2" />
            <img src={drop} alt="drop" className="drop v3" />
        </Wrapper>
    );
}

export default Settings;
