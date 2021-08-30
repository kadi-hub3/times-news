import React from "react";
import { StyledArticle } from "./Headline.styles";

type Props = {
  title: string;
  author: string;
  description: string;
  image: string;
  authorImg: string;
  authorProfession: string;
};

const Headline: React.FC<Props> = ({
  title,
  author,
  description,
  image,
  authorImg,
  authorProfession,
}) => {
  return (
    <StyledArticle>
      <div className="news-article">
        <img
          src={image}
          className="main-img"
          width="800"
          height="450"
          alt="headline img"
        />
        <h2>{title}</h2>
        <span>{description}</span>
        <div className="author">
          <img src={authorImg} width="80" height="45" alt="author's" />
          <div>
            <h5>{author}</h5>
            <h6>{authorProfession}</h6>
          </div>
        </div>
      </div>
    </StyledArticle>
  );
};

export default Headline;
