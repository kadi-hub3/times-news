import React, { useState, useEffect } from "react";
import { StyledHeader } from "./Header.styles";
import { NavLink } from "react-router-dom";
import { getCurrentDate } from "../../API";
import WeatherIcon from "../WeatherApp/Weather";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [date, setDate] = useState("");

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
          <NavLink to="/us" activeClassName="active">
            U.S.
          </NavLink>
          <NavLink to="/world" activeClassName="active">
            INTERNATIONAL
          </NavLink>
          <NavLink to="/sundayreview" activeClassName="active">
            Sunday Review
          </NavLink>
        </div>
        <div className="title">
          <h4>{date}</h4>
          <NavLink to="/">
            <h1>the la times</h1>
          </NavLink>
          <h4>
            <WeatherIcon />
          </h4>
        </div>
        <SearchBar />
        <div className="categories">
          <NavLink to="/politics" activeClassName="active">
            politics
          </NavLink>
          <NavLink to="/et" activeClassName="active">
            entertainment
          </NavLink>
          <NavLink to="/arts" activeClassName="active">
            arts
          </NavLink>
          <NavLink to="/health" activeClassName="active">
            health
          </NavLink>
          <NavLink to="/science" activeClassName="active">
            science
          </NavLink>
          <NavLink to="/travel" activeClassName="active">
            travel
          </NavLink>
          <NavLink to="/tech" activeClassName="active">
            tech
          </NavLink>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
