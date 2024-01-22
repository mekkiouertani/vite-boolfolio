<template>
    <section class="d-flex flex-column h-100 bg-light">
        <main class="flex-shrink-0">
            <TopBar />
            <h2 v-if="project" class="container"> {{ project.title }}</h2>
            <img class="img-fluid" v-if="project.gif" :src="`${store.basePathImage}${project.gif}`" :alt="project.title">
            <img class="img-fluid" v-else :src="`${store.basePathImage}${project.image}`" :alt="project.title">
        </main>
    </section>
</template>

<script>
import TopBar from '../components/template/partials/TopBar.vue';
import axios from 'axios';
import { store } from '../data/store.js';
export default {
    components: { TopBar, },
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
        }
    },
    created() {
        this.getProjectData();
    },
}
</script>

<style lang="scss" scoped></style>