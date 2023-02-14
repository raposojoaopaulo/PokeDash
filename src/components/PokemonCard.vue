<script>
export default {
  props: {
    pokemon: Object,
  },
  computed: {
    formattedName() {
      return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
    },
  },
};
</script>

<template>
  <div class="pokemoncard">
    <div class="pokemoncard__img">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    </div>
    <div class="pokemoncard__info">
      <h2>{{ formattedName }}</h2>
      <div class="pokemoncard__info__types">
        <div v-if="pokemon.types.length > 0">
          <p>Type: {{ pokemon.types.map(type => type.type.name).join(' / ') }}</p>
          <p>HP: {{ pokemon.stats[0].base_stat }}</p>
          <p>Defense: {{ pokemon.stats[2].base_stat }}</p>
        </div>
      </div>
      <div class="pokemoncard__info__stats">
        <p>Attack: {{ pokemon.stats[1].base_stat }}</p>
        <p>Special Attack: {{ pokemon.stats[3].base_stat }}</p>
        <p>Special Defense: {{ pokemon.stats[4].base_stat }}</p>
      </div>
      </div>
      <div>

    </div>
  </div>
</template>


<style scoped>
</style>
