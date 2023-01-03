import React, { useEffect, useState } from "react";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval;

  const startTimer = () => {
    const countDown = new Date('6/1/2023 18:59:55').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDown - now;

      const day = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const second = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(day);
        setTimerHours(hour);
        setTimerMinutes(minute);
        setTimerSeconds(second);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <>
      <div className="timer">
        <div className="main_clock">
          <div className="clock_int">
            <p style={{marginBottom:"-10px"}}>
              <span>{timerDays < 10 ? "0" + timerDays : timerDays}</span> Days
            </p>
          </div>
          <div className="clock_int">
            <p>
              <span>{timerHours < 10 ? "0" + timerHours : timerHours}</span>{" "}
              Hours
            </p>
          </div>
          <div className="clock_int">
            <p>
              <span>
                {timerMinutes < 10 ? "0" + timerMinutes : timerMinutes}
              </span>{" "}
              Minutes
            </p>
          </div>
          <div className="clock_int">
            <p>
              <span>
                {timerSeconds < 10 ? "0" + timerSeconds : timerSeconds}
              </span>{" "}
              Seconds
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDown;
