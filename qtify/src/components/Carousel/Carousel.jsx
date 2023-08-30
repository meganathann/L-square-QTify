import React from "react";
import "swiper/swiper-bundle.css"; // Import correct Swiper styles
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        slidesPerView={8}
        spaceBetween={40}
        allowTouchMove
      >
        {/* Render each album as a SwiperSlide */}
        {data.map((album) => (
          <SwiperSlide key={album?.id}>
            {renderCardComponent(album)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
