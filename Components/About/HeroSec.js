import Image from "next/image";
import styles from "../../styles/about.module.css";

const HeroSec = () => {
  return (
    <>
      <div className={styles.hero_image_one}>
        <Image
          src={"/listen_coders_logo.png"}
          alt="lc logo"
          fill
          className={styles.img}
        />
      </div>
      <h1>About us</h1>
      <p className={styles.about_dis}>
        Welcome to our 'Listen Coders' Learning Management System (LMS) website!
        We are a team of dedicated educators and technologists who are committed
        to helping individuals and organizations enhance their knowledge and
        skills through effective online learning. <br /> <br />
        Our LMS platform offers a wide range of features and tools to support
        the delivery of high-quality online courses and learning experiences.
        With our platform, you can create and manage your own courses, assign
        and grade assignments, track student progress, and engage with your
        learners in real-time through forums and other interactive features.{" "}
        <br /> <br />
        We understand that every learner has unique needs and preferences, which
        is why we offer a variety of customization options to meet the specific
        requirements of your courses and learners. Our platform is flexible and
        scalable, so you can easily adapt it to fit your specific needs.
        <br /> <br />
        We are constantly striving to improve our platform and the learning
        experience for our users. We stay up-to-date on the latest trends and
        best practices in online education, and we work closely with our users
        to ensure that we are meeting their needs and exceeding their
        expectations.
        <br /> <br />
        We are proud of the positive impact that our platform has had on the
        lives of learners around the world, and we look forward to supporting
        you on your learning journey. Thank you for choosing our LMS website!{" "}
        <br /> <br />
      </p>
    </>
  );
};

export default HeroSec;
