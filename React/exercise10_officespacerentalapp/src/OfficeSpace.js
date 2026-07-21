import React from 'react';

function OfficeSpace() {
    // Office object with details
    const office = {
        name: 'Cozy Workspace',
        rent: 55000,
        address: '123 Main Street, Bangalore'
    };

    // List of office spaces
    const officeList = [
        { name: 'Cozy Workspace', rent: 55000, address: '123 Main Street, Bangalore' },
        { name: 'Premium Hub', rent: 75000, address: '456 Park Avenue, Mumbai' },
        { name: 'Budget Space', rent: 35000, address: '789 Lake Road, Chennai' },
        { name: 'Executive Suite', rent: 95000, address: '101 Business Bay, Delhi' }
    ];

    // Inline styles
    const headingStyle = {
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '20px'
    };

    const containerStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '20px'
    };

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        textAlign: 'center'
    };

    return (
        <div>
            <h1 style={headingStyle}>Office Space Rental</h1>
            {/* Display single office */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2>Featured Office</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={cardStyle}>
                        <h3>{office.name}</h3>
                        <p>
                            <strong>Rent:</strong>{' '}
                            <span style={{ color: office.rent < 60000 ? 'red' : 'green', fontWeight: 'bold' }}>
                                ₹{office.rent}
                            </span>
                        </p>
                        <p><strong>Address:</strong> {office.address}</p>
                    </div>
                </div>
            </div>

            {/* Display list of offices */}
            <h2 style={headingStyle}>All Office Spaces</h2>
            <div style={containerStyle}>
                {officeList.map((item, index) => {
                    // Conditional color: red if rent < 60000, green if >= 60000
                    const rentColor = item.rent < 60000 ? 'red' : 'green';

                    return (
                        <div key={index} style={cardStyle}>
                            <h3>{item.name}</h3>
                            <p style={{ color: rentColor, fontWeight: 'bold' }}>
                                Rent: ₹{item.rent}
                            </p>
                            <p><strong>Address:</strong> {item.address}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OfficeSpace;