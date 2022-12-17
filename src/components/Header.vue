<script>
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
  <header>
    <div class="container">
      <h1>Boolflix</h1>

      <div class="search_bar">
        <!-- ricerca nell'api in base a cosa scrive l'utente -->
        <input type="search" placeholder="Scrivi qualcosa..." v-model="store.searchText">
        <button type="submit" @click.prevent="$emit('search')">
          Cerca
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.container {
  justify-content: space-between;
  align-items: center;

  h1 {
    color: $accent;
  }
}
</style>