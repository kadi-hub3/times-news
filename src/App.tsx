import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import US from "./pages/US";
import World from "./pages/World";
import SundayReview from "./pages/SundayReview";
import Health from "./pages/Health";
import Arts from "./pages/Arts";
import Politics from "./pages/Politics";
import Travel from "./pages/Travel";
import Science from "./pages/Science";
import Tech from "./pages/Tech";
import ET from "./pages/ET";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import NewsProvider from "./Context";
import "./App.css";

function App() {
  //add a basename
  return (
    <>
      <Header />
      <Newsletter />
      <NewsProvider>
        <Switch>
          <Route exact path="/times-news/" component={Home} />
          <Route exact path="/times-news/us" component={US} />
          <Route exact path="/times-news/world" component={World} />
          <Route
            exact
            path="/times-news/sundayreview"
            component={SundayReview}
          />
          <Route exact path="/times-news/health" component={Health} />
          <Route exact path="/times-news/tech" component={Tech} />
          <Route exact path="/times-news/science" component={Science} />
          <Route exact path="/times-news/travel" component={Travel} />
          <Route exact path="/times-news/et" component={ET} />
          <Route exact path="/times-news/politics" component={Politics} />
          <Route exact path="/times-news/arts" component={Arts} />
        </Switch>
      </NewsProvider>
      <Footer />
    </>
  );
}
export default App;
