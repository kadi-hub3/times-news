import styled from "styled-components";

export const SwiperStyle = styled.div`
  padding: 1rem;
  width: 95vw;
  margin-top: 1rem;
  .swiper-button-next,
  .swiper-button-prev {
    color: orange;
    background: transparent;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #fff;
  }

  .slide-container {
    img {
      aspect-ratio: attr(width) / attr(height);
      margin: 0 0.4rem;
    }
  }
`;
