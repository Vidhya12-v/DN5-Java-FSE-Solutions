import React from 'react';

function BlogDetails() {
    const blogs = [
        { id: 1, title: 'React Basics', author: 'John Doe' },
        { id: 2, title: 'Spring Boot Tutorial', author: 'Jane Smith' },
        { id: 3, title: 'Microservices 101', author: 'Sam Wilson' }
    ];

    return (
        <div style={cardStyle}>
            <h3>📝 Blog Details</h3>
            {blogs.map(blog => (
                <div key={blog.id} style={itemStyle}>
                    <strong>{blog.title}</strong> by {blog.author}
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
    backgroundColor: '#e8f4fd',
    textAlign: 'center'
};

const itemStyle = {
    padding: '8px',
    borderBottom: '1px solid #eee'
};

export default BlogDetails;