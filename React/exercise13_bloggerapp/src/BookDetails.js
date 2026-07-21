import React from 'react';

function BookDetails() {
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { id: 3, title: '1984', author: 'George Orwell' }
    ];

    return (
        <div style={cardStyle}>
            <h3>📚 Book Details</h3>
            {books.map(book => (
                <div key={book.id} style={itemStyle}>
                    <strong>{book.title}</strong> by {book.author}
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
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
};

const itemStyle = {
    padding: '8px',
    borderBottom: '1px solid #eee'
};

export default BookDetails;