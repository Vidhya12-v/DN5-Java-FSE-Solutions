import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const posts = data.map(item =>
                    new Post(item.userId, item.id, item.title, item.body)
                );
                this.setState({ posts });
            })
            .catch(error => {
                this.componentDidCatch(error);
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error) {
        alert('Error loading posts: ' + error.message);
    }

    render() {
        return (
            <div style={{ textAlign: 'center', margin: '20px' }}>
                <h1>Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        padding: '15px',
                        margin: '10px auto',
                        width: '80%',
                        backgroundColor: '#f9f9f9'
                    }}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <small>Post ID: {post.id} | User ID: {post.userId}</small>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;