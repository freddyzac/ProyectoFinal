import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import CatalogAndABC from './components/CatalogAndABC';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/catalog" element={<CatalogAndABC />} />
      </Routes>
    </Router>
  );
}

export default App;
