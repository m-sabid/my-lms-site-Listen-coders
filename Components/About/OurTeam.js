import Image from "next/image";
import styles from "../../styles/about.module.css";

const OurTeam = () => {
  return (
    <>
      <div className={styles.ourTeam_main}>
        <div className={styles.ourTeam_admin}>
          <Image
            src={"https://i.ibb.co/swKBCHT/image-square.png"}
            alt="m_sabid"
            fill
            className={styles.adminImage}
          />
          <h1>M SABID ~ Founder</h1>
          <p>
            Sabid is a highly skilled web developer and the founder of Listen
            Coders, a Learning Management System (LMS) platform that helps
            individuals and organizations enhance their knowledge and skills
            through online learning. With a strong background in technology and
            education, Sabid is dedicated to using his skills and expertise to
            create a comprehensive and user-friendly LMS platform that meets the
            needs of learners and educators around the world. <br />
            <br />
            As a passionate and innovative leader, Sabid is committed to staying
            up-to-date on the latest trends and best practices in online
            education, and he works closely with his team to continuously
            improve and evolve the Listen Coders platform. Through his hard work
            and dedication, Sabid has helped countless learners achieve their
            learning goals and reach their full potential.
          </p>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
