import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = 'a38a9a0b10c60ece915b24f3a6f1c45f'

const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=a38a9a0b10c60ece915b24f3a6f1c45f';

//https://api.themoviedb.org/3/trending/all/day?api_key=cfd0da0c3f3b9697c9722a50ac287ac0
const getTrendingVideos = axios.get(movieBaseUrl +
    "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId = (id) =>
    axios.get(movieByGenreBaseURL + "&with_genres=" + id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}