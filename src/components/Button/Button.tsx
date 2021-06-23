import React from 'react';
import styles from './Button.module.css';

interface IButtonProps {
    className: string;
    children: string;
}

export const Button = (props: IButtonProps): JSX.Element => {
    const {className, children} = props;

    return(
        <button className={`${styles.button} ${className}`}>{children}</button>
    )
}
