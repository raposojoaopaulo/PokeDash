<script setup>
import { usePokemonStore } from '@/stores/pokemon';
import { storeToRefs } from 'pinia';
import PokemonCard from '../components/PokemonCard.vue'
import EvolutionCard from '../components/EvolutionCard.vue'

const { currentPokemon, loading, error, evolutionChain, speciesUrl } = storeToRefs(usePokemonStore());
const { searchPokemon, getEvolution,  } = usePokemonStore();

let pokemonName = '';
const evolutions = null;

const search = () => {
  searchPokemon(pokemonName)
    .then(() => {
      console.log("to aqui?", speciesUrl)
      getEvolution();
      pokemonName = ''
      console.log("veio evolution?", evolutionChain.chain)
      evolutions = getEvolutionChainNames(evolutionChain.value);
    })
    .catch((err) => {
      console.log(err);
    });    
};

function getEvolutionChainNames(evolutions) {
  console.log("entrei na função")
  console.log("to recebendo?", evolutions)
      let species = [];
      species = [evolutions.species.name];
      console.log(`peguei o nome fora do if ${evolutions.species.name}`)
      console.log(`specie: ${species}`)
      
      for (let i = 0; i < evolutions.evolves_to.length; i++) {
        species = species.concat(getSpeciesNames(evolutions.evolves_to[i]));
        console.log(`peguei o name no for: ${species}`)
      }
      console.log(`specie final: ${typeof species}`)
      return species;
  };


</script>

<template>
  <form action="#" class="search__form" @submit.prevent="search">
    <input type="text" v-model="pokemonName" name="query" placeholder="Search for pokemon"/>
    <button type="submit" class="search__btn">Search</button>
  </form>
  <div v-if="loading">
    carregando os bixo!
  </div>
  <div v-if="error">
    error
  </div>
  <div v-if="currentPokemon">
    <PokemonCard :pokemonName="currentPokemon.name" :spriteAddress="currentPokemon.sprites.front_default" />
    <EvolutionCard :evolutionChain="evolutionChain"/>
  </div>
</template>
