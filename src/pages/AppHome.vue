<template>
    <main class="flex-shrink-0">
        <!-- Header-->
        <header class="py-5">
            <div class="container px-5 pb-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-xxl-5">
                        <!-- Header text content-->
                        <div class="text-center text-xxl-start">
                            <div class="badge bg-gradient-primary-to-secondary text-white mb-4">
                                <div class="text-uppercase">Full-Stack Web Developer</div>
                            </div>
                            <div class="fs-3 fw-light text-muted">I can help your business to</div>
                            <h1 class="display-3 fw-bolder mb-5"><span class="text-gradient d-inline">Get online and
                                    grow fast</span></h1>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <a class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                                    href="https://github.com/mekkiouertani">Github</a>
                                <router-link class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                                    :to="{ name: 'projects' }">Projects</router-link>
                            </div>
                        </div>
                    </div>
                    <!-- PROFILE IMAGE -->
                    <PictureHome />
                    <!--  -->
                </div>
            </div>
        </header>
        <!-- About Section-->
        <section class="bg-light py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-xxl-8">
                        <div class="text-center my-5">
                            <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Me</span></h2>
                            <p class="lead fw-light mb-4">My name is Mekki Ouertani, and I am a dedicated full stack web
                                developer with a passion for building responsive and user-friendly websites. Skilled in
                                both front-end and back-end languages. </p>

                            <p class="text-muted">I specialize in crafting dynamic web applications
                                that provide seamless user experiences. From conceptualizing creative solutions to
                                deploying robust architectures, I am committed to the full development lifecycle and the
                                creation of exceptional digital products.</p>
                            <div class="d-flex justify-content-center fs-2 gap-4">
                                <a class="text-gradient" href="#!"><i class="bi bi-twitter"></i></a>
                                <a class="text-gradient" href="#!"><i class="bi bi-linkedin"></i></a>
                                <a class="text-gradient" href="#!"><i class="bi bi-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import PictureHome from '../components/partials/PictureHome.vue';
import { store } from '../data/store.js';
export default {
    components: { PictureHome, },
    name: "AppHome",
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped></style>