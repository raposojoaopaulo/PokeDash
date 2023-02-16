<script>
export default {
  props: {
    pokemon: Object,
    pokemonColor: String,
  },
  computed: {
    formattedName() {
      return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
    },
    formattedPokemonColor() {
      if (this.pokemonColor === "yellow") {
        return "color: #FFD700 ";
      } else {
        return {
         color: this.pokemonColor,
        };
      }      
    },
    formattedimg() {
      return (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`);
    },
  },
}; 
</script>

<template>
  <div class="pokemoncard">
    <div class="pokemoncard__img">
      <img :src="formattedimg" :alt="pokemon.name"/>
    </div>
    <div class="pokemoncard__info">
      <h2 :style="formattedPokemonColor"> {{ formattedName }}</h2>
 
        <div class="pokemoncard__info__stats_left">

          <p>Type: <span>
            {{ pokemon.types.map(type => type.type.name).join(' / ') }}
          </span> </p>
          <p>HP: <span>
            {{ pokemon.stats[0].base_stat }}
          </span> </p>
          <p>Defense: <span>
            {{ pokemon.stats[2].base_stat }}
          </span> </p>

        </div>
        <div class="pokemoncard__info__stats_right">

          <p>Attack: <span>
            {{ pokemon.stats[1].base_stat }}
          </span> </p>
          <p>Special Attack: <span>
            {{ pokemon.stats[3].base_stat }}
          </span> </p>
          <p>Special Defense: <span>
            {{ pokemon.stats[4].base_stat }}
          </span> </p>

        </div>

    </div>
  </div>
</template>


<style scoped>
</style>
