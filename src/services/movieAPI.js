import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTQwNzRlNjlmNTgxZDNkNzg2Y2NhYjdiZmJhNmVmZSIsInN1YiI6IjY0N2RiYzlmY2FlZjJkMDEzNjJjMjhkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TWkGgJpfVqiL0BGgD2b9NTmmJQ88tFs669KygeOCQvE'

const moviesAPI = axios.create({baseURL})
moviesAPI.defaults.headers.common['Authorization'] = AUTH_TOKEN;
moviesAPI.defaults.params = {language: 'en-US'}

// https://api.themoviedb.org/3/genre/movie/list
export const fetchTopRatedMovies = async () => {
  const url = '/3/trending/all/week'
    try {
    const { data } = await moviesAPI.get(url);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
export const fetchGenres = async () => {
  const url = '/3/genre/movie/list'
  const url2 = '/3/genre/tv/list'
    try {
    const { data: movie } = await moviesAPI.get(url);
    const { data: tv } = await moviesAPI.get(url2);
    return [...movie.genres, ...tv.genres] ;
  } catch (error) {
    console.log(error);
  }
}

export const searchFilms = async (query) => {
  const url = `/3/search/movie`;
  const params = {query, page: 1}
    try {
      const { data } = await moviesAPI.get(url,{params});
      return data.results;
    } catch (error) {
      console.log(error);
    }
}

// https://api.themoviedb.org/3/movie/{movie_id}
export const getFilm = async (movie_id) => {
  const url = `/3/movie/${movie_id}`;
    try {
      const { data } = await moviesAPI.get(url);
      return data;
    } catch (error) {
      console.log(error);
    }
}

// https://api.themoviedb.org/3/movie/{movie_id}/credits
export const getCredits = async (movie_id) => {
  const url = `/3/movie/${movie_id}/credits`;
    try {
      const { data } = await moviesAPI.get(url);
      return data.cast;
    } catch (error) {
      console.log(error);
    }
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews
export const getReviews = async (movie_id) => {
  const url = `/3/movie/${movie_id}/reviews`;
    try {
      const { data } = await moviesAPI.get(url);
      return data.results;
    } catch (error) {
      console.log(error);
    }
}