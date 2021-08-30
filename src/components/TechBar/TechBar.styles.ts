import styled from "styled-components";

export const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5rem 0;

  div {
    width: 25vw;
    padding: 1.2rem;
    line-height: 1.5;

    h1 {
      text-align: left;
      padding-bottom: 0.5rem;
      text-decoration: none;
      font-family: serif;
      letter-spacing: 0px;
    }
    p {
      line-height: 1.25;
    }
    .author {
      display: flex;
      img {
        aspect-ratio: attr(width) / attr(height);
        border-radius: 50%;
        margin-right: 0.5rem;
        width: 3vw;
      }
      div {
        margin: 0.2rem;
        padding: 0.2rem;
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    width: 500px;
    display: none;
  }
`;
