import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const FormSelect = ({ value, options, placeholder, onChange }) => {
    return (
        <div className="select-container">
            <Select
                myFontSize="16px"
                className="form-select"
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                value={value}
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
