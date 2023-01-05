import Link from "next/link";
import { useState } from "react";
import useCountdown from "../../hooks/useCountdown";
import Data from "../../pages/api/data.json";
import styles from "../../styles/courses.module.css";

const ClassesScheduler = ({ getVideoChange }) => {
  const [selected, setSelected] = useState(0);

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
                  <p style={{ fontSize: "2rem" }}>
                    {selected === index ? "-" : "+"}
                  </p>
                </div>
                <div
                  className={
                    selected === index ? styles.show : styles.collapse_content
                  }
                >
                  {dt.classes?.map((cls, index) => {
                    return (
                      <>
                        <button
                          className={styles.class_title}
                          onClick={() => getVideoChange(cls)}
                        >
                          {cls.class_title}
                        </button>
                      </>
                    );
                  })}

                  {days && hours && minutes && seconds > 0 ? (
                    <div className={styles.lms_classes}>
                      <p>
                        <span> {days <= 9 ? "0" + days : days} </span> days
                      </p>
                      <p>
                        <span> {hours <= 9 ? "0" + hours : hours} </span> hours
                      </p>
                      <p>
                        <span> {minutes <= 9 ? "0" + minutes : minutes} </span>{" "}
                        minutes
                      </p>
                      <p>
                        <span> {seconds <= 9 ? "0" + seconds : seconds} </span>{" "}
                        seconds
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ClassesScheduler;
