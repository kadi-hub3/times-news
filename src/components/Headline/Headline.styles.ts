import styled from "styled-components";

export const StyledArticle = styled.div`
  display: flex;
  justify-content: center;
  .news-article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0.7rem 0;
    line-height: 1.75;
    font-family: serif;
    border-bottom: 2px solid gray;
    width: 800px;
    padding: 1rem 2rem;

    img {
      aspect-ratio: attr(width) / attr(height);
    }
    .author {
      display: flex;
      justify-content: start;
      margin: 1rem;
      img {
        aspect-ratio: attr(width) / attr(height);
        border-radius: 50%;
        margin: 0 0.5rem;
        width: 3vw;
      }
      div {
        margin: 0.2rem;
        padding: 0.2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .news-article,
    img {
      width: 90vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main-img {
      height: 50vh;
    }
  }
`;
