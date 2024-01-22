<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
        <div class="container px-5">
            <a class="navbar-brand" href="#"><span class="fw-bolder text-primary">Portfolio</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                    class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link" active-class="active">Home</router-link>
                    </li>
                    <li class="nav-item" @click="selectView('resume')">
                        <a class="nav-link" href="#">Resume</a>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'projects' }"
                            active-class="active">Projects</router-link>
                    </li>
                    <li class="nav-item" @click="selectView('contact')">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { store } from './../../../data/store.js';
export default {
    name: "TopBar",
    data() {
        return {
            store,
            menu: [
                {
                    label: "Home",
                    name: "home",
                },
                {
                    label: "Projects",
                    name: "projects",
                }
            ],
        }
    },
    methods: {
        selectView(componentName) {
            this.store.selectedSection = componentName;
        }
    },
    mounted() {
    },
}
</script>

<style lang="scss" scoped></style>