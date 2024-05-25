import { defineStore } from "pinia";
import axios from "axios";
interface Pokemon {
  name: string;
  url: string;
}
interface PokemonDetails {
  ability: string;
  height: number;
}
export const usePokemonStore = defineStore("pokemons", {
  state: () => ({
    pokemonList: [] as Pokemon[],
    pokemonDetails: {} as Record<string, PokemonDetails>,
  }),
  actions: {
    async fetchPokemon() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        this.pokemonList = response.data.results;
        // fetch details for each pokemon
        for (const pokemon of response.data.results) {
          const detailsResponse = await axios.get(pokemon.url);
          this.pokemonDetails[pokemon.name] = {
            ability: detailsResponse.data.abilities[0].ability.name,
            height: detailsResponse.data.height,
          };
        }
      } catch (error) {
        console.log("failed to fetch pokemons", error);
      }
    },
  },
});
