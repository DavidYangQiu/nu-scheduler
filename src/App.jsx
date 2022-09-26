import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Display Current Time 
const App = () => {
  const today = new Date();
  const day = today.toLocaleString([], {weekday: 'long'});
  const date = today.toLocaleDateString([], {dateStyle: 'long'})

  return (
    <div>
      <h1>Sample React code</h1>
      Dispaly Current Time
      <p>Today is {day}, {date}.</p>
    </div>
  );
};

export default App;


