import styled from "styled-components";

export const SwiperStyle = styled.div`
  padding: 1rem;
  margin-top: 1rem;
  .swiper-button-next,
  .swiper-button-prev {
    color: black;
    background: transparent;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #fff;
  }

  .slide-container {
    img {
      aspect-ratio: attr(width) / attr(height);
    }
  }
`;
