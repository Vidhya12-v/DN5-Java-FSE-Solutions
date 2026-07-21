import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function EventExamples() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
        console.log('Hello - static message');
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    const sayWelcome = (message) => {
        alert(message);
    };

    const handleClick = () => {
        alert('I was clicked');
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h2>Event Examples</h2>

            <div style={{ margin: '20px' }}>
                <h3>Counter</h3>
                <p>Count: {counter}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>

            <div style={{ margin: '20px' }}>
                <button onClick={() => sayWelcome('Welcome!')}>
                    Say Welcome
                </button>
            </div>

            <div style={{ margin: '20px' }}>
                <button onClick={handleClick}>Click Me</button>
            </div>

            <CurrencyConverter />
        </div>
    );
}

export default EventExamples;