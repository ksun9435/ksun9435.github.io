import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <h1>youtube videos </h1>
      <iframe
        width="560" 
        height="315" 
        src='https://www.youtube.com/embed/FpB6TBtm5ZE?si=TGc68pRdzc5TaAQG'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
      />
    </div>
    
  );
}

export default App;

