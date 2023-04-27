import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const FormSelect = ({ value, options, text, placeholder, onChange }) => {
    return (
        <div className="select-container">
            <h4>{text}</h4>
            <Select myFontSize="16px" onChange={onChange} options={options} placeholder={placeholder} value={value} />
        </div>
    );
};

FormSelect.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.array,
    text: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.object
};

export default FormSelect;
