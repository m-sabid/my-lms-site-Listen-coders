import styles from "../../styles/courses.module.css"

const LmsVideo = ({clickedData}) => {
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
    </div>
  );
};

export default LmsVideo;
