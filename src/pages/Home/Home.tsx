import React, { useState, useEffect } from "react";
import Headline from "../../components/Headline/Headline";
import TechSidebar from "../../components/TechBar/TechBar";
import ETSidebar from "../../components/ETbar/ETbar";
import Swiper from "../../components/SliderShow/SliderShow";
import { fetchArticles } from "../../API";
import { GlobalStyle } from "./Home.styles";
const Home = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [techArticles, setTechArticles] = useState<any[]>([]);
  const [etArticles, setETArticles] = useState<any[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetchArticles("home");
      const techResponse = await fetchArticles("arts");
      const etResponse = await fetchArticles("politics");
      setArticles(response);
      setTechArticles(techResponse);
      setETArticles(etResponse);
    };

    getArticles();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Swiper />
      <main className="app">
        <div className="sections">
          <section>
            {techArticles.map((article, id) => {
              return (
                <a href={article.url} target="_blank" rel="noreferrer" key={id}>
                  <TechSidebar
                    title={article.title}
                    author={article.author}
                    description={article.abstract}
                    authorImg={article.image}
                    authorProfession="Reporter"
                  />
                </a>
              );
            })}
          </section>
          <section>
            {articles.map((article, id) => {
              return (
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  key={id}
                  className="article"
                >
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
          </section>
          <section>
            {etArticles.map((article, id) => {
              return (
                <a href={article.url} target="_blank" rel="noreferrer" key={id}>
                  <ETSidebar
                    title={article.title}
                    author={article.author}
                    image={article.image}
                  />
                </a>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
