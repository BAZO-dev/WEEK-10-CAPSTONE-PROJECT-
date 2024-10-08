import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>GitHub Profile Generator</h1>
      <nav>
        <Link to="/">Search</Link>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </nav>
    </header>
  );
};

export default Header;
