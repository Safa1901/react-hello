import React from 'react';
import s from './button.module.scss'

const Button = (props) => (
    <button
        className={s.button}
        onClick={props.onPressed}
    >
        {props.name}
    </button>
);

export default Button;