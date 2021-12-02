import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
import EventSlide from "./EventSlide";

// install Swiper modules
SwiperCore.use([Navigation]);

export default function EventsSilder() {
  return (
    <Swiper
      allowTouchMove={false}
      slidesPerView={1}
      // loop={true}
      navigation={{ nextEl: "#swiper-next", prevEl: "#swiper-prev" }}
      className="mySwiper"
    >
      <SwiperSlide>
        <EventSlide />
      </SwiperSlide>
    </Swiper>
  );
}
