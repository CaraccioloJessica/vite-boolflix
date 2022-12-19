<script >
import { store } from '../store.js';
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    // metodo per visualizzare bandiere in base alla lingua
    displayLanguage(language) {
      if (language === 'en') {
        return '<img class="flag" src="https://flagcdn.com/16x12/gb.png" alt="uk-flag" />';
      }
      else if (language === 'it') {
        return '<img class="flag" src="https://flagcdn.com/16x12/it.png" alt="it-flag" />';
      }
      else {
        return language;
      }
    },

    rating(voteAverage) {
      let vote = Math.round(voteAverage / 2);
      return vote;
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- cicla nell'array dei film-->
    <div class="card" v-for="movie in store.moviesList" :key="movie.id">
      <!-- immagine del film -->
      <img :src="movie.poster_path ? `https://image.tmdb.org/t/p/w185${movie.poster_path}` : 'img/image-not-found.jpg'"
        alt="">
      <!-- titolo film -->
      <h4>{{ movie.title }}</h4>
      <!-- condizione per bandiera o stringa lingua -->
      <h5 :innerHTML="displayLanguage(movie.original_language)">
      </h5>
      <!-- votazione film -->
      <div>
        <!-- stampa stelle in base alla votazione -->
        <span v-for="star in rating(movie.vote_average)">&#9733;</span>
        <!-- stampa le rimanenti stelle vuote, facendo la differenza tra un intervallo di 5 numeri meno il voto arrotondato del metodo-->
        <span v-for="star in 5 - rating(movie.vote_average)">&#9734;</span>
      </div>
    </div>

    <!-- array delle serie tv -->
    <div class="card" v-for="tv in store.tvList" :key="tv.id">
      <!-- immagine -->
      <img :src="tv.poster_path ? `https://image.tmdb.org/t/p/w185${tv.poster_path}` : 'img/image-not-found.jpg'"
        alt="">
      <!-- titolo -->
      <h4>{{ tv.name }}</h4>
      <!-- condizione per bandiera o stringa lingua -->
      <h5 :innerHTML="displayLanguage(tv.original_language)">
      </h5>
      <!-- votazione serie -->
      <div>
        <span v-for="star in rating(tv.vote_average)">&#9733;</span>
        <span v-for="star in 5 - rating(tv.vote_average)">&#9734;</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  margin-top: 50px;

  .card {
    color: $text;
    width: 185px;

    img {
      width: 185px;
      height: 278px;
      object-fit: cover;
    }

    span {
      color: yellow;
    }
  }
}
</style>
