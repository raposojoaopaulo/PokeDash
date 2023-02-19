import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    currentPokemon: null,
    currentPokemonColor: null,
    speciesUrl: null,
    loading: false,
    error: null,
    evolutionUrl: null,
    evolutionChain: null,
    speciesNames: null,
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
          this.speciesUrl = json?.species?.url;
          return json;
        })
        this.evolutionUrl = await fetch(this.speciesUrl)
        .then((response) => response.json())
        .then((data) => {
          const evolutionChainUrl = data.evolution_chain.url
          this.currentPokemonColor = data.color.name
          return evolutionChainUrl;
        })
        this.evolutionChain = await fetch(this.evolutionUrl)
        .then((response) => response.json())
        .then((data) => {          
          return data;
        })
        this.speciesNames = this.getSpeciesNames(this.evolutionChain.chain);
      } catch(error) {
        this.currentPokemon = null;
        this.error = error;
      } finally {
        this.loading = false;
      }
    },  

    getPokemonId(url) {
      const matches = url.match(/\/pokemon-species\/(\d+)/);
      if (matches && matches.length === 2) {
        return parseInt(matches[1], 10);
      }
      return null;
    },

    getSpeciesNames(chain) {
      let species = [];
      species = [{ name: chain.species.name, id: this.getPokemonId(chain.species.url) }];      
      for (let i = 0; i < chain.evolves_to.length; i++) {
        const evolvesTo = chain.evolves_to[i];
        species = species.concat(this.getSpeciesNames(evolvesTo));
      }
      return species;
    }
    
  },

});