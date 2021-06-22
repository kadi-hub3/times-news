import React, { useState, useEffect } from "react";
import Headline from "../components/Headline/Headline";
import { fetchArticles, Category } from "../API";

const Travel = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles(Category.Travel);
      setArticles(response);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article, id) => {
        return (
          <a href={article.url} target="_blank" rel="noreferrer" key={id}>
            <Headline
              title={article.title}
              author={article.author}
              description={article.abstract}
              image={article.image}
              authorImg={article.image}
              authorProfession="Reporter"
            />
          </a>
        );
      })}
    </div>
  );
};

export default Travel;
