import { useState } from "react";
import useCountdown from "../../hooks/useCountdown";
import Data from "../../pages/api/data.json";
import styles from "../../styles/courses.module.css";

const ClassesScheduler = () => {
  const [selected, setSelected] = useState();

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <>
      {Data?.map((dt, index) => {
        const { days, hours, minutes, seconds } = useCountdown(dt.uploadTime);
        return (
          <>
            <div className={styles.main_collapse}>
              <div className={styles.collapse_items}>
                <div
                  className={styles.collapse_title}
                  onClick={() => toggle(index)}
                >
                  <h4>{dt.nameOfCourse}</h4>{" "}
                  <span>{selected === index ? "-" : "+"}</span>
                </div>
                <div
                  className={
                    selected === index ? styles.show : styles.collapse_content
                  }
                >
                  <div className={styles.class}>
                    <p>{seconds} seconds</p>
                    <p>{hours} hours</p>
                    <p>{minutes} minutes</p>
                    <p>{days} days</p>
                    <button
                      disabled={
                        seconds >= 0 && minutes >= 0 && hours >= 0 && days >= 0
                          ? "true"
                          : ""
                      }
                    >
                      Next
                    </button>
                    <button>Previous</button>
                  </div>
                  <p>{dt.descriptions}</p>
                </div>
              </div>
            </div>
            <hr />
            <hr />
            <hr />
          </>
        );
      })}
    </>
  );
};

export default ClassesScheduler;
