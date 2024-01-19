<template>
  <section class="container pt-5">
    <h1>Portfolio <i class="fa-solid fa-house"></i></h1>
    <CarouselComponent />
    <!--   
      <ul>
    <li v-for="project in store.projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>
     <div class="d-flex">
      <button @click="previousPage">Indietro</button>
      <button @click="nextPage">Avanti</button>
    </div> 
    -->
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
      currentPage: 1,
      lastPage: 0,
    }
  },
  methods: {
    getAllProjects() {
      axios.get(store.apiUrl + '/projects', { params: { page: this.currentPage } }).then((res) => {
        console.log(res.data);
        this.store.projects = res.data.results.data;
        this.store.projectsLinks = res.data.results;
        console.log(`links`, this.store.projectsLinks);
        console.log(this.store.projects);
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page;
      });
    },
    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage = this.currentPage + 1;
      } else {
        this.currentPage = 1;
      }
      this.getAllProjects();
    },
    previousPage() {
      if (this.currentPage === 1) {
        this.currentPage = this.lastPage;
      } else {
        this.currentPage = this.currentPage - 1;
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