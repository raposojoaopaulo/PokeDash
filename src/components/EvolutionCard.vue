<script>

  export default {
    
    props: {
      evolutionChain: Object,
    },

  }
</script>

<template>
  <div class="evolutioncard">
    <!-- <div class="pokemoncard__img">
      <img :src="spriteAddress" :alt="pokemonName" />
    </div> -->
    <h2 v-if="evolutionChain">Evoluitons</h2>
      <p v-for="name in evolutionChain">
        <h3>{{ name }}</h3>
      </p>

  </div>
</template>


<style scoped>
</style>
