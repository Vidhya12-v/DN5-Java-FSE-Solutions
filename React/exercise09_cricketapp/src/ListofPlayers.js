import React from 'react';

function ListofPlayers() {
    // 1. Array with 11 players using map
    const players = [
        { name: 'Virat Kohli', score: 85 },
        { name: 'Rohit Sharma', score: 45 },
        { name: 'MS Dhoni', score: 65 },
        { name: 'Sachin Tendulkar', score: 95 },
        { name: 'Rahul Dravid', score: 70 },
        { name: 'Sourav Ganguly', score: 55 },
        { name: 'Yuvraj Singh', score: 40 },
        { name: 'Harbhajan Singh', score: 30 },
        { name: 'Jasprit Bumrah', score: 20 },
        { name: 'Ravindra Jadeja', score: 80 },
        { name: 'KL Rahul', score: 60 }
    ];

    // 2. Filter players with scores below 70 using arrow function
    const filteredPlayers = players.filter(player => player.score < 70);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>List of Players</h2>
            <h3>All Players</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player.name} - Score: {player.score}</li>
                ))}
            </ul>

            <h3>Players with Score Below 70</h3>
            <ul>
                {filteredPlayers.map((player, index) => (
                    <li key={index}>{player.name} - Score: {player.score}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;