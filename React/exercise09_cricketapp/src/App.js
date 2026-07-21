import React from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
    const flag = true;

    return (
        <div className="App">
            <h1>Cricket App</h1>
            <ListofPlayers />
            <hr />
            <IndianPlayers flag={flag} />
        </div>
    );
}

export default App;