import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchArticles } from "../../API";
import ETSidebar from "../ETbar/ETbar";
import { SwiperStyle } from "./SliderShow.styles";
const SliderShow = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("science");
      setArticles(response);
    };
    getArticles();
  }, []);
  return (
    <SwiperStyle>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        grabCursor={true}
        loop
        autoplay
        navigation
        breakpoints={{
          350: {
            width: 350,
            slidesPerView: 1,
          },
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
      >
        {articles.map((article: any, id: any) => {
          return (
            <SwiperSlide key={id}>
              <a href={article.url} target="_blank" rel="noreferrer" key={id}>
                <ETSidebar
                  title={article.title}
                  author={article.author}
                  image={article.image}
                />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperStyle>
  );
};

export default SliderShow;
