import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PostsPage from './components/PostsPage';
import Footer from './components/Footer';
import './assets/App.css'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
