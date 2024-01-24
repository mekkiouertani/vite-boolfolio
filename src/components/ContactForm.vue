<template>
    <form @submit.prevent="submitForm" id="contactForm" data-sb-form-api-token="API_TOKEN">
        <!-- Name input-->
        <div class="form-floating mb-3">
            <input class="form-control" id="name" type="text" placeholder="Enter your name..."
                data-sb-validations="required" v-model="name" />
            <label for="name">Full name</label>
            <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.
            </div>
        </div>
        <!-- Email input-->
        <div class="form-floating mb-3">
            <input class="form-control" id="email" type="email" placeholder="name@example.com"
                data-sb-validations="required,email" v-model="email" />
            <label for="email">Email address</label>
            <div class="invalid-feedback" data-sb-feedback="email:required">An email is
                required.</div>
            <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.
            </div>
        </div>
        <!-- Address input-->
        <div class="form-floating mb-3">
            <input class="form-control" id="address" type="text" placeholder="Insert address" data-sb-validations="required"
                v-model="address" />
            <label for="address">Address </label>
            <div class="invalid-feedback" data-sb-feedback="address:required">A address is
                required.</div>
        </div>
        <!-- Message input-->
        <div class="form-floating mb-3">
            <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..."
                style="height: 10rem" data-sb-validations="required" v-model="message"></textarea>
            <label for="message">Message</label>
            <div class="invalid-feedback" data-sb-feedback="message:required">A message is
                required.</div>
        </div>
        <!-- Submit success message-->
        <!---->
        <!-- This is what your users will see when the form-->
        <!-- has successfully submitted-->
        <div class="d-none" id="submitSuccessMessage">
            <div class="text-center mb-3">
                <div class="fw-bolder">Form submission successful!</div>
                <!--  To activate this form, sign up at
                <br />
                <a
                    href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a> -->
            </div>
        </div>
        <!-- Submit error message-->
        <!---->
        <!-- This is what your users will see when there is-->
        <!-- an error submitting the form-->
        <div class="d-none" id="submitErrorMessage">
            <div class="text-center text-danger mb-3">Error sending message!</div>
        </div>
        <!-- Submit Button-->
        <div class="d-flex">
            <button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button>
            <button class="btn btn-secondary btn-lg " id="resetButton" type="reset">Reset</button>
        </div>

    </form>
</template>

<script>
import axios from 'axios';
import { store } from './../data/store.js';
export default {
    name: 'ContacForm',
    data() {
        return {
            store,
            name: '',
            email: '',
            address: '',
            message: '',
        }
    },
    methods: {
        submitForm() {
            const data = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message
            };
            axios.post(`${this.store.apiUrl}/contacts`, data).then((res) => {
                console.log(res.data);
                this.name = '';
                this.email = '';
                this.address = '';
                this.message = '';
            }).catch((err) => {
                console.log('error', err);
            });
        },
    },
    mounted() {

    },
}
</script>

<style lang="scss" scoped></style>