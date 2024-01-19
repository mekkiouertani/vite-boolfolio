<template>
  <section class="container pt-5">
    <h1>Titolo <i class="fa-solid fa-house"></i></h1>
    <CarouselComponent />
  </section>
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';

import CarouselComponent from './components/partials/CarouselComponent.vue';
export default {
  components: { CarouselComponent },
  name: 'App',
  data() {
    return {
      store,
    }
  },
  methods: {
    getAllProjects() {

    }
  },
  mounted() {
    this.getAllProjects()
  },
}
</script>

<style lang="scss" scoped>
@use '/src/assets/style/partials/_variables.scss' as *;

h1 {
  color: $primary-color !important;
}
</style>