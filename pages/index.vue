<template>
  <div class="container">
    <form @submit.prevent="search" class="search-form">
      <input type="text" v-model="searchQuery" placeholder="Search Gifs" class="search-input" />
      <div class="button-group">
        <button type="submit" class="btn btn-search">Search</button>
        <button type="button" @click="clearSearch" class="btn btn-clear">Clear Search</button>
      </div>
    </form>
    <div v-if="loading" class="loading">Loading...</div>
    <div class="grid">
      <div v-for="gif in gifs" :key="gif.id" class="gif">
        <img :src="gif.images.fixed_width_small.url" />
      </div>
    </div>
    <div class="pagination-buttons">
      <button @click="previousPage" :disabled="pagination.page === 1" class="btn btn-prev">
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="pagination.page * 50 >= pagination.total"
        class="btn btn-next"
      >
        Next
      </button>
    </div>
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
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.search-form {
  margin-top: 100px;
  text-align: center;
}

.search-input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
}

.button-group {
  margin-top: 10px;
}

.btn {
  padding: 10px 20px;
  margin: 5px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-search {
  background-color: #4caf50;
  color: white;
}

.btn-clear {
  background-color: #f44336;
  color: white;
}

.btn-prev, .btn-next {
  background-color: #008cba;
  color: white;
}

.loading {
  font-size: 20px;
  margin-top: 20px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.gif {
  padding: 5px;
}

.pagination-buttons {
  margin-top: 20px;
}
</style>
