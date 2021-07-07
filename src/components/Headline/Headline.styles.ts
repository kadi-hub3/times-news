import styled from "styled-components";

export const StyledArticle = styled.div`
  display: flex;
  justify-content: center;
  .news-article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.7rem;
    line-height: 1.75;
    font-family: serif;
    // width: 90vw;
    border-bottom: 2px solid gray;

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
      }
      div {
        margin: 0.2rem;
        padding: 0.2rem;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    .news-article {
      // width: 40vw;
    }
  }
`;
