<template>
    <section class="hero text-light text-center">
        <div class="container-sm">
            <div class="hero-inner">
                <p><img class="logo" :src="highlightData.logo">
                <h1 class="hero-title h2-mobile mt-0 is-revealing">{{highlightData.title}}</h1>
                <p class="hero-paragraph is-revealing">{{highlightData.highlight}}</p>
                <p class="hero-cta is-revealing"><a class="button button-secondary button-shadow" :href="highlightData.sellerPage">{{highlightData.buttonText}}</a></p>
                <div v-if="showBrochure" class="hero-image">
                    <a :href="highlightData.sellerPage"><img class="hero-media-img" :src="highlightData.brochure"></a>
                </div>
                <p class="bottom-paragraph mt-16">{{highlightData.bottom}}</p>
            </div>
        </div>
    </section>                   
</template>

<script>

    export default {
        name: "Hightlight",
        props: ["highlightData", "showBrochure"]
    }
</script>

<style lang="scss" scoped>

</style>
