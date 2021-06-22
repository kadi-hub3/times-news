import React, { useState, useEffect } from "react";
import { StyledHeader } from "./Header.styles";
import { NavLink } from "react-router-dom";
import Headline from "../Headline/Headline";
import { getCurrentDate, Category, fetchArticles } from "../../API";
import WeatherIcon from "../WeatherApp/Weather";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [date, setDate] = useState("");
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    const getDate = async () => {
      const date = await getCurrentDate();
      setDate(date);
    };

    getDate();
  }, []);

  return (
    <StyledHeader>
      <div className="header">
        <div className="lingo">
          <NavLink to="/times-news/us" activeClassName="active">
            U.S.
          </NavLink>
          <NavLink to="/times-news/world" activeClassName="active">
            INTERNATIONAL
          </NavLink>
          <NavLink to="/times-news/sundayreview" activeClassName="active">
            Sunday Review
          </NavLink>
        </div>
        <div className="title">
          <h4>{date}</h4>
          <NavLink to="/times-news">
            <h1>THE LA TIMES</h1>
          </NavLink>
          <h4>
            <WeatherIcon />
          </h4>
        </div>
        <SearchBar />
        <div className="categories">
          <NavLink to="/times-news/politics" activeClassName="active">
            politics
          </NavLink>
          <NavLink to="/times-news/et" activeClassName="active">
            entertainment
          </NavLink>
          <NavLink to="/times-news/arts" activeClassName="active">
            arts
          </NavLink>
          <NavLink to="/times-news/health" activeClassName="active">
            health
          </NavLink>
          <NavLink to="/times-news/science" activeClassName="active">
            science
          </NavLink>
          <NavLink to="/times-news/travel" activeClassName="active">
            travel
          </NavLink>
          <NavLink to="/times-news/tech" activeClassName="active">
            fashion
          </NavLink>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
