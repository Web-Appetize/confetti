import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home.Container';
import Profile from './components/user/Profile';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs.Container';

import NotFound from './components/pages/NotFound';

import ConfettiState from './context/confetti_context/actions';

const App = () => {
  return (
    <ConfettiState>
      <Router>
        <div className="App">
          <Navbar title="Confetti" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/ContactUs" element={<ContactUs />} />
            <Route exact path="/Profile/:username" element={<Profile />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ConfettiState>
  );
};

export default App;
