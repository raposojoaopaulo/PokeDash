<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchPage from './views/SearchPage.vue';

</script>

<template>
    <div class="home">
      <SearchPage />
    </div>
</template>

<style lang="scss" scoped>
.home{
  h1{
    color: $blue;
  }
  h2{
    color: $yellow;
  }
}
</style>
