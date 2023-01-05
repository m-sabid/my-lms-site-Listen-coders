import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import styles from "../../styles/courses.module.css";

const YtResources = ({ youtubeData }) => {
  console.log("youtubeData", youtubeData);
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        {youtubeData.map((dt) => {
          return (
            <>
              <SwiperSlide className={styles.swiper_slide}>
                <div className={styles.rc_ss_top}>
                  <iframe
                    className={styles.rc_ss_vid}
                    src={dt.rcLinks}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className={styles.rc_ss_btm}>
                  <strong>{dt.resourceTitle}</strong>
                  <p>{dt.resourceDescriptions}</p>
                </div>
              </SwiperSlide>
            </>
          );
        })}
        {/* <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 9</SwiperSlide> */}
        <h2>YOUTUBE</h2>
      </Swiper>
    </>
  );
};

export default YtResources;
