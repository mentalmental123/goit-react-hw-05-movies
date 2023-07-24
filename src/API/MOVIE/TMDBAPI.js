import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const API_KEY = 'c7233bc29883c6e289635e083fc7eb75';
const HOST = 'api.themoviedb.org/';

axios.default.baseURL = HOST;


export const searchParams = new URLSearchParams({
    q: "",
    key : API_KEY,
})

export async function getMovies(querry) {
  if (querry) {
    return;
  }
  searchParams.set("q" , querry);
    try{
    const data = await axios.get(searchParams);
     if (data.totalHits === 0) {
        Notify.failure(
          "Sorry, there are no movies matching your search query. Please try again."
        );
      }
      return data;
    }catch (e) {
      console.error(e.message);
    }
}