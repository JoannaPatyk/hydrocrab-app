import React from 'react';
import PropTypes from 'prop-types';

function FormInput({ id, type, name, value, text, onChange, placeholder }) {
    return (
        <div className="form-container">
            <input
                id={id}
                type={type}
                value={value}
                className="form-input"
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />
            <h4>{text}</h4>
        </div>
    );
}

FormInput.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    name: PropTypes.string,
    text: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
};

export default FormInput;
