import React from 'react';
import styles from './Counter.module.css';

export class Counter extends React.Component {
    render() {
        return(
            <div className={styles.counter}>
                <button className={`${styles.button} ${styles.remove}`}/>
                <p className={styles.number}>1</p>
                <button className={`${styles.button} ${styles.add}`}/>
            </div>
        )
    }
}
