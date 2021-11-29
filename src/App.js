import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home.Container';
import AboutUs from './components/pages/AboutUs.Container';
import ContactUs from './components/pages/ContactUs.Container';
import ProjectList from './components/pages/ProjectList.Container';
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
            <Route exact path="/ProjectList" element={<ProjectList />} />
          </Routes>
        </div>
      </Router>
    </ConfettiState>
  );
};

export default App;
