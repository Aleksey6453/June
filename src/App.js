import React from 'react';
import Welcome from './welcome'
import Clock from './clock'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">    
        <Welcome streetName="Forester" colorName="Fucking" />
        <Clock />
      </header>
    </div>
  );
}

export default App;
