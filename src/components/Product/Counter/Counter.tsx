import React from 'react';
import s from './Counter.module.css';

export const Counter = () => {
    return(
        <div className={s.counter}>
            <button className={`${s.button} ${s.remove}`}/>
            <p className={s.number}>1</p>
            <button className={`${s.button} ${s.add}`}/>
        </div>
    )
}
