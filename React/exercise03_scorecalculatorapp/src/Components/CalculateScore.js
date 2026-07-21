import React from 'react';

function CalculateScore(props) {
    const average = props.total / props.goal;

    const containerStyle = {
        textAlign: 'center',
        margin: '50px auto',
        padding: '20px',
        border: '2px solid #4CAF50',
        borderRadius: '10px',
        width: '400px',
        backgroundColor: '#f9f9f9'
    };

    return (
        <div style={containerStyle}>
            <h2>Student Score Calculator</h2>
            <p><strong>Name:</strong> {props.name}</p>
            <p><strong>School:</strong> {props.school}</p>
            <p><strong>Total Marks:</strong> {props.total}</p>
            <p><strong>Goal:</strong> {props.goal}</p>
            <p><strong>Average Score:</strong> {average.toFixed(2)}</p>
        </div>
    );
}

export default CalculateScore;