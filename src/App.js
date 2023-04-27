import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Facts from './pages/Facts';
import About from './pages/About';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
                <Route path="facts" element={<Facts />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
