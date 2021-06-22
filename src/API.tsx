const key = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_URL;
const weatherKey = process.env.REACT_APP_API_WEATHER_KEY;
const ipKey = process.env.REACT_APP_IP_KEY;

export enum Category {
  Home = "home",
  Tech = "technology",
  Arts = "arts",
  Politics = "politics",
  ET = "magazine",
  Fashion = "fashion",
  Food = "food",
  Science = "science",
  Travel = "travel",
  Health = "health",
  US = "us",
  WW = "international",
  SundayReview = "sundayreview",
}

export type Article = {
  title: string;
  abstract: string;
  author: string;
  section: string;
  url: string;
  image: string;
  [key: string]: any;
};

export type SearchedArticle = {
  title: string;
  abstract: string;
  url: string;
  image: string;
  [key: string]: any;
};

export const fetchArticles = async (category: Category) => {
  try {
    const response = await fetch(`${url}/${category}.json?api-key=${key}`);

    if (response.ok) {
      const jsonRes = await response.json();
      const articles = await jsonRes.results;
      return articles.map((article: Article) => {
        return {
          title: article.title,
          abstract: article.abstract,
          author: article.byline,
          section: article.section,
          url: article.short_url,
          image: article.multimedia[0].url,
        };
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchSpecificArticles = async (query: string) => {
  const endpoint = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${key}`;
  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      const jsonRes = await response.json();
      const queryArticles = jsonRes.response.docs;
      console.log(queryArticles);
      return queryArticles.map((article: SearchedArticle) => {
        return {
          title: article.headline.main,
          abstract: article.abstract,
          image: article.multimedia[0].url,
          url: article.web_url,
        };
      });
    }
    throw new Error("Requested Articles Not Found!");
  } catch (err) {
    console.log(err);
  }
};
export const getCurrentDate = () => {
  const dayNames: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let newDate = new Date();
  let day = newDate.getDay();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  return `${dayNames[day]}, ${monthNames[month]} ${date}, ${year}`;
};

export const fetchWeather = async (city: string) => {
  const endpointW = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;
  try {
    const response = await fetch(endpointW);
    if (response.ok) {
      const jsonResponse = await response.json();
      const weather = await jsonResponse.weather;
      const main = await jsonResponse.main;
      return [main, weather];
    }
    throw new Error("Weather Request Failed!");
  } catch (err) {
    console.log(err);
  }
};

export const fetchLocation = async () => {
  const locationURL = `https://api.ipgeolocation.io/ipgeo?apiKey=${ipKey}`;
  try {
    const getLocation = await fetch(locationURL);
    if (getLocation.ok) {
      const jsonLocation = await getLocation.json();
      const city = await jsonLocation.city;
      console.log(city);
      return city;
    }
    throw new Error("Location Request Failed!");
  } catch (err) {
    console.log(err);
  }
};
