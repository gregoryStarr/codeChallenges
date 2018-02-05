import React from 'react';
const Input = (props) => (
    <fieldset>
        { props.label && <span className="input-label">{props.label}</span>}
        <input {...props} />
    </fieldset>
)

export default Input;