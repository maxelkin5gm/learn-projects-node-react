import React from 'react';
import {counterState} from "../store/counterState";
import {observer} from "mobx-react-lite";


const Counter = observer(() => {
    return (
        <div>
            <h1>{counterState.count.count1.count2.count3.count4}</h1>
            <button onClick={() => counterState.inc()}>+</button>
            <button onClick={() => counterState.dec()}>-</button>

            <h1>Double count: {counterState.doubleCount}</h1>
        </div>
    );
})

export default Counter;