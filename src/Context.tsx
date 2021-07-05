import React, { useState, useEffect } from "react";
import { fetchArticles, Article, Category } from "./API";

export const NewsContext: any = React.createContext({});

const NewsProvider = ({ children }: any) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [techArticles, setTechArticles] = useState<any[]>([]);
  const [etArticles, setETArticles] = useState<any[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles(Category.Politics);
      const techResponse = await fetchArticles(Category.Arts);
      const etResponse = await fetchArticles(Category.Food);
      setArticles(response);
      setTechArticles(techResponse);
      setETArticles(etResponse);
    };

    getArticles();
  }, []);

  return (
    <NewsContext.Provider value={{ articles, techArticles, etArticles }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;
