import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    currentPokemon: null,
    speciesUrl: null,
    loading: false,
    error: null,
    evolutionUrl: null,
    evolutionChain: null,
    speciesNames: null,
    pokemonName: '',
  }),
  getters: {

  },
  actions: {
    async searchPokemon(pokemonName) {
      this.loading = true;
      try {
        this.error = null;
        this.currentPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          this.speciesUrl = json?.species?.url;
          console.log(`aqui tem url ${this.speciesUrl}`)
          return json;
        })
        this.evolutionUrl = await fetch(this.speciesUrl)
        .then((response) => response.json())
        .then((data) => {
          const evolutionChainUrl = data.evolution_chain.url
          console.log("chainUrl?", evolutionChainUrl)
          return evolutionChainUrl;
        })
        this.evolutionChain = await fetch(this.evolutionUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log("evo?", data.chain)
          
          return data;
        })
        this.speciesNames = this.getSpeciesNames(this.evolutionChain.chain);
      } catch(error) {
        console.log("esse é o erro:", error);
        this.currentPokemon = null;
        this.error = error;
      } finally {
        this.loading = false;
      }
    },  


    getSpeciesNames(chain) {
      console.log("entrei na função")
      let species = [];
      species = [chain.species.name];
      console.log(`peguei o nome fora do if ${chain.species.name}`)
      console.log(`specie: ${species}`)
      
      for (let i = 0; i < chain.evolves_to.length; i++) {
        species = species.concat(this.getSpeciesNames(chain.evolves_to[i]));
        console.log(`peguei o name no for: ${species}`)
      }
      console.log(`specie final: ${typeof species}`)
      console.log(`specie final: ${species}`)
      return species;
    },
    


  },

});
