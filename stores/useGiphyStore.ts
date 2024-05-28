import { defineStore } from "pinia";
import axios from "axios";

export const useGiphyStore = defineStore("giphy", {
  state: () => ({
    gifs: [],
    currentQuery: "",
    loading: false,
    images: "",
    pagination: {
      total: 0,
      count: 20,
      offset: 0,
    },
  }),
  actions: {
    async fetchGifs(query) {
      this.loading = true;
      if (query) {
        this.currentQuery = query;
      }
      this.currentQuery = query;
      try {
        const response = await axios.get(
          "https://api.giphy.com/v1/gifs/search",
          {
            params: {
              api_key: "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa",
              q: this.currentQuery,
              limit: this.pagination.count,
              offset: this.pagination.offset,
            },
          }
        );
        this.gifs = response.data.data;
        console.log(this.gifs);
      } catch (error) {
        console.log("failed to fetch the gifs", error);
      } finally {
        this.loading = false;
      }
    },
    clearResults() {
      this.gifs = [];
      this.currentQuery = "";
      this.pagination.offset = 0;
      this.pagination.total = 0;
    },
    nextPage() {
      if (
        this.pagination.offset + this.pagination.count <
        this.pagination.total
      ) {
        this.pagination.offset += this.pagination.count;
        this.fetchGifs();
      }
    },
    previousPage() {
      if (this.pagination.offset !== 0) {
        this.pagination.offset = Math.max(
          0,
          this.pagination.offset - this.pagination.count
        );
        this.fetchGifs();
      }
    },
  },
});
