import React from 'react';
import Couch1x from './assets/photo-couch.jpg';
import Couch2x from './assets/photo-couch_2x.jpg';
import './App.css';

function TopSection() {
  return (
<div className="top">
<img className="couch" src={Couch1x} srcSet={Couch1x + ' 1x,' + Couch2x + ' 2x'} alt="home"/>

<div className="top-text">
            <h4 className="top-small-header">New Games & Accessories</h4>
            <h2 className="top-big-header">Monthly packages.</h2>
            <h2 className="top-big-header">Excitement delivered daily.</h2>
            <p className="top-paragraph">What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month</p>
            <button className="top-button">GET STARTED</button>
        </div>

</div>
  );
}

export default TopSection;
