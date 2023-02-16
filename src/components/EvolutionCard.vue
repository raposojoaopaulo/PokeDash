<script>

const urlSprite = null;

  export default {    
    props: {
      evolutionChain: Object,
    },
  computed: {
    formattedsprite() {
      return (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`);
    },

    },
    methods: {
      // async getEvolutionChainImage(pokemonName) {
      //   console.log("pokemonName", pokemonName);
      //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      //   const data = await response.json();
      //   console.log("no return tem?", data.sprites.front_default);
      //   return data.sprites.front_default;
      // },
    },
  };  
</script>

<!-- <template>
  <div class="evolutioncard">
    <h2 v-if="evolutionChain">Evoluitons</h2>
      <p v-for="{ name, id } in evolutionChain">
        <h3>{{ name }}</h3>
        <div class="pokemoncard__img">
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`" :alt="name" />
        </div>
      </p>
  </div>
</template> -->

<template>
  <div class="evolutioncard">
    <h2 v-if="evolutionChain" class="evolutioncard__title">Evolutions</h2>
      <div v-for="{ name, id } in evolutionChain" class="evolutioncard__item">
        <div class="pokemonevolution__img">
          <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`" :alt="name" />
        </div>
        <h3>{{ name }}</h3>
      </div>
  </div>
</template>


<style scoped>
</style>
