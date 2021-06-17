import React, { useState } from "react";
import { StyledBar } from "./SearchBar.styles";
import { fetchSpecificArticles } from "../../API";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");

  const getData = async () => {
    const response = await fetchSpecificArticles(query);
    console.log(query);
    console.log(response);
    setArticles(response);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.value.length === 0) {
      setArticles([]);
    } else {
      setQuery(e.target.value);
    }
  };

  return (
    <StyledBar>
      <div>
        <div className="search-outer">
          <input
            type="search"
            onChange={handleChange}
            placeholder="Type any keyword"
          />
          <button onClick={getData} type="button">
            <FaSearch />
          </button>
        </div>
        <ul className="articles-fetched">
          {articles &&
            articles.map((article, id) => {
              return (
                <a
                  href={article.url}
                  className="article-fetched"
                  target="_blank"
                  rel="noreferrer"
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
