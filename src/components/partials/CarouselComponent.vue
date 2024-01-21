<template>
    <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide" class="mt-5">
        <Slide v-for="project in store.projects" :key="project.id" class="border">
            <div class="carousel__item">
                <h2 class="mt-2">{{ project.title }}</h2>
                <h5>{{ project.category.name }}</h5>
            </div>
        </Slide>
    </Carousel>

    <Carousel id="thumbnails" :items-to-show="4" :wrap-around="true" v-model="currentSlide" ref="carousel">
        <Slide v-for="project in store.projects" :key="project.id">
            <div class="carousel__item border" @click="slideTo(slide - 1)">{{ project.technologies[0].name }}</div>
        </Slide>
    </Carousel>
    <!-- <div v-for="project in store.projects" :key="project.id">
        <h2>{{ project.title }}</h2>
    </div> -->
</template>
  

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import { store } from './../../data/store.js';
export default {
    components: { Carousel, Slide, Navigation, Pagination },
    name: 'CarouselComponent',
    data() {
        return {
            store,
            currentSlide: 0,
        }
    },
    methods: {
        slideTo(val) {
            this.currentSlide = val
        },
    },
}
</script>

<style lang="scss" scoped>
#gallery {
    .carousel__item {
        height: 300px;
    }
}

#thumbnails {
    .carousel__item {
        min-height: 100px;
        cursor: pointer;
        min-width: 200px;
    }
}
</style>