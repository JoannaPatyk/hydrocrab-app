import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AppStateContext = createContext();
const APP_STATE_KEY = 'app_state';

const initialAppState = {
    name: '',
    gender: '',
    activity: '',
    additionalAmount: 0,
    literAmount: 0,
    drunkWaterHeight: 0,
    drunkAmount: 0,
    weight: 0
};

const loadAppStateFromLocalStorage = () => {
    const storedState = localStorage.getItem(APP_STATE_KEY);
    return storedState ? JSON.parse(storedState) : initialAppState;
};

const saveAppStateToLocalStorage = (state) => {
    localStorage.setItem(APP_STATE_KEY, JSON.stringify(state));
};

export const AppStateProvider = ({ children }) => {
    const [appState, setAppState] = useState(loadAppStateFromLocalStorage());

    useEffect(() => {
        saveAppStateToLocalStorage(appState);
    }, [appState]);
    return (
        <AppStateContext.Provider
            value={{
                appState,
                setAppState
            }}
        >
            {children}
        </AppStateContext.Provider>
    );
};

AppStateProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useAppStateContext = () => {
    return useContext(AppStateContext);
};
