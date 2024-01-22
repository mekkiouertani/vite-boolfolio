<template>
    <div v-for="project in store.projects" :key="project.id" class="card overflow-hidden shadow rounded-4 border-0 mb-5">
        <div class="card-body p-0">
            <div class="d-flex align-items-center">
                <div class="p-5">
                    <h2 class="fw-bolder">
                        <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                            class="text-gradient text-decoration-none ">
                            {{ project.title }} </router-link>
                    </h2>
                    <p>{{ project.body }}</p>
                    <h5>Type:
                        <span class="fs-4 text-gradient px-1"> {{ project.category.name }}</span>
                    </h5>
                    <h5>Technologies:
                        <span v-for="technology in project.technologies" :key="technology.id"
                            class="fs-4 text-gradient px-1">{{
                                technology.name }}, </span>
                    </h5>
                </div>
            </div>
            <img class="img-fluid" v-if="project.gif" :src="`${store.basePathImage}${project.gif}`" :alt="project.title">
            <img class="img-fluid" v-else :src="`${store.basePathImage}${project.image}`" :alt="project.title">
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name: 'CardComponent',
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped></style>