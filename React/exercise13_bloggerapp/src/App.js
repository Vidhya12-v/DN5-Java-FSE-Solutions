import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
    const [view, setView] = useState('books'); // 'books', 'blogs', 'courses'

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>📖 Blogger App</h1>

            {/* Navigation Buttons */}
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setView('books')} style={buttonStyle}>Books</button>
                <button onClick={() => setView('blogs')} style={buttonStyle}>Blogs</button>
                <button onClick={() => setView('courses')} style={buttonStyle}>Courses</button>
            </div>

            {/* Conditional Rendering */}
            {view === 'books' && <BookDetails />}
            {view === 'blogs' && <BlogDetails />}
            {view === 'courses' && <CourseDetails />}
        </div>
    );
}

const buttonStyle = {
    padding: '10px 20px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px'
};

export default App;