import React, { useState, useEffect } from "react";
import Headline from "../Headline/Headline";
import { StyledBar } from "./SearchBar.styles";
import { fetchSpecificArticles } from "../../API";
import { FaSearch } from "react-icons/fa";
import { title } from "process";

const SearchBar = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetchSpecificArticles(query);
      setArticles(response);
      console.log(response);
    };
    getData();
  }, [query]);

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <StyledBar>
      <div>
        <div className="search-outer">
          <form role="search" method="get" className="searchform">
            <input
              type="search"
              onChange={handleChange}
              placeholder="Type any keyword"
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <ul className="articles-fetched">
          {articles &&
            articles.map((article, id) => {
              return (
                <a
                  href={article.url}
                  className="article-fetched"
                  target="_blank"
                >
                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.abstract}</p>
                  </div>
                </a>
              );
            })}
        </ul>
      </div>
    </StyledBar>
  );
};

export default SearchBar;
