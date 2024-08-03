// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/item/:id" element={<DetailPage />} />
            </Routes>
        </Router>
    );
};

export default App;
