<template>
    <section class="hero text-light text-center">
        <div class="container-sm">
            <div class="hero-inner">
                <p><img class="logo" :src="highlightData.logo">
                <h1 class="hero-title h2-mobile mt-0 is-revealing">{{highlightData.title}}</h1>
                <p class="hero-paragraph is-revealing">{{highlightData.highlight}}</p>
                <p v-if="showButton" class="hero-cta is-revealing"><a class="button button-secondary button-shadow" :href="highlightData.sellerPage">{{highlightData.buttonText}}</a></p>
                <div v-if="showBrochure" class="hero-image">
                    <a :href="highlightData.sellerPage"><image-magnifier class="hero-media-img" :src="highlightData.brochure"/></a>
                </div>
                <p class="bottom-paragraph mt-16">{{highlightData.bottom}}</p>
            </div>
        </div>
    </section>                   
</template>

<script>
    import {ImageMagnifier} from 'vue-image-magnifier'
    export default {
        name: "Hightlight",
        components: { ImageMagnifier  },
        props: ["highlightData", "showBrochure", "showButton"]
    }
</script>

<style scoped>
    .hero-image {
        margin-top: 3rem;
    }
</style>
