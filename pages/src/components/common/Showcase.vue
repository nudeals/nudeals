<template>
    <section class="features section text-center">
        <div class="container">
            <div class="features-inner section-inner">
                <h2 class="section-title mt-0">{{title}}</h2>
                <div class="features-wrap">
                    <div class="feature is-revealing" v-for="(showcase, index) in showcaseData" :key="index">
                        <a :href="showcase.url">
                        <div class="feature-inner">
                            <div class="feature-image">
                                <img :src="showcase.image">
                            </div>
                            <h4 class="feature-title h3-mobile">{{showcase.name}}</h4>
                            <p dir="rtl" class="text-sm">{{showcase.note}}</p>
                            <p class="feature-price">{{showcase.price}}</p>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>    
</template>

<script>
    export default {
        name: "Showcase",
        props: ["showcaseData", "title"],
        data() {
            return {}
        }                
    }
</script>

<style lang="scss" scoped>

</style>
