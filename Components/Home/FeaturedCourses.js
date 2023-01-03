import { Grid } from "@mui/material";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import CountDown from "./CountDown";

const FeaturedCourses = () => {
  return (
    <>
      <div className={styles.course_main}>
        <Grid
          container
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
          className={`${styles.course_grid_main}`}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <h2>TIME LEFT</h2>
            <hr />
            <br />
            {/* Count down */}
            <CountDown />
            {/* Count down */}
            <button className="enroll_btn" style={{width:'100%'}}>Enroll Now</button>

            <p className={styles.course_content}>
              <span style={{ fontSize: "3rem" }}>ও</span>য়েব ডিজাইন কোর্স
              সম্পূর্ণ বাংলায় 💪। এই কোর্সে আমরা HTML, CSS, JavaScript শিখে কিছু
              টেম্পলেট তৈরি করে তা
            </p>
            <div className={styles.mkt_names_main}>
              <div className={styles.mkt_names}>
                <div>
                  - <p>Themeforest</p>
                </div>
                <div>
                  - <p>CodeCanyon</p>
                </div>
                <div>
                  - <p>TemplateMonster</p>
                </div>
                <div>
                  - <p>Marketplaces</p>
                </div>
              </div>
              <div className={styles.mkt_names}>
                <div>
                  - <p>Mojo Marketplace</p>
                </div>
                <div>
                  - <p>ThemeSnap</p>
                </div>
                <div>
                  - <p>Creative Market</p>
                </div>
                <div>
                  - <p>Codester</p>
                </div>
              </div>
            </div>
            <p>
              এর মত প্লাটফর্ম এ বিক্রি করে কিংবা Freelancing করে আপনি নিজের
              ক্যারিয়ার গঠন করতে ১ ধাপ এগিয়ে যেতে পারেন।
            </p>
            {/* <button className="enroll_btn">Enroll Now</button> */}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className={styles.course_img_sec}
          >
            <Image
              src={"https://i.ibb.co/LdLFkNh/Listen-1.png"}
              alt="co_image"
              className={styles.co_image}
              fill
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default FeaturedCourses;
