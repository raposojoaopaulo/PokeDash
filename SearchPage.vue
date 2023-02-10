<script>
import { getPokemon, getEvolutionChain } from '@/providers/api.js'
import axios from 'axios'

export default {
  data () {
    return {
      pokemonName: '',
      pokemon: null,
      error: null,
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
            this.error = 'Pokemon Not Found'
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
            this.error = 'Pokemon Not Found'
          }
        })
        .catch(error => {
          this.error = 'Something went wrong'
          console.log(error)
        })
    }

    function getSpeciesNames(chain) {
      let species = [];
      if (chain) {
      for (let i = 0; i < chain.length; i++) {
      species.push(chain[i].species.name);
      console.log(`entrou aqui ${species}`)
      if (chain[i].evolves_to.length > 0) {
      species = species.concat(getSpeciesNames(chain[i].evolves_to));
      console.log(species)
      }
      }
      }

      return species;
      }

  },
  },
}
</script>

<template>
  <div>
    <form @submit.prevent="searchPokemon">
      <input type="text" v-model="pokemonName" placeholder="Search pokemon" />
      <button type="submit">Search</button>
    </form>
    
    <div v-if="pokemon">
      <h3>nome: {{ pokemon.name }}</h3>
      id: {{ pokemon.id }} | 
      peso: {{ pokemon.height }} | 
      base: {{ pokemon.base_experience }}

      {{ evChain }}

      <p v-if="evolutions">
        Evolution Chain: 
        <ul>
          <li v-for="specie in evolutions">
            {{ specie }}
          </li>
        </ul>
      </p>

    </div>
    <p v-else-if="error">
      {{ error }}
    </p>
  </div>
</template>
