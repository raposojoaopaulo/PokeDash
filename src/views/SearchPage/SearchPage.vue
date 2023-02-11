<script>
import { getPokemon, getEvolutionChain } from '@/providers/api.js'

export default {
  data () {
    return {
      pokemonName: '',
      pokemon: null,
      pokemonError: null,
      evolutionError: null,
      evolutions: null,
      evChain: null
    }
  },
  methods: {
    searchPokemon() {
      let especieUrl = '';
      getPokemon(this.pokemonName)
        .then(response => {
          if (response.status === 200) {
            this.pokemon = response.data
            especieUrl = response.data.species.url;
            console.log(especieUrl) 
            this.pokemonName = '';
            console.log(response.data)
            console.log(response.status)
            getEvolution(especieUrl)
          } else {
            this.pokemonError = 'Pokemon Not Found'
          }
        })
    .catch(error => {
      this.error = 'Something went wrong'
      console.log(error)
    })

    const getEvolution = (evolutionChainUrl) => {
      getEvolutionChain(evolutionChainUrl)
        .then(response => {
          if (response.status === 200) {
            const evolutionChain = response.data.chain;
            this.evChain = response.data.chain;
            const speciesNames = getSpeciesNames(evolutionChain);
            this.evolutions = speciesNames;
            console.log(`é daqui ${speciesNames}`);
          } else {
            this.evolutionError = 'Evolution Not Found'
          }
        })
        .catch(error => {
          this.error = 'Something went wrong'
          console.log(error)
        })
    }

    function getSpeciesNames(chain) {
      console.log("entrei na função")

      let species = [];
      species = [chain.species.name];

      console.log(`peguei o nome fora do if ${chain.species.name}`)
      console.log(`specie: ${species}`)
      
      for (let i = 0; i < chain.evolves_to.length; i++) {
        species = species.concat(getSpeciesNames(chain.evolves_to[i]));
        console.log(`peguei o name no for: ${species}`)
      }

      console.log(`specie final: ${typeof species}`)
      return species;
    }

  },
  },
}
</script>

<template>
  <div class="poke-logo">
    <img src="public/logo/Pokedash.png" alt="logo" />
  </div>
  <div class="center-on-page">
    <form @submit.prevent="searchPokemon">
      <input required="" type="text" v-model="pokemonName" name="text" autocomplete="off" class="input" placeholder="Insert a pokemon name" />
      <button type="submit">
          Search
      </button>
    </form>

    <div v-if="pokemon">
      <h3>nome: {{ pokemon.name }}</h3>
      id: {{ pokemon.id }} | 
      peso: {{ pokemon.height }} | 
      base: {{ pokemon.base_experience }}

      <p v-if="evolutions">
        Evolution Chain: 
        <ul>
          <li v-for="specie in evolutions">
            {{ specie }}
          </li>
        </ul>
      </p>

    </div>
    <p v-else-if="pokemonError">
      {{ pokemonError }}
      {{ evolutionError }}
    </p>
  </div>
</template>

<style src="./style.scss" lang="scss" scoped />