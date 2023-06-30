import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const FormSelect = ({ value, options, placeholder, onChange }) => {
    const SelectStyles = {
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            padding: '15px',
            color: 'white',
            fontWeight: state.isSelected ? 'bold' : 'normal',
            borderBottom: '1px solid white',
            backgroundColor: '#66a1fb',
            cursor: 'pointer'
        }),
        singleValue: (defaultStyles) => ({
            ...defaultStyles,
            color: '#66a1fb'
        }),
        dropdownIndicator: (defaultStyles) => ({
            ...defaultStyles,
            color: 'black',
            cursor: 'pointer'
        }),
        menuList: (defaultStyles) => ({
            ...defaultStyles,
            padding: 0
        })
    };

    return (
        <div className="select-container">
            <Select
                myFontSize="16px"
                className="form-select"
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                value={value}
                styles={SelectStyles}
            />
        </div>
    );
};

FormSelect.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    value: PropTypes.object
};

export default FormSelect;
