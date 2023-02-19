<script setup>
import { usePokemonStore } from '@/stores/pokemon';
import { storeToRefs } from 'pinia';
import PokemonCard from '../components/PokemonCard.vue'
import EvolutionCard from '../components/EvolutionCard.vue'

const { currentPokemon, loading, error, evolutionChain, speciesNames, currentPokemonColor } = storeToRefs(usePokemonStore());
const { searchPokemon, getEvolution,  } = usePokemonStore();

let pokemonName = '';
const evolutions = null;

const search = async () => {
  await searchPokemon(pokemonName.toLowerCase())
    .then(() => {  
    })
    .catch((err) => {
      console.log(err);
    });       
  pokemonName = pokemonName;
};

</script>

<template>
  <form action="#" class="search__form" @submit.prevent="search">
    <input type="text" v-model="pokemonName" name="query" placeholder="Search for pokemon"/>
    <button type="submit" class="search__btn">Search</button>
  </form>
  <div v-if="loading">
    Loading Pokemon...
  </div>
  <div v-if="error">
    error
  </div>
  <div v-if="currentPokemon">
    <PokemonCard :pokemon="currentPokemon" :pokemonColor="currentPokemonColor"/>
    <EvolutionCard :evolutionChain="speciesNames" :searchPokemon="searchPokemon"/>
  </div>
</template>
