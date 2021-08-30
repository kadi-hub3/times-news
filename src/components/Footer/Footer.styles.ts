import styled from "styled-components";

export const StyledFooter = styled.div`
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;
    p {
      padding: 1rem 0;
    }
    ul {
      display: flex;
      list-style: none;
      cursor: pointer;
      li {
        padding: 0 0.7rem;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    ul {
      display: flex;
      flex-direction: column;
    }
  }
`;
