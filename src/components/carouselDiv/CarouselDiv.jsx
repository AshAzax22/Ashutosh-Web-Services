import styles from "./carouselDiv.module.css";
import arrowStraight from "../../assets/images/arrowStraight.svg";

const CarouselDiv = ({ pic, details }) => {
  return (
    <div className={styles.carouselItemContainer}>
      <img
        src={pic}
        alt={"project picture"}
        className={styles.projectPicture}
      />
      <div className={styles.carouselItemContent}>
        <div className={styles.carouselItemDetails}>
          <p className={styles.title}>{details.title}</p>
          <p className={styles.description}>{details.description}</p>
          <p className={styles.time}>{details.Time}</p>
          <p className={styles.client}>{details.Client}</p>
        </div>
        <button className={styles.exploreButton}>
          Explore Design <img src={arrowStraight} alt="arrow" />{" "}
        </button>
      </div>
    </div>
  );
};

export default CarouselDiv;
