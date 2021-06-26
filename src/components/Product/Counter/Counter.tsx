import React, {useState} from 'react';
import s from './Counter.module.css';

export const Counter = () => {
    const [count, setCount] = useState(1);

    const handleClickIncrease = () => {
        setCount(count + 1);
    }
    const handleClickDecrease = () => {
        if (count === 1) {
            return
        }
        setCount(count - 1);
    }

    return(
        <div className={s.counter}>
            <button onClick={handleClickDecrease} className={`${s.button} ${s.remove}`}/>
            <p className={s.number}>{count}</p>
            <button onClick={handleClickIncrease} className={`${s.button} ${s.add}`}/>
        </div>
    )
}
