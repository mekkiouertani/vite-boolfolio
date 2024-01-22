
import { store } from '@/data/store';
<template>
    <main class="flex-shrink-0">
        <section class="py-5">
            <div class="container px-5 mb-5">
                <div class="text-center mb-5">
                    <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projects</span></h1>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-11 col-xl-9 col-xxl-8">
                        <!-- Navigation-->
                        <div id="buttons" class="d-flex  justify-content-between mb-3">
                            <button @click="previousPage" class="next-prev-button">Indietro</button>
                            <h6 class="mt-4">Current Page: {{ store.currentPage }} of {{ store.lastPage }}</h6>
                            <button @click="nextPage" class="next-prev-button">Avanti</button>
                        </div>
                        <!-- CARD PROJECT -->
                        <CardComponent />
                        <!-- Navigation-->
                        <div id="buttons" class="d-flex  justify-content-between mb-3">
                            <button @click="previousPage" class="next-prev-button">Indietro</button>
                            <h6 class="mt-4">Current Page: {{ store.currentPage }} of {{ store.lastPage }}</h6>
                            <button @click="nextPage" class="next-prev-button">Avanti</button>
                        </div>
                        <!--  -->
                    </div>
                </div>
            </div>
        </section>
        <!-- Call to action section-->
        <section class="py-5 bg-gradient-primary-to-secondary text-white">
            <div class="container px-5 my-5">
                <div class="text-center">
                    <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
                    <a class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="contact.html">Contact me</a>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import CardComponent from '../components/CardComponent.vue';
import axios from 'axios';
import { store } from '../data/store.js';
import TopBar from '../components/TopBar.vue';
export default {
    components: { TopBar, CardComponent, },
    name: "AppProjects",
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
            }).catch((err) => {
                console.log(err);
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

<style lang="scss" scoped></style>