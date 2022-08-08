import React, { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0)

    function Inc() {
        setCounter(counter + 1)
    }

    function Dec() {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={Inc}>Inc</button>
            <button onClick={Dec}>Dec</button>
        </div>
    );
};

export default Counter;