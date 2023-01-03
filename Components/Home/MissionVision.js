import styles from "../../styles/Home.module.css";
//slider miu
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
// slider mui

import Image from "next/image";

const technology = [
  {
    id: 1,
    name: "image",
    title: "react-logo",
    link: "https://i.ibb.co/1JpLYD0/React-icon-svg.webp",
  },
  {
    id: 2,
    name: "image",
    title: "tailwind-logo",
    link: "https://i.ibb.co/MgdWHyV/Tailwind-CSS-Logo-svg.png",
  },
  {
    id: 3,
    name: "image",
    title: "css-logo",
    link: "https://i.ibb.co/swKB8Cr/css-318-674222.webp",
  },
  {
    id: 4,
    name: "image",
    title: "bootstrap-logo",
    link: "https://i.ibb.co/31t7Hpg/bootstrap-logo.webp",
  },
  {
    id: 5,
    name: "image",
    title: "html-logo",
    link: "https://i.ibb.co/FV0wZF7/html-5-318-674234.webp",
  },
  {
    id: 6,
    name: "image",
    title: "next-55-logo",
    link: "https://i.ibb.co/PgzWDK0/800px-Nextjs-logo-svg.png",
  },
];

export default function MissionVision() {
  return (
    <>
      <h1 style={{margin:'0 0 0 50px'}}>Missions & Visions</h1>
      <div className={styles.mab_main}>
        <Swiper
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          modules={[Autoplay]}
          // spaceBetween={50}
          pagination={{ clickable: true }}
          breakpoints={{
            230: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 6,
            },
          }}
        >
          {technology.map((dt) => {
            return (
              <>
                <SwiperSlide className={styles.mab_images}>
                  <Image
                    alt={dt.title}
                    src={dt.link}
                    width={100}
                    height={100}
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
