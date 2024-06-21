import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container${darkMode ? ' bg-dark text-white' : ''}`}>
      <header className="d-flex justify-content-between align-items-center py-3">
        <h1>Blog Posts</h1>
        <div>
          <button className="btn btn-secondary me-2" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <Link className="btn btn-primary" to="/">Back</Link>
        </div>
      </header>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{post.username}</h6>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-5">
{/*         <p>Developer's Portfolio: <a href="https://yourportfolio.com">Your Portfolio</a></p>
 */}      </footer>
    </div>
  );
};

export default PostsPage;
