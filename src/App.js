import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Facts from './pages/Facts';
import About from './pages/About';

function App() {
    const [liter, setLiter] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard liter={liter} />} />
                <Route path="settings" element={<Settings liter={liter} setLiter={setLiter} />} />
                <Route path="facts" element={<Facts />} />
                <Route path="about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
