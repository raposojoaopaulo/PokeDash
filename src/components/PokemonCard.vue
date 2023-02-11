<script>
  export default {
    props: {
      pokemonName: String,
      spriteAddress: String
    }
  }
</script>

<template>
  <div class="pokemoncard">
    <div class="pokemoncard__img">
      <img :src="spriteAddress" :alt="pokemonName" />
    </div>
    <h2>{{ pokemonName }}</h2>
  </div>
</template>


<style scoped>
</style>
