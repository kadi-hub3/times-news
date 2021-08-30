import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
main {
    padding: 1rem;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow:hidden;
    width:100vw;
  }

.sections {
    display: flex;
  }
  @media only screen and (max-width: 1600px) {
    main{
      display:flex;
      justify-content: space-around;
      align-items: center;

    }

  }
`;
