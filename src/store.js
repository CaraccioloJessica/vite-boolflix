import { reactive } from 'vue';

export const store = reactive({
  moviesList: [],
  tvList: [],
  moviesAPI: 'https://api.themoviedb.org/3/movie/popular?api_key=6fd82c7e095558dcca8a44519f3dc58a&page=1', // API dei film
  tvAPI: 'https://api.themoviedb.org/3/tv/popular?api_key=6fd82c7e095558dcca8a44519f3dc58a&page=1', // API delle serie TV
  searchText: ''
});