import React from 'react';
import HomePage from './pages/HomePage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<HomePage />} ></Route>
        <Route path="/admin"  element={<Admin />} ></Route>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
