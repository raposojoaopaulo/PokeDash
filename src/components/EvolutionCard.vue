<script>

import { usePokemonStore } from '@/stores/pokemon';

const { getEvolutionChainNames } = usePokemonStore();

const evolutions = [];

  export default {
    
    props: {
      evolutionChain: Object,
    },

    methods: {      

      evolutions: getEvolutionChainNames(evolutionChain),

    },

//     methods: {

//       function getEvolutionChainNames(chain) {
//   console.log("entrei na função")
//       let species = [];
//       species = [chain.species.name];
//       console.log(`peguei o nome fora do if ${chain.species.name}`)
//       console.log(`specie: ${species}`)
      
//       for (let i = 0; i < chain.evolves_to.length; i++) {
//         species = species.concat(getSpeciesNames(chain.evolves_to[i]));
//         console.log(`peguei o name no for: ${species}`)
//       }
//       console.log(`specie final: ${typeof species}`)
//       return species;
// };

// evolutions = getEvolutionChainNames(evolutionChain);


//     },


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
