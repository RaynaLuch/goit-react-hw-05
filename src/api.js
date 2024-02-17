import axios from "axios";

const ACCESS_KEY = "7c66ce79e071fe014496bf6e58d14607";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.headers.common["Autorization"] = "Bearer " + ACCESS_KEY;
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["accept"] = "application/json";
export const getMovies = async (query) => {
  try {
    const response = await axios.get("/search/movie", {
      params: {
        query: query,
        api_key: ACCESS_KEY,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error: " + error);
  }
};

export const getTrending = async () => {
  try {
    const response = await axios.get("trending/movie/day", {
      params: {
        api_key: ACCESS_KEY,
        language: "en-US",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error: " + error);
  }
};
export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}`, {
      params: {
        api_key: ACCESS_KEY,
        language: "en-US",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error: " + error);
  }
};

export const getMovieCast = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}/credits`, {
      params: {
        api_key: ACCESS_KEY,
        language: "en-US",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error: " + error);
  }
};

export const getReviews = async (id) => {
  try {
    const response = await axios.get(`/movie/${id}/reviews`, {
      params: {
        api_key: ACCESS_KEY,
        language: "en-US",
        page: 1,
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error: " + error);
  }
};
