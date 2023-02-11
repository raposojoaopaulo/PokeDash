import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    currentPokemon: null,
    speciesUrl: null,
    loading: false,
    error: null,
    evolutionChain: null,
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
      } catch(error) {
        this.currentPokemon = null;
        this.error = error;
      } finally {
        this.loading = false;
      }
    },


    async getEvolution() {
      console.log("entrei aqui")
      try {
        this.error = null;
        console.log("entrei try?", this.currentPokemon.species.url)
        const speciesResponse = await fetch(this.currentPokemon.species.url)
        console.log("especie", speciesResponse.url)
        const resp = await fetch(speciesResponse.url)
        .then((response) => response.json())
              .then((data) => { 
                const evolutionChainUrl = data.evolution_chain.url
                console.log("url?", evolutionChainUrl)

                const evolutionResponse = fetch(evolutionChainUrl)
                .then((response) => response.json())
                .then((data) => {
                  this.evolutionChain = data
                  console.log("evo?", this.evolutionChain)
                  return data;
                }
                )
                return evolutionResponse;

              })    

        return speciesResponse;
        
      } catch (error) {
        return error;
      }
    }

  }
});
