import React, { useState } from 'react';

function CurrencyConverter() {
    const [rupees, setRupees] = useState('');
    const [euro, setEuro] = useState('');

    const handleSubmit = () => {
        const value = parseFloat(rupees);
        if (!isNaN(value)) {
            setEuro((value / 85).toFixed(2)); // 1 Euro = 85 INR
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h3>Currency Converter</h3>
            <input
                type="number"
                placeholder="Enter Rupees"
                value={rupees}
                onChange={(e) => setRupees(e.target.value)}
                style={{ padding: '5px', marginRight: '10px' }}
            />
            <button onClick={handleSubmit}>Convert to Euro</button>
            <p>Euro: {euro}</p>
        </div>
    );
}

export default CurrencyConverter;