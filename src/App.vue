<script>
import axios from 'axios';
import MoviesCardList from './components/MoviesCardList.vue'

import { store } from './store.js';

export default {
  components: {
    MoviesCardList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
      let myUrl = store.apiURL;
      // per connettersi all api
      axios
        .get(myUrl)
        .then(res => {
          store.moviesList = res.data.results
        }
        )
    }
  },
  mounted() {
    this.getMovies();
  }
}

</script>

<template>
  <main>
    <MoviesCardList />
  </main>
</template>

<style lang="scss">

</style>
