import {
  fetchArticles,
  fetchSpecificArticles,
  Category,
  fetchLocation,
  fetchWeather,
} from "../API";

describe("Get API calls properly", () => {
  //Needs Mock or Spy tobe called
  it("should fetch articles data", async () => {
    const data = await fetchArticles(Category.ET);
    // expect(data).toMatchSnapshot();
    // expect(data).toBeDefined();
    // expect(data[0].title).toBeDefined();
  });

  it("should be falsy at first Searched Articles", async () => {
    const data = await fetchSpecificArticles("");
  });

  it("should fetch searched articles data", async () => {
    const data = await fetchSpecificArticles("biden");
    //when input added
    // expect(data).toBeDefined();
    // expect.stringContaining("biden");
  });

  it("should fetch location's user", async () => {
    const location = await fetchLocation();
    // expect(location).toBeDefined();
  });

  it("should fetch weather's user", async () => {
    const weather: any[] = await fetchWeather("london");
    // expect(weather).toBeDefined();
    // expect.arrayContaining([
    //   weather[0].temp_max,
    //   weather[0].temp_min,
    //   weather[0].temp,
    // ]);
    // expect.arrayContaining([weather[1][0].icon]);
  });
});
