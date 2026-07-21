import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
    const cohorts = [
        { name: 'Java FSE Cohort 1', status: 'ongoing', startDate: '2026-06-01', endDate: '2026-07-15' },
        { name: 'Java FSE Cohort 2', status: 'completed', startDate: '2026-04-01', endDate: '2026-05-15' },
        { name: 'Java FSE Cohort 3', status: 'ongoing', startDate: '2026-07-01', endDate: '2026-08-15' },
        { name: 'Java FSE Cohort 4', status: 'completed', startDate: '2026-03-01', endDate: '2026-04-15' },
        { name: 'Java FSE Cohort 5', status: 'ongoing', startDate: '2026-06-15', endDate: '2026-07-30' },
    ];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Cohort Dashboard</h1>
            {cohorts.map((cohort, index) => (
                <CohortDetails
                    key={index}
                    name={cohort.name}
                    status={cohort.status}
                    startDate={cohort.startDate}
                    endDate={cohort.endDate}
                />
            ))}
        </div>
    );
}

export default App;