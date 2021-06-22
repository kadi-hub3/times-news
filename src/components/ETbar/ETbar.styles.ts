import styled from "styled-components";

export const StyledBar = styled.div`
  .ET-bar {
    width: 22vw;
    margin 2rem 0 ;
    margin-right:1rem;
    line-height:1.5;
    h3{
        line-height: 1.25;
    }
    img {
      width: 22vw;
      height: 28vh;
    }
  }

  @media only screen and (max-width: 1024px){
    .ET-bar{
      display: none;
    }
  }
`;
