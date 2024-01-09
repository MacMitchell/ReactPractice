import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChampionPage from './Pages/ChampionPage';
import SelectionPage from './Pages/SelectionPage';
import './assets/ChampionData';
function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={< SelectionPage />} />
                    <Route path='/champion/*' element={<ChampionPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;

