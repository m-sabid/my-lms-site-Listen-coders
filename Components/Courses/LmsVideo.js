import styles from "../../styles/courses.module.css";

const LmsVideo = ({ clickedData }) => {
  return (
    <div>
      <iframe
        className={styles.lmsYtPlayer}
        src={clickedData.classLink}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h1 className={styles.vTitle}>
        {clickedData.class_title ? clickedData.class_title : "Welcome Video"}
      </h1>
      <p style={{marginTop:"10px", marginBottom:"10px"}}>{clickedData.aboutClass}</p>
    </div>
  );
};

export default LmsVideo;
