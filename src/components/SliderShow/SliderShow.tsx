import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetchArticles, Category } from "../../API";
import { SwiperStyle } from "./SliderShow.styles";
const SliderShow = () => {
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles(Category.Science);
      setArticles(response);
    };
    getArticles();
  }, []);
  return (
    <SwiperStyle>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
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
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="slide-container"
              >
                <img
                  src={article.image}
                  width="380"
                  height="215"
                  alt="article-img"
                />
                <h3>{article.title}</h3>
                <h6>{article.author}</h6>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperStyle>
  );
};

export default SliderShow;
