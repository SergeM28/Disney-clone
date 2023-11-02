import axios from 'axios';

const movieBseUrl = "https://api.themoviedb.org/3"
const api_key = 'cfd0da0c3f3b9697c9722a50ac287ac0'

//https://api.themoviedb.org/3/trending/all/day?api_key=cfd0da0c3f3b9697c9722a50ac287ac0
const getTrendingVideos = axios.get(this.movieBseUrl + "/trending/all/day?api_key" + api_key);

export default {
    getTrendingVideos
}