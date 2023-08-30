import React from "react";
import "swiper/swiper-bundle.css"; // Import correct Swiper styles
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselLeftNavigation from "./CarouselNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselNavigation/CarouselRightNavigation";

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.wrapper}>
      <Swiper
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((ele) => (
          <SwiperSlide key={ele?.id}>{renderCardComponent(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
