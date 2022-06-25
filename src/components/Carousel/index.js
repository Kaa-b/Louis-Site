import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { CategorieImages } from "../../data";
import { useGlobalContext } from "../../context";
// Styles
import { Wrapper, Image } from "./Carousel.styles";

const Carousel = () => {
  const { isSidebarOpen, windowSize } = useGlobalContext();

  if (!isSidebarOpen || windowSize > 600) {
    return (
      <Wrapper>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {CategorieImages.map((image) => {
            const { id, url, description } = image;
            return (
              <SwiperSlide key={id}>
                <Image src={url} alt={description} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Wrapper>
    );
  }
};

export default Carousel;
