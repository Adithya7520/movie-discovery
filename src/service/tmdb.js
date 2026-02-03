/* build-ref:delta */

import { TMDB_API_KEY } from "@env";
import axios from "axios";
import { BASE_URL } from "../constants/api";

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: "en-US",
    region: "IN",
  },
});

export const fetchPopularMovies = (page = 1) =>
  api.get("/movie/popular", { params: { page } });

export const searchMovies = (query, page = 1) =>
  api.get("/search/movie", { params: { query, page } });

export const fetchMovieDetails = (id) => api.get(`/movie/${id}`);

export const fetchMovieCredits = (id) => api.get(`/movie/${id}/credits`);

export const fetchMovieReviews = (id, page = 1) =>
  api.get(`/movie/${id}/reviews`, { params: { page } });
