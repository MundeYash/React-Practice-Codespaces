import React, { useState, useRef, useEffect } from "react";
import "./StopwatchStyle.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0); // time in milliseconds
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const startHandler = () => {
    setIsRunning(true);
  };

  const pauseHandler = () => {
    setIsRunning(false);
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const ms = Math.floor((milliseconds % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}:${String(ms).padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h2>Stopwatch</h2>
      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={startHandler} disabled={isRunning}>
          Start
        </button>
        <button onClick={pauseHandler} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
