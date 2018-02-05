import React from 'react';
import "./input.css"
const Input = (props) => (
    <fieldset className="Input-fieldset">
        { props.label && <span className="input-label">{props.label}</span>}
        <input {...props} />
    </fieldset>
)

export default Input;