
import React, { useState, useEffect } from 'react';
import '../App.css';

function DisplayTime() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
        const newHours = prevTime.hours + Math.floor(newMinutes / 60);

        return {
          hours: newHours,
          minutes: newMinutes % 60,
          seconds: newSeconds % 60,
        };
      });
    }, 1000); 

    return () => {
      clearInterval(timer); 
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center'}}>
        Time Passed: {time.hours}hrs {time.minutes}mins {time.seconds}secs
      </h1>
    </div>
  );
}

export default DisplayTime;