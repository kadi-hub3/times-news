import styled from "styled-components";

export const StyledSidebar = styled.div`
  div {
    width: 25vw;
    margin: 2rem 0.2rem;
    padding: 0 0.5rem;
    h1 {
      text-align: left;
      line-height: 1.5;
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
      margin: 1rem;
      img {
        aspect-ratio: attr(width) / attr(height);
        border-radius: 50%;
        margin-right: 0.5rem;
      }
      div {
        margin: 0.2rem;
        padding: 0.2rem;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    div {
      display: none;
    }
  }
`;
