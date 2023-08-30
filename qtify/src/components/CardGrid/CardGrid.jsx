import React from "react";
import Card from "../Card/Card";
import styles from "./CardGrid.module.css"; // You can define your own styles for the grid container

const CardGrid = ({ cards }) => {
  return (
    <div className={styles.gridContainer}>
      {cards.map((card, index) => (
        <Card
          key={index}
          likes={card.likes}
          title={card.title}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default CardGrid;
