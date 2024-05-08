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
          <div className={styles.about_container}>
            <h1>Unveiling a Versatile Journey:</h1>
            <p>
              In the fast-paced intersection of technology and education,
              individuals often emerge for their multifaceted expertise and
              unwavering commitment to innovation. My journey epitomizes this
              blend of versatility and passion, as I navigate through academia,
              professional endeavors, and a fervor for knowledge dissemination.
            </p>
            <h2>Academic Pursuits and Practical Proficiency:</h2>
            <p>
              As I approach the culmination of my Bachelor of Business
              Administration (BBA) program, I stand at the juncture of academic
              achievement and real-world application. My dedication to
              excellence is evident in my academic pursuits, complemented by a
              commitment to honing practical skills essential in today's
              competitive landscape.
            </p>
            <h2>Crafting Experiences in Web Development:</h2>
            <p>
              My journey in the tech industry has been marked by a dedication to
              web development, particularly in the realm of frontend design
              utilizing <a href="https://reactjs.org/">React</a>. Through my
              experiences, I've contributed to the success of three companies,
              leveraging my expertise to craft captivating user interfaces and
              seamless digital experiences.
            </p>
            <h2>Thriving in Freelance Endeavors:</h2>
            <p>
              Beyond corporate engagements, I've thrived in the realm of
              freelance development, specializing in projects harnessing the
              power of the{" "}
              <a href="https://www.mongodb.com/mern-stack">MERN stack</a>. My
              portfolio showcases a diverse array of projects, each tailored to
              meet the unique needs of my clients, demonstrating my ability to
              deliver customized solutions effectively.
            </p>
            <h2>Empowering Through Education:</h2>
            <p>
              Under the banner of "Listen Coders," I've embraced the role of an
              educator, sharing insights and knowledge with aspiring developers
              in the online sphere. Through this platform, I've empowered
              students across three batches, equipping them with the skills and
              confidence to embark on their own journeys in programming and web
              development.
            </p>
            <h2>Pushing Boundaries in Innovation:</h2>
            <p>
              Currently immersed in my latest project,{" "}
              <a href="https://angelesit.com/">angelesit.com</a>, I continue to
              push the boundaries of web development, striving to create
              innovative solutions that resonate with modern audiences. With a
              keen eye for detail and an unwavering commitment to excellence, I
              aim to leave an indelible mark on the ever-evolving landscape of
              technology.
            </p>
            <h2>A Vision for the Future:</h2>
            <p>
              In essence, my journey epitomizes the spirit of a new generation
              of technologists, seamlessly integrating academic rigor,
              professional expertise, and a passion for nurturing the next wave
              of talent. As I chart my course in the dynamic realms of web
              development and education, I remain committed to inspiring
              aspiring developers and learners, alike.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
