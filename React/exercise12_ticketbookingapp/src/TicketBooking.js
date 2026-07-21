import React, { useState } from 'react';

function TicketBooking() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
            <h1>✈️ Flight Ticket Booking</h1>

            {/* Login / Logout Buttons */}
            <div style={{ marginBottom: '20px' }}>
                {!isLoggedIn ? (
                    <button onClick={handleLogin} style={buttonStyle}>Login</button>
                ) : (
                    <button onClick={handleLogout} style={buttonStyle}>Logout</button>
                )}
            </div>

            {/* Flight Details (shown to everyone) */}
            <div style={cardStyle}>
                <h3>Flight Details</h3>
                <p><strong>Flight:</strong> AI-202</p>
                <p><strong>From:</strong> Delhi → Mumbai</p>
                <p><strong>Departure:</strong> 10:00 AM</p>
                <p><strong>Arrival:</strong> 12:30 PM</p>
                <p><strong>Price:</strong> ₹4,500</p>
            </div>

            {/* Conditional Rendering: Booking section */}
            {isLoggedIn ? (
                <div style={{ ...cardStyle, backgroundColor: '#d4edda', borderColor: '#28a745' }}>
                    <h3>✅ Book Your Ticket</h3>
                    <p>You are logged in. You can book this flight.</p>
                    <button style={{ ...buttonStyle, backgroundColor: '#28a745' }}>Book Now</button>
                </div>
            ) : (
                <div style={{ ...cardStyle, backgroundColor: '#f8d7da', borderColor: '#dc3545' }}>
                    <h3>🔒 Please Log In</h3>
                    <p>Login to book this flight.</p>
                </div>
            )}
        </div>
    );
}

// Reusable styles
const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    margin: '5px'
};

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9'
};

export default TicketBooking;