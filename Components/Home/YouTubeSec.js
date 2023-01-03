import styles from "../../styles/Home.module.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";

import YouTubeSubscribe from "./../shared/YouTubeSubscribe";

const YouTubeSec = () => {
  return (
    <>
      <div className={styles.YouTubeSec}>
        <Container>
          <Link href="https://www.youtube.com/listencoders" legacyBehavior>
            <a target="_blank">
              <Box sx={{ flexGrow: 1 }} className={styles.ytInfo}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  <Grid xs={12} sm={12} md={12} className={styles.ytInfoText}>
                    <h1>
                      <span className={styles.ytCount}>YouTube</span> <br />{" "}
                      SUBSCRIBE OUR YOUTUBE
                    </h1>
                  </Grid>
                </Grid>
              </Box>
            </a>
          </Link>

          <Grid container>
            <Grid xs={12} sm={12} md={4}>
              <div className={styles.ytName}>
                <Link
                  href="https://www.youtube.com/listencoders"
                  legacyBehavior
                >
                  <a target="_blank">
                    <Image
                      className={styles.ytLogo}
                      src="/listen_coders_logo.png"
                      alt="logo"
                      width={50}
                      height={50}
                    />
                  </a>
                </Link>
                <Link
                  href="https://www.youtube.com/listencoders"
                  legacyBehavior
                >
                  <a target="_blank">
                    <h1 align="center">
                      LISTEN CODERS <br />
                      <YouTubeSubscribe
                        channelid={process.env.NEXT_PUBLIC_CID}
                        layout={"default"}
                        count={"default"}
                      />
                    </h1>
                  </a>
                </Link>
              </div>
            </Grid>

            <Grid xs={12} sm={12} md={8}>
              <div className={styles.ytDescription}>
                <p>
                  <span style={{ fontSize: "3rem" }}>স</span>হজ সরল বাংলা ভাষায়
                  HTML, CSS, JavaScript, Bootstarap, JavaScript-Framework, CSS
                  Framework এর একটি Channel হল Listen Coders.😍 Coders দের
                  ভালোবাসা ও দোয়া সাথে থাকলে আমাদের উদ্দেশ্য হল Quality Content
                  Provide করা। যা সহজ সরল বাংলা ভাষায়। আমাদের জন্য আপনার কোনো
                  পরামর্শ বা উপদেশ থাকলে তা করতে Visit:{" "}
                  <Link href="https://listencoders.com/contract">
                    {" "}
                    listencoders.com/contract{" "}
                  </Link>{" "}
                  👩🏿‍💻
                </p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default YouTubeSec;
