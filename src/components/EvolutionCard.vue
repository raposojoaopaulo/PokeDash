<script>

// import { usePokemonStore } from '@/stores/pokemon';
// const { evolutionChain, getEvolutionChainNames } = usePokemonStore();

const evolutions = [];

  export default {
    
    props: {
      evolutionChain: Object,
    },

    methods: {      

      // evolutions: getEvolutionChainNames(evolutionChain),

    },
  }
</script>

<template>
  <div class="evolutioncard">
    <!-- <div class="pokemoncard__img">
      <img :src="spriteAddress" :alt="pokemonName" />
    </div> -->
    <h2>Evoluitons</h2>

    <p v-if="evolutionChain">
      {{ evolutionChain }}
    </p>
  </div>
</template>


<style scoped>
</style>
