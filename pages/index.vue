<template>
  <div class="grid grid-cols-3 gap-4">
    <Card v-for="pokemon in pokemons" :key="pokemon.name">
      <div>{{ pokemon.name }}</div>
      <div>{{ pokemon.url }}></div>
      <div>{{ pokemonDetails[pokemon.name]?.ability || "Loading.." }}</div>
      <div>{{ pokemonDetails[pokemon.name]?.height || "Loading.." }}</div>

    </Card>
  </div>
</template>

<script setup>
import Card from "/components/Card.vue";
import { usePokemonStore } from "/stores/usePokemonStore.ts";
import { onMounted } from "vue";

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.fetchPokemon();
});

const pokemons = computed(() => pokemonStore.pokemonList);
const pokemonDetails = computed(() => pokemonStore.pokemonDetails);
</script>
