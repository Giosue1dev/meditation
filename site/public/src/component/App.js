import React from "react";
import "./css/App.css";
import PomodoroTimer from './js/timer';
import Phrase from './js/phrase';
import OpenLinks from './js/links'

function App() {
  return (
    <div className="App">
      <h1 className='Title'>This is a meditation site</h1>
      <Phrase />
      <PomodoroTimer />
      <OpenLinks />
    </div>
  );
}

export default App;