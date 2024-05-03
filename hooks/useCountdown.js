import { useState, useEffect } from "react";

export default function useCountdown(endTime) {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const countTime = new Date(endTime);
      const currentTime = new Date();

      const diffInSec = Math.max((countTime - currentTime) / 1000, 0); // Ensure the difference is non-negative

      if (diffInSec >= 0) {
        setDays(Math.floor(diffInSec / (60 * 60 * 24)));
        setHours(Math.floor((diffInSec % (60 * 60 * 24)) / (60 * 60)));
        setMinutes(Math.floor((diffInSec % (60 * 60)) / 60));
        setSeconds(Math.floor(diffInSec % 60));
      } else {
        // If countdown is negative, set all values to 0
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        clearInterval(intervalId); // Stop the interval
      }
    }, 1000);

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [endTime]);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
}
