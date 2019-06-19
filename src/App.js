import React from 'react';
import Welcome from './welcome'
import Clock from './clock'
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <Welcome streetName="Forester" colorName="Fucking" />
      <Clock /> 
      <h1>CHAT REACT</h1>
    </div>
  );
}

export default App;
