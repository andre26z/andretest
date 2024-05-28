<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="searchQuery" placeholder="Search Gifs" />
      <button type="submit">Search</button>
      <div>
        <button type="button" @click="clearSearch">Clear Search</button>
      </div>
    </form>
    <div v-for="gif in gifs" :key="gif.id" class="gif">
      <img :src="gif.images.fixed_width_small.url" />
    </div>
    <button @click="previousPage">Previouse</button>
    <button @click="nextPage">Next</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useGiphyStore } from "~/stores/useGiphyStore";

const store = useGiphyStore();
const searchQuery = ref("");

const search = () => {
  store.fetchGifs(searchQuery.value);
  store.clearResults();
};

const clearSearch = () => {
  searchQuery.value = "";
  store.clearResults();
};

const nextPage = () => {
  
}
const { gifs, loading, pagination } = storeToRefs(store);
</script>

<style>
.gifs {
  padding: 3px;
}
</style>
