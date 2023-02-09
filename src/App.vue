<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue';

</script>

<template>
    <div class="home">
      <h1>PokeDash</h1>
      <h2>This is my PokeDash app</h2>
      <HomeView />
    </div>
</template>

<style lang="scss" scoped>
.home{
  background-color: $red;
  h1{
    color: $blue;
  }
  h2{
    color: $yellow;
  }
}
</style>
