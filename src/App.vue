<template>
  <div class="d-flex">
    <button @click="previousPage">Indietro</button>
    <button @click="nextPage">Avanti</button>
  </div>
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
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + '/projects', { params: { page: this.store.currentPage } }).then((res) => {
        console.log(res.data);
        this.store.projects = res.data.results.data;
        this.store.projectsLinks = res.data.results;
        console.log(`links`, this.store.projectsLinks);
        console.log(this.store.projects);
        this.store.currentPage = res.data.results.current_page;
        this.store.lastPage = res.data.results.last_page;
      });
    },
    nextPage() {
      if (this.store.currentPage < this.store.lastPage) {
        this.store.currentPage = this.store.currentPage + 1;
      } else {
        this.store.currentPage = 1;
      }
      this.getAllProjects();
    },
    previousPage() {
      if (this.store.currentPage === 1) {
        this.store.currentPage = this.store.lastPage;
      } else {
        this.store.currentPage = this.store.currentPage - 1;
      }
      this.getAllProjects();
    },

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