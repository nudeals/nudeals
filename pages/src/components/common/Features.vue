<template>
    <div class="container-sm">
        <!-- <ul class="list-reset mb-0" v-for="(feature, index) in featureData" :key="index">
            <li>
                <img class="logo-brands" :src="feature.image">
            </li>
        </ul> -->

        <VueSlickCarousel v-bind="settings">
            <div v-for="(feature, index) in featureData" :key="index">
                <img class="logo-brands" :src="feature.image">
            </div>
        </VueSlickCarousel>

      

    </div>                          
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: "Features",
        components: { VueSlickCarousel },
        props: ["featureData"],
        data() {
            return {
                settings: {
                    "dots": true,
                    "focusOnSelect": true,
                    "centerMode": true,
                    "centerPadding": "10px",                    
                    "infinite": true,
                    "speed": 500,
                    "slidesToShow": 3,
                    "slidesToScroll": 3,
                    "touchThreshold": 5,
                    "responsive": [
                        {
                        "breakpoint": 1024,
                        "settings": {
                            "slidesToShow": 3,
                            "slidesToScroll": 3,
                            "infinite": true,
                            "dots": true
                        }
                        },
                        {
                        "breakpoint": 600,
                        "settings": {
                            "slidesToShow": 2,
                            "slidesToScroll": 2,
                            "initialSlide": 2
                        }
                        },
                        {
                        "breakpoint": 480,
                        "settings": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                        }
                    ]                    
                    }
            }
        }       
    }
</script>

<style >
   .slick-prev::before, .slick-next::before {
       color:  black !important;
   }
</style>
