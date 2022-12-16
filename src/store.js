import { reactive } from 'vue';

export const store = reactive({
  moviesList: [],
  apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=6fd82c7e095558dcca8a44519f3dc58a&query=the+martian' //query statica prima della serchbar
});