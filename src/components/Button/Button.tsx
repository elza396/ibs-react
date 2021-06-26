import React from 'react';
import s from './Button.module.css';

interface IButtonProps {
    className: string;
    children: string;
}

export const Button = (props: IButtonProps): JSX.Element => {
    const {className, children} = props;

    return(
        <button className={`${s.button} ${className}`}>{children}</button>
    )
}
