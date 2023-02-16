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
    formattedHeight: function () {
      return this.pokemon.height / 10 + "m";
    },
    formattedweight: function () {
      return this.pokemon.weight / 10 + "Kg";
    },
    formattedPokemonColor() {
      if (this.pokemonColor === "yellow") {
        return "#FFD700";
      } else {
        return this.pokemonColor;
      }      
    },
    formattedimg() {
      return (`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`);
    },
    externalLink() {
      return `https://bulbapedia.bulbagarden.net/wiki/${this.pokemon.name}_(Pokémon)`;
    },
  },
  methods: {
    getStatBarBackground(statValue) {
      const percentage = Math.round((statValue / 100) * 100);
      const color1 = this.formattedPokemonColor;
      const color2 = "#66b3ff";
      return `linear-gradient(to right, ${color1} 0%, ${color1} ${percentage}%, ${color2} ${percentage}%, ${color2} 100%)`;
    },

  },
}; 
</script>

<template>
  <div class="pokemoncard">
    <div class="pokemoncard__img">
      <a :href="externalLink" target="_blank">
        <img :src="formattedimg" :alt="pokemon.name"/>
      </a>
    </div>
    <div class="pokemoncard__info">
      <h2 :style="{ color: formattedPokemonColor }">{{ formattedName }}</h2> 
      <div class="pokemoncard__info__tagline">
        Type: <span>
          {{ pokemon.types.map(type => type.type.name).join(' / ') }}
        </span>  
        Weight: <span>
          {{ formattedweight }}
        </span> 
        Height: <span>
          {{ formattedHeight }}
        </span>
      </div>
      <div class="pokemoncard__info__stats">
        <div class="pokemoncard__info__stats__item">
          <p>{{ pokemon.stats[0].stat.name }}:</p>
          <div class="pokemoncard__info__stats__statbar" :style="{ background: getStatBarBackground(pokemon.stats[0].base_stat) }"></div>
          <span class="pokemoncard__info__stats__value">{{ pokemon.stats[0].base_stat }}</span>
        </div>
        <div class="pokemoncard__info__stats__item">
          <p>{{ pokemon.stats[1].stat.name }}:</p>
          <div class="pokemoncard__info__stats__statbar" :style="{ background: getStatBarBackground(pokemon.stats[1].base_stat) }"></div>
          <span class="pokemoncard__info__stats__value">{{ pokemon.stats[1].base_stat }}</span>
        </div>
        <div class="pokemoncard__info__stats__item">
          <p>{{ pokemon.stats[2].stat.name }}:</p>
          <div class="pokemoncard__info__stats__statbar" :style="{ background: getStatBarBackground(pokemon.stats[2].base_stat) }"></div>
          <span class="pokemoncard__info__stats__value">{{ pokemon.stats[2].base_stat }}</span>
        </div>
        <div class="pokemoncard__info__stats__item">
          <p>{{ pokemon.stats[3].stat.name }}:</p>
          <div class="pokemoncard__info__stats__statbar" :style="{ background: getStatBarBackground(pokemon.stats[3].base_stat) }"></div>
          <span class="pokemoncard__info__stats__value">{{ pokemon.stats[3].base_stat }}</span>
        </div>
        <div class="pokemoncard__info__stats__item">
          <p>{{ pokemon.stats[4].stat.name }}:</p>
          <div class="pokemoncard__info__stats__statbar" :style="{ background: getStatBarBackground(pokemon.stats[4].base_stat) }"></div>
          <span class="pokemoncard__info__stats__value">{{ pokemon.stats[4].base_stat }}</span> 
        </div>
        <div class="pokemoncard__info__stats__item">
          <p>{{ pokemon.stats[5].stat.name }}:</p>
          <div class="pokemoncard__info__stats__statbar" :style="{ background: getStatBarBackground(pokemon.stats[5].base_stat) }"></div>
          <span class="pokemoncard__info__stats__value">{{ pokemon.stats[5].base_stat }}</span>
        </div>
      </div>          
    </div>
  </div>
</template>


<style scoped>
</style>
