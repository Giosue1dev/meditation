import React from "react";
import "./App.css";
import PomodoroTimer from './timer/timer';
import Phrase from './phrase/phrase';
import OpenLinks from './links/links'

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