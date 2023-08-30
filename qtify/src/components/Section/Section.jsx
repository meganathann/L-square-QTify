import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "../Section/Section.module.css";
import Carousel from "../Carousel/Carousel";

const Section = ({ title, data, type }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);
  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carouselToggle ? "Show all" : "Collapse"}
        </h4>
      </div>
      {data?.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((song) => (
                <Card key={song?.id} data={song} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              renderCardComponent={(song) => <Card data={song} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
