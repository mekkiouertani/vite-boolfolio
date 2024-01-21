<template>
  <!-- <div class="d-flex">
    <button @click="previousPage">Indietro</button>
    <button @click="nextPage">Avanti</button>
  </div> -->
  <!--   <ul>
    <li v-for="project in store.projects" :key="project.id">
      {{ project.title }}
    </li>
  </ul> -->
  <IndexTemplate v-if="store.selectedSection === 'index'" />
  <ProjectsTemplate v-if="store.selectedSection === 'projects'" />
  <ContactTemplate v-if="store.selectedSection === 'contact'" />
  <ResumeTemplate v-if="store.selectedSection === 'resume'" />
  <!-- <section class="container pt-5"> -->
  <!-- <h1>Boolfolio <i class="fa-solid fa-book"></i></h1> -->
  <!-- <CarouselComponent /> -->
</template>

<script>
import { store } from './data/store.js';
import axios from 'axios';

import ResumeTemplate from './components/template/ResumeTemplate.vue';
import ContactTemplate from './components/template/ContactTemplate.vue';
import ProjectsTemplate from './components/template/ProjectsTemplate.vue';
import IndexTemplate from './components/template/IndexTemplate.vue';
import CarouselComponent from './components/partials/CarouselComponent.vue';
export default {
  components: { CarouselComponent, ContactTemplate, IndexTemplate, ProjectsTemplate, ResumeTemplate },
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