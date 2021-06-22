import React, { useContext } from "react";
import Headline from "../../components/Headline/Headline";
import TechSidebar from "../../components/TechBar/TechBar";
import ETSidebar from "../../components/ETbar/ETbar";
import Swiper from "../../components/SliderShow/SliderShow";
import { GlobalStyle } from "./Home.styles";
import { NewsContext } from "../../Context";

const Home = () => {
  const { articles, techArticles, etArticles } = useContext(NewsContext);

  return (
    <>
      <GlobalStyle />
      <main className="app">
        <Swiper />
        <div className="sections">
          <section>
            {techArticles.map((article: any, id: any) => {
              return (
                <a href={article.url} target="_blank" rel="noreferrer" key={id}>
                  <TechSidebar
                    title={article.title}
                    author={article.author}
                    description={article.abstract}
                    authorImg={article.image}
                  />
                </a>
              );
            })}
          </section>
          <section>
            {articles.map((article: any, id: any) => {
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
            {etArticles.map((article: any, id: any) => {
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
