import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AppStateContext = createContext();

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

export const AppStateProvider = ({ children }) => {
    const [appState, setAppState] = useState(JSON.parse(localStorage.getItem('app_state')) || initialAppState);

    useEffect(() => {
        localStorage.setItem('app_state', JSON.stringify(appState));
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
