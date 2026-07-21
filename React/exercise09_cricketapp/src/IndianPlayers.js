import React from 'react';

function IndianPlayers({ flag }) {
    // 3a. Destructuring
    const t20Players = ['Virat Kohli', 'Rohit Sharma', 'KL Rahul'];
    const ranjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Shubman Gill'];

    // 3b. Merge arrays using spread operator
    const mergedPlayers = [...t20Players, ...ranjiTrophyPlayers];

    // Simple if-else using flag
    if (flag) {
        return (
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <h2>Indian Players (T20 Team)</h2>
                <ul>
                    {t20Players.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))}
                </ul>
            </div>
        );
    } else {
        return (
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <h2>Indian Players (Ranji Trophy Team)</h2>
                <ul>
                    {ranjiTrophyPlayers.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default IndianPlayers;