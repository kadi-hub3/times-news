import styled from "styled-components";

export const StyledBar = styled.div`
  .ET-bar {
    padding: 1rem 2rem;
    line-height: 1.5;
    aspect-ratio: attr(width) / attr(height);
    width: 400px;

    h3 {
      line-height: 1.25;
    }
    img {
      aspect-ratio: attr(width) / attr(height);
    }
  }

  @media only screen and (max-width: 1600px) {
    display: none;
  }
  @media only screen and (max-width: 1600px) {
    .news-article {
      width: 200px;
    }
  }
`;
