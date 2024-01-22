<template>
  <section class="d-flex flex-column h-100 bg-light">
    <Topbar />
    <router-view></router-view>
    <FooterComponent />
  </section>
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';


import Topbar from './components/TopBar.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  components: { Topbar, FooterComponent },
  name: 'App',
  data() {
    return {
      store,
    }
  },

}
</script>

<style lang="scss" scoped>
@use '/src/assets/style/partials/_variables.scss' as *;

h1 {
  color: $primary-color !important;
}
</style>