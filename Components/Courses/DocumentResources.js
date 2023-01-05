import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import styles from "../../styles/courses.module.css";

const DocumentResources = ({ websiteData }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        {websiteData.map((dt) => {
          return (
            <>
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.rc_ss_top}>
                  <h1 className={styles.rc_web_title}>
                    {dt.rcLinks.slice(8, 9)}
                  </h1>
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
        <h2>WEB SITES</h2>
      </Swiper>
    </>
  );
};

export default DocumentResources;
