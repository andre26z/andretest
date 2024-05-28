<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" v-model="searchQuery" placeholder="Search Gifs" />
      <button type="submit">Search</button>
      <button type="button" @click="clearSearch">Clear Search</button>
    </form>
    <div v-if="loading">Loading...</div>
    <div v-for="gif in gifs" :key="gif.id" class="gif">
      <img :src="gif.images.fixed_width_small.url" />
    </div>
    <button @click="previousPage" :disabled="pagination.page === 1">
      Previous
    </button>
    <button @click="nextPage" :disabled="pagination.page * 20 >= pagination.total">
      Next
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGiphyStore } from "~/stores/useGiphyStore";
import { storeToRefs } from "pinia";

const store = useGiphyStore();
const searchQuery = ref("");

const search = () => {
  store.fetchGifs(searchQuery.value);
};

const clearSearch = () => {
  searchQuery.value = "";
  store.clearResults();
};

const { gifs, loading, pagination } = storeToRefs(store);

const { nextPage, previousPage } = store;
</script>

<style scoped>
.gif {
  padding: 3px;
}
</style>
