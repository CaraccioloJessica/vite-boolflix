import { reactive } from 'vue';

export const store = reactive({
  moviesList: [],
  tvList: [],
  apiURL: 'https://api.themoviedb.org/3/movie/popular?api_key=6fd82c7e095558dcca8a44519f3dc58a&page=1', //chiamata all'api per film da visualizzare in prima pagina 
  searchText: ''
});