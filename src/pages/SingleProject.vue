<template>
    <LoaderComponent v-if="!project" />
    <main v-else class="flex-shrink-0">
        <section class="py-5 container">
            <div class="text-center mb-5">
                <h2 v-if="project" class="display-5 fw-bolder mb-0">
                    <span class="text-gradient d-inline">{{ project.title }}</span>
                </h2>
            </div>
            <div class="row">
                <div class="col-12 col-lg-6 d-flex flex-column ">
                    <!-- CARD -->
                    <div class="card shadow border-0 rounded-4 mb-5">
                        <div class="card-body p-5">
                            <!-- Professional skills list-->
                            <div class="mb-5">
                                <div class="d-flex align-items-center mb-4">
                                    <div
                                        class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i class="bi bi-tools"></i>
                                    </div>
                                    <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Type</span></h3>
                                </div>
                                <div class="row row-cols-1 row-cols-md-3 mb-4">
                                    <div class="col mb-4 mb-md-0">
                                        <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">{{
                                            project.category.name }}</div>
                                    </div>
                                </div>
                            </div>
                            <!-- Languages list-->
                            <div class="mb-0">
                                <div class="d-flex align-items-center mb-4">
                                    <div
                                        class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                        <i class="bi bi-code-slash"></i>
                                    </div>
                                    <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Technologies</span>
                                    </h3>
                                </div>
                                <div class="row row-cols-1 row-cols-md-3 ">
                                    <div class="col mb-3 " v-for="technology in project.technologies" :key="technology.id">
                                        <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                            {{ technology.name }}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <p>{{ formatProjectBody(project.body) }}</p>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="d-flex flex-column jusitfy-content-between">
                        <div class="box-images">
                            <img class="img-fluid" v-if="project.gif" :src="`${store.basePathImage}${project.gif}`"
                                :alt="project.title">
                        </div>
                        <div class="box-images mt-5">
                            <img class="img-fluid" :src="`${store.basePathImage}${project.image}`" :alt="project.title">
                        </div>
                    </div>
                </div>
            </div>
            <!--  -->
            <router-link :to="{ name: 'single-project', params: { slug: 'disney-clone' } }">
                next proj
            </router-link>

            <!--  -->
        </section>
    </main>
</template>

<script>
import LoaderComponent from '../components/partials/LoaderComponent.vue';
import TopBar from '../components/TopBar.vue';
import axios from 'axios';
import { store } from '../data/store.js';
export default {
    components: { TopBar, LoaderComponent, },
    name: "SingleProject",
    data() {
        return {
            store,
            project: null,
        }
    }, methods: {
        getProjectData() {
            axios.get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                console.log(`nuovo`, res.data);
                if (res.data.results) {
                    this.project = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }

            });
        },
        formatProjectBody(text) {
            const textWithoutHtml = text.replace(/<[^>]*>?/gm, '');
            return textWithoutHtml;
        },

    },
    computed: {
    },
    created() {
        this.getProjectData();
        console.log(`slug`);
    },
    watch: {
        '$route'(to, from) {
            if (to.params.slug !== from.params.slug) {
                this.getProjectData();
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/_variables.scss' as *;

.box-images {
    overflow: hidden;
    border-radius: 20px;
    box-shadow: $shadow-box;

}
</style>