import Countdown from "react-countdown";
import styles from "./Countdown.module.scss";
import React from "react";

const MyCountdown = ({ date, completionText }) => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <>
          <div className={styles["countdown-container"]}>
            <div>
              <h5>Days</h5>
              <h6>{days}</h6>
            </div>
            <div>
              <h5>Hours</h5>
              <h6>{hours}</h6>
            </div>
            <div>
              <h5>Minutes</h5>
              <h6>{minutes}</h6>
            </div>
            <div>
              <h5>Seconds</h5>
              <h6>{seconds}</h6>
            </div>
          </div>
        </>
      );
    }
  };
  const Completionist = () => (
    <div className={styles["countdown-container"]}>{completionText}</div>
  );
  const countdown = <Countdown renderer={renderer} date={date} />;
  return countdown;
};

export default MyCountdown;

// Renderer callback with condition
