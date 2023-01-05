import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import { AiFillGithub } from "react-icons/ai";
import styles from "../../styles/courses.module.css";

const GithubResources = ({ githubData }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        {githubData.map((dt) => {
          return (
            <>
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.rc_ss_top}>
                  <h1 className={styles.rc_web_title}>
                    <AiFillGithub />
                  </h1>
                  <small>GitHub</small>
                </div>
                <div className={styles.rc_ss_btm}>
                  <strong>{dt.resourceTitle}</strong>
                  <p>{dt.resourceDescriptions}</p>
                  <a href={dt.rcLinks} target='_blank' className={styles.rs_link}>Visit</a>
                </div>
              </SwiperSlide>
            </>
          );
        })}
        <h2>GitHub</h2>
      </Swiper>
    </>
  );
};

export default GithubResources;
