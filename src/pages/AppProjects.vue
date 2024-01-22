<template>
    <section class="d-flex flex-column h-100 bg-light">
        <main class="flex-shrink-0">
            <!-- Navigation-->
            <TopBar />

            <!-- Projects Section-->
            <section class="py-5">
                <div class="container px-5 mb-5">
                    <div class="text-center mb-5">
                        <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projects</span></h1>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-11 col-xl-9 col-xxl-8">
                            <!-- Project Card V-FOR-->
                            <!-- Buttons -->
                            <div id="buttons" class="d-flex  justify-content-between mb-3">
                                <button @click="previousPage" class="next-prev-button">Indietro</button>
                                <h6 class="mt-4">Current Page: {{ store.currentPage }} of {{ store.lastPage }}</h6>
                                <button @click="nextPage" class="next-prev-button">Avanti</button>
                            </div>
                            <!-- CARD PROJECT -->
                            <div v-for="project in store.projects" :key="project.id"
                                class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                <div class="card-body p-0">
                                    <div class="d-flex align-items-center">
                                        <div class="p-5">
                                            <h2 class="fw-bolder">
                                                <router-link
                                                    :to="{ name: 'single-project', params: { slug: project.slug } }">
                                                    {{ project.title }} </router-link>
                                            </h2>
                                            <p>{{ project.body }}</p>
                                            <h5>Type:
                                                <span class=" px-3 border-bottom"> {{ project.category.name }}</span>
                                            </h5>
                                            <h5>Technologies:
                                                <span v-for="technology in project.technologies" :key="technology.id"
                                                    class="px-3 border-bottom">{{ technology.name }}</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <img class="img-fluid" src="https://dummyimage.com/800x400/343a40/6c757d" alt="..." />
                                </div>
                            </div>
                            <!-- Buttons -->
                            <div id="buttons" class="d-flex  justify-content-between mb-3">
                                <button @click="previousPage" class="next-prev-button">Indietro</button>
                                <h6 class="mt-4">Current Page: {{ store.currentPage }}/{{ store.lastPage }}</h6>
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
        <!-- Footer-->
        <footer class="bg-white py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto">
                        <div class="small m-0">Copyright &copy; Your Website 2023</div>
                    </div>
                    <div class="col-auto">
                        <a class="small" href="#!">Privacy</a>
                        <span class="mx-1">&middot;</span>
                        <a class="small" href="#!">Terms</a>
                        <span class="mx-1">&middot;</span>
                        <a class="small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>

    </section>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store.js';
import TopBar from '../components/template/partials/TopBar.vue';
export default {
    components: { TopBar },
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