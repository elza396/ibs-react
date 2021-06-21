import React from 'react';
import styles from './Button.module.css';

export class Button extends React.Component {
    render() {
        return(
            <button {...this.props} className={`${styles.button} ${this.props.className}`}>{this.props.children}</button>
        )
    }
}
