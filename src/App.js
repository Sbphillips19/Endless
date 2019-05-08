import React from 'react';
import logo from './assets/logo-endless.svg';
import './App.css';
import TopSection from './TopSection';
import HowItWorks from './HowItWorks';

function App() {
  return (
    <div className="App">
    <div className="topnav">
      <img href="#home" className="title" src={logo} alt="endless" />
    </div>
    <TopSection />
    <HowItWorks />
    </div>
  );
}

export default App;
