import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
main {
    padding: 1rem 2rem;
  }
.news-article{
    width: 40vw !important;
}
.sections {
    display: flex;
  }

  @media only screen and (min-width:1024){
    .article{
      width: 85vw !important;
    }
  }
`;
