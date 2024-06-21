import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VideoBackground from "../assets/video/video.mp4";

const LandingPage = () => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !title || !content) {
      setError("Please complete the form");
      return;
    }

    const newPost = { username, title, content };
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    navigate("/posts");
  };

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap');

        :root {
          --primary-color: #007bff;
          --primary-color-light: rgba(0, 123, 255, 0.);
          --primary-color-dark: #0056b3;
          --secondary-color: #757474;
          --background-color: rgba(249, 249, 249, 0.);
          --input-background-color: rgba(255, 255, 255, 0.2);
          --text-color: #333;
          --danger-color: #dc3545;
        }

        body, html {
          height: 100%;
          margin: 0;
          font-family: 'Google Sans', sans-serif;
        }

        .custom-navbar {
          background: rgba(255, 255, 255, 0.0); /* Make the navbar semi-transparent */
          border-bottom: 1px solid rgba(221, 221, 221, 0.1); /* Optional: border line for consistency */
          border: none;
        }

        .navbar .container {
          max-width: 2500px; /* Adjust the max-width to match the content width */
          gap: 20px;
        }

        .nav-buttons {
          display: flex;
          gap: 20px;
          margin-left: auto; /* Pushes the buttons to the far right */
        }

        .video-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1; /* Ensure the video is behind other content */
        }

        .main-container {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: calc(95vh - 56px); /* Adjust height to account for navbar */
          background: transparent; /* Ensure the main-container is transparent */
        }

        .container {
          max-width: 600px;
          padding: 20px;
          border: none;
          border-radius: 8px;
          background-color: var(--background-color); /* Use global background color */
        }

        h1, .form-label, .btn{
          text-align: center;
          margin-bottom: 20px;
          color: var(--secondary-color); /* Use global secondary color */
          font-size: 3rem;
          animation: rainbow-text 5s infinite;
          background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
          background-size: 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes rainbow-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .form-label {
          font-weight: bold;
          color: var(--secondary-color); /* Used global secondary color */
        }

        .form-control {
          margin-bottom: 10px;
          font-weight: bold;
          color: var(--text-color); /* Use global text color */
          background-color: var(--input-background-color); /* Used global input background color */
        }

        .btn {
          display: block;
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 4px;
          background-color: var(--primary-color-light); /* Used global primary light color */
          color: white;
          font-size: 25px;
          cursor: pointer;
        }

        .btn:hover {
          background-color: var(--primary-color-dark); /* Used global primary dark color */
        }

        .text-danger {
          color: var(--secondary-color); /* Use global secondary color */
        }
      `}</style>

      <video autoPlay loop muted className="video-bg">
        <source src={VideoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="main-container">
        <div className="container">
          <h1>Create your Blog Post</h1>
          {error && <p className="text-danger">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                <h3>Username</h3>
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                <h3>Title</h3>
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                <h3>Content</h3>
              </label>
              <textarea
                className="form-control"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
