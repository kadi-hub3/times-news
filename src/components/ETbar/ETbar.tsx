import React from "react";
import { StyledBar } from "./ETbar.styles";

type Props = {
  title: string;
  image: string;
  author: string;
};
const ETbar: React.FC<Props> = ({ title, image, author }) => {
  return (
    <StyledBar>
      <section className="ET-bar">
        <img src={image} alt="article-img" />
        <h3>{title}</h3>
        <h6>{author}</h6>
      </section>
    </StyledBar>
  );
};

export default ETbar;
