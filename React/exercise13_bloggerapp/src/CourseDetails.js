import React from 'react';

function CourseDetails() {
    const courses = [
        { id: 1, name: 'Java Full Stack', duration: '6 months' },
        { id: 2, name: 'React Developer', duration: '3 months' },
        { id: 3, name: 'Spring Boot Masterclass', duration: '4 months' }
    ];

    return (
        <div style={cardStyle}>
            <h3>🎓 Course Details</h3>
            {courses.map(course => (
                <div key={course.id} style={itemStyle}>
                    <strong>{course.name}</strong> - {course.duration}
                </div>
            ))}
        </div>
    );
}

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '10px auto',
    maxWidth: '400px',
    backgroundColor: '#fef9e7',
    textAlign: 'center'
};

const itemStyle = {
    padding: '8px',
    borderBottom: '1px solid #eee'
};

export default CourseDetails;