import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Description from './pages/Description';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
    </Router>
  );
}

export default App;
