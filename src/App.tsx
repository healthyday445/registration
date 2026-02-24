import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThankYou from './pages/ThankYou';
import FreeProgrammes from './pages/FreeProgrammes';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FreeProgrammes />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/free-programmes" element={<FreeProgrammes />} />
        <Route path="/FreeProgrammes" element={<FreeProgrammes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
