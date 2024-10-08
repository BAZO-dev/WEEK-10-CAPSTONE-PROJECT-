import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import ProfileData from './components/ProfileData';
import Repositories from './components/Repositories';
import { ThemeProvider } from './context/ThemeContext';
import './styles/App.css';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/profile/:username" element={<ProfileData />} />
        <Route path="/repositories/:username" element={<Repositories />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
