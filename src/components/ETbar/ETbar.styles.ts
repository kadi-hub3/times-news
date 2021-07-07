import styled from "styled-components";

export const StyledBar = styled.div`
  .ET-bar {
    margin 2rem 0.4rem ;
    line-height:1.5;
    h3{
        line-height: 1.25;
    }
    img {
      aspect-ratio: attr(width) / attr(height);

    }
  }

  @media only screen and (max-width: 1024px){
    .ET-bar{
      display: none;
    }
  }
`;
