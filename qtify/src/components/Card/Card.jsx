import React from "react";
import styles from "./Card.module.css";
const Card = ({ likes, title, image }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardContainer}>
        <div className={styles.cardBackground}></div>
        <div className={styles.followsContainer}>
          <div className={styles.followsText}>{likes} Follows</div>
        </div>
        <img
          className={styles.cardImage}
          src={image}
          alt="song"
          loading="lazy"
        />
      </div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default Card;
