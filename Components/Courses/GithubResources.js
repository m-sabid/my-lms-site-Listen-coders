import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper";

import styles from "../../styles/courses.module.css";


const GithubResources = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiper_slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 8</SwiperSlide>
        <SwiperSlide className={styles.swiper_slide}>Slide 9</SwiperSlide>
        <h2>GitHub</h2>
      </Swiper>
    </>
  );
};

export default GithubResources;