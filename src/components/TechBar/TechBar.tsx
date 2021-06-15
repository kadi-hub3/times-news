import React from "react";
import { StyledSidebar } from "./TechBar.styles";

type Props = {
  title: string;
  author: string;
  description: string;
  authorImg: string;
  authorProfession: string;
};

const TechBar: React.FC<Props> = ({
  title,
  description,
  author,
  authorImg,
  authorProfession,
}) => {
  return (
    <StyledSidebar>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="author">
          <img src={authorImg} alt="author's" />
          <div>
            <h5>{author}</h5>
            <h6>{authorProfession}</h6>
          </div>
        </div>
      </div>
    </StyledSidebar>
  );
};

export default TechBar;
