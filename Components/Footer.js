import { Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";
import {
  FcAbout,
  FcQuestions,
  FcAnswers,
  FcCellPhone,
  FcInspection,
  FcLockLandscape,
} from "react-icons/fc";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { GiRingingBell } from "react-icons/gi";

const Footer = () => {
  return (
    <Container>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <Link href="https://www.youtube.com/listencoders" legacyBehavior>
            <a target="_blank">
              <Image
                src="/listen_coders_logo.png"
                alt="logo"
                width={50}
                height={50}
              />
            </a>
          </Link>
          <Link href="https://www.youtube.com/listencoders" legacyBehavior>
            <a target="_blank">
              <p className={styles.footerName}>
                Listen Coders <GiRingingBell />
              </p>
            </a>
          </Link>
        </div>

        {/*  */}

        <footer className={styles.footerBottom}>
          <Grid container spacing={4} justify="center">
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                color="textPrimary"
                align="center"
                className={styles.footerH3}
              >
                Quick Links
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                className={styles.footerBottomLinks}
              >
                <Link legacyBehavior href="/about">
                  <a className={styles.linkIcons}>
                    About Us <FcAbout />
                  </a>
                </Link>
                <br />
                <Link legacyBehavior href="/faq">
                  <a className={styles.linkIcons}>
                    FAQ <FcQuestions />
                  </a>
                </Link>
                <br />
                <Link legacyBehavior href="/contact">
                  <a className={styles.linkIcons}>
                    Contact Us <FcCellPhone />
                  </a>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                color="textPrimary"
                align="center"
                className={styles.footerH3}
              >
                Legal
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                className={styles.footerBottomLinks}
              >
                <Link legacyBehavior href="/terms">
                  <a className={styles.linkIcons}>
                    Terms of Use <FcAnswers />
                  </a>
                </Link>
                <br />
                <Link legacyBehavior href="/privacy">
                  <a className={styles.linkIcons}>
                    Privacy Policy <FcInspection />
                  </a>
                </Link>
                <br />
                <Link legacyBehavior href="/cookies">
                  <a className={styles.linkIcons}>
                    Cookie Policy <FcLockLandscape />
                  </a>
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="h6"
                color="textPrimary"
                align="center"
                className={styles.footerH3}
              >
                Follow Us
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                align="center"
                className={styles.footerBottomLinks}
              >
                <a
                  className={styles.linkIcons}
                  href="https://facebook.com/mywebsite"
                >
                  Facebook <FaFacebookSquare />{" "}
                </a>
                <br />
                <a
                  className={styles.linkIcons}
                  href="https://twitter.com/mywebsite"
                >
                  Twitter <FaTwitterSquare />
                </a>
                <br />
                <a
                  className={styles.linkIcons}
                  href="https://instagram.com/mywebsite"
                >
                  Instagram <FaInstagramSquare />
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center">
            © Copyright {2023} <a href="listencoders.com">Listen Coders</a> .
            All rights reserved.
          </Typography>
        </footer>
        {/*  */}
      </div>
    </Container>
  );
};

export default Footer;
