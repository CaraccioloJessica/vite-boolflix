<script >
import { store } from '../store.js';
export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div v-for="movie in store.moviesList" :key="movie.id">
    <img :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`" alt="">
    <h4>{{ movie.original_title }}</h4>
    <h4>{{ movie.original_language }}</h4>
    <h4>{{ movie.vote_average }}</h4>
  </div>
</template>

<style lang="scss" scoped>

</style>
