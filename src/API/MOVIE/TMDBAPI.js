import axios from "axios";

const baseUrl = "https://api.themoviedb.org/";
const apiKey = "c7233bc29883c6e289635e083fc7eb75";

export const searchParams = new URLSearchParams({
  api_key: apiKey,
});

axios.defaults.baseURL = `${baseUrl}`;
class Movies {
  async getData(querry) {
    try {
      const { data } = await axios.get(`${querry}?${searchParams}`);
      return data;
    } catch (e) {
      console.error(e.message);
    }
  }
}

const TMDB = new Movies();

export { TMDB };
