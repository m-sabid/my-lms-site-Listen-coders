import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Image from "next/image";
import homeContent from "../../DataDocuments/homeContent.json";
import styles from "../../styles/Home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";


const Header = () => {
  return (
    <>
      <Container>
        <Swiper
          loop={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {homeContent.map((dt, index) => {
            return (
              <SwiperSlide key={index}>
                <Box sx={{ flexGrow: 1 }} className={styles.headerContainer}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid xs={12} sm={12} md={6} className={styles.headerText}>
                      <h1 className={styles.header_title}>{dt.title}</h1>
                      <p>{dt.description}</p>
                    </Grid>
                    <Grid xs={12} sm={12} md={6}>
                      <Image
                        className={styles.header_image}
                        src={dt.titleImg}
                        alt=""
                        width={100}
                        height={100}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Header;
