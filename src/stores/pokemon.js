import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore({
  id: 'pokemon',
  state: () => ({
    currentPokemon: null,
    speciesUrl: null,
    loading: false,
    error: null,
    evolutionChain: [],
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
          this.especiesUrl = json?.species?.url;
          console.log(`aqui tem url ${this.especiesUrl}`)
          return json;
        })
      } catch(error) {
        this.currentPokemon = null;
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async getEvolution(speciesUrl) {
      console.log("ESPECIES ROLAAAA", speciesUrl)
      try {
        this.error = null;
        this.currentPokemon = await fetch(espiciesUrl)
          .then((response) => response.json())
          .then(async (jsonResponse) => {
            console.log("o que é isso?", jsonResponse.data.evolution_chain.url)
            return await fetch(jsonResponse.data.evolution_chain.url)
              .then((response) => response.json())
              .then((data) => { console.log("chegou até aqui?", data); 
                this.evolutionChain = data
                return data; })
              .catch((error) => this.error = error);
          })
        // const response = await axios.get(especieUrl);
        // const evolutionChainUrl = response.data.evolution_chain.url
        // const evolutionResponse = await fetch(evolutionChainUrl);
        return evolutionResponse;
      } catch (error) {
        return error;
      }
    }
  }
});
