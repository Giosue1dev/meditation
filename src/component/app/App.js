import React from "react";
import "./App.css";
import PomodoroTimer from '../timer/timer.js';
import Phrase from '../phrase/phrase.js';
import OpenLinks from '../links/links.js'

function App() {
  return (
    <div className="App">
      <h1 className='Title'>Aweken Mind</h1>
      <Phrase />
      <PomodoroTimer />
      <OpenLinks />
    </div>
  );
}

export default App;