<template>
    <main class="flex-shrink-0">
        <section class="py-5">
            <div class="container px-5">
                <div class="bg-light rounded-4 py-5 px-4 px-md-5">
                    <div class="text-center mb-5">
                        <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i
                                class="bi bi-envelope"></i></div>
                        <h1 class="fw-bolder">Get in touch</h1>
                        <p class="lead fw-normal text-muted mb-0">Let's work together!</p>
                    </div>
                    <div class="row gx-5 justify-content-center">
                        <div class="col-lg-8 col-xl-6">
                            <!-- CONTACT FORM -->
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
export default {
    components: { ContactForm },
    name: 'ContactMail',
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped></style>