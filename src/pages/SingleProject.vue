<template>
    <LoaderComponent v-if="!project" />
    <main v-else class="flex-shrink-0">
        <h2 v-if="project" class="container"> {{ project.title }}</h2>
        <img class="img-fluid" v-if="project.gif" :src="`${store.basePathImage}${project.gif}`" :alt="project.title">
        <img class="img-fluid" v-else :src="`${store.basePathImage}${project.image}`" :alt="project.title">
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
        }
    },
    created() {
        this.getProjectData();
    },
}
</script>

<style lang="scss" scoped></style>