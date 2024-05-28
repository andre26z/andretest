import { defineStore } from "pinia";
import axios from "axios";

export const useGiphyStore = defineStore("giphy", {
  state: () => ({
    gifs: [],
    currentQuery: "",
    loading: false,
    pagination: {
      total: 0,
      page: 1,
      limit: 50,
    },
  }),
  actions: {
    async fetchGifs(query = this.currentQuery) {
      this.loading = true;
      if (query) {
        this.currentQuery = query;
      }

      try {
        const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
          params: {
            api_key: "pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa",
            q: this.currentQuery,
            limit: this.pagination.limit,
            offset: (this.pagination.page - 1) * this.pagination.limit,
          },
        });

        this.gifs = response.data.data;
        this.pagination.total = response.data.pagination.total_count;
      } catch (error) {
        console.log("failed to fetch the gifs", error);
      } finally {
        this.loading = false;
      }
    },
    clearResults() {
      this.gifs = [];
      this.currentQuery = "";
      this.pagination.page = 1;
      this.pagination.total = 0;
    },
    nextPage() {
      if (this.pagination.page * this.pagination.limit < this.pagination.total) {
        this.pagination.page += 1;
        this.fetchGifs();
      }
    },
    previousPage() {
      if (this.pagination.page > 1) {
        this.pagination.page -= 1;
        this.fetchGifs();
      }
    },
  },
});
