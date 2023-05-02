import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const WaterContext = createContext();

export const WaterProvider = ({ children }) => {
    const [literAmount, setLiterAmount] = useState(3000);

    return (
        <WaterContext.Provider
            value={{
                literAmount,
                setLiterAmount
            }}
        >
            {children}
        </WaterContext.Provider>
    );
};

WaterProvider.propTypes = {
    children: PropTypes.any.isRequired
};

export const useWaterContext = () => {
    return useContext(WaterContext);
};
