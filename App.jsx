import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>My Landing Page</h1>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header className="hero">
        <h2>Welcome to Our Website</h2>
        <p>Your journey to greatness starts here!</p>
        <button>Get Started</button>
      </header>
      <section className="features">
        <h3>Features</h3>
        <div className="feature-item">Feature 1</div>
        <div className="feature-item">Feature 2</div>
        <div className="feature-item">Feature 3</div>
      </section>
      <footer className="footer">
        <p>&copy; 2026 My Website</p>
      </footer>
    </div>
  );
}

export default App;
