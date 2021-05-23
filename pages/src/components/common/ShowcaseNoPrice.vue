<template>
    <section class="features section text-center">
        <div class="container">
            <div class="features-inner section-inner">
                <h2 class="section-title mt-0">{{title}}</h2>
                <div class="features-wrap">
                    <div class="feature is-revealing" v-for="(showcase, index) in showcaseData" :key="index">
                        <a :href="showcase.url">
                            <div class="feature-image" :style="'background-image: url('+showcase.image+');'">
                            </div>
                            <h4 class="feature-title h3-mobile">{{showcase.name}}</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>


<script>
    export default {
        name: "ShowcaseNoPrice",
        props: ["showcaseData", "title"],
        data() {
            return {}
        }                
    }
</script>

<style scoped>
    .feature-image  {
        font-size: 1rem;
        width: 100%;
        height: 320px;
        background-size: cover;
        background-position: center;
        box-shadow: 0 0 15px -5px #333;        
    }
</style>
