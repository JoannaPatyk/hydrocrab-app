import React from 'react';
import PropTypes from 'prop-types';

function FormInput({ id, type, label, value, onChange, placeholder }) {
    return (
        <div className="form-container">
            <label>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                className="form-input"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

FormInput.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default FormInput;
