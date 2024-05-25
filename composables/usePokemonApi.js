import { ref } from 'vue';
import axios from 'axios';

export function usePokemonApi() {
  const pokemon = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  async function fetchPokemon(id) {
    isLoading.value = true;
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      pokemon.value = response.data;
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  }

  return { pokemon, isLoading, error, fetchPokemon };
}
