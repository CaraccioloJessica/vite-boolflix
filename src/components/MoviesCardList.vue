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
      else if (language === 'es') {
        return '<img class="flag" src="https://flagcdn.com/16x12/es.png" alt="es-flag" />';
      }
      else if (language === 'ru') {
        return '<img class="flag" src="https://flagcdn.com/16x12/ru.png" alt="ru-flag" />';
      }
      else if (language === 'fr') {
        return '<img class="flag" src="https://flagcdn.com/16x12/fr.png" alt="fr-flag" />';
      }
      else if (language === 'it') {
        return '<img class="flag" src="https://flagcdn.com/16x12/it.png" alt="it-flag" />';
      }
      else if (language === 'ja') {
        return '<img class="flag" src="https://flagcdn.com/16x12/jp.png" alt="jp-flag" />';
      }
      else {
        return language;
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- cicla nell'array dei film-->
    <div class="card" v-for="movie in store.moviesList" :key="movie.id">
      <!-- immagine del film -->
      <img :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" alt="">
      <!-- titolo film -->
      <h4>{{ movie.title }}</h4>
      <!-- condizione per bandiera o stringa lingua -->
      <h5 :innerHTML="displayLanguage(movie.original_language)">
      </h5>
      <!-- votazione film -->
      <h5>{{ movie.vote_average }}</h5>
    </div>

    <!-- array delle serie tv -->
    <div class="card" v-for="tv in store.tvList" :key="tv.id">
      <!-- immagine -->
      <img :src="`https://image.tmdb.org/t/p/w185${tv.poster_path}`" alt="">
      <!-- titolo -->
      <h4>{{ tv.name }}</h4>
      <!-- condizione per bandiera o stringa lingua -->
      <h5 :innerHTML="displayLanguage(tv.original_language)">
      </h5>
      <!-- votazione film -->
      <h5>{{ tv.vote_average }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.card {
  color: $text;
  margin: 20px;
  width: 185px;
}
</style>
