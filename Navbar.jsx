import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {['Home', 'About', 'Projects', 'Contact'].map(link => (
          <li key={link}><a href={`#${link.toLowerCase()}`}>{link}</a></li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
