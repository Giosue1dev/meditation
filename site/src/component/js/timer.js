import React, { useState, useRef, useEffect } from "react";

function PomodoroTimer() {
  const [time, setTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (isRunning && currentTime < time) {
      const timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isRunning, currentTime, time]);

  const startTimer = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCurrentTime(0);
    inputRef.current.value = "";
  };

  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setTime(newValue);
      setCurrentTime(0);
    } else {
      // Nel caso in cui il valore non sia valido, imposta il tempo su 0.
      setTime(0);
    }
  };

  const progressWidth = (1 - currentTime / time) * 100;

  return (
    <div className="PomodoroTimer">
      <input
        type="number"
        placeholder="Set time"
        ref={inputRef}
        onChange={handleChange}
      />
      <div className="Buttons">
        <button className="Button" onClick={startTimer}>Start</button>
        <button className="Button" onClick={stopTimer}>Stop</button>
        <button className="Button" onClick={resetTimer}>Reset</button>
      </div>
      <div className="timer">
        <span className="time-display">{time - currentTime}</span>
        <div className="progress">
          <div
            style={{ width: `${progressWidth}%` }}
            className="progress-bar"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;