<template>
    <section class="features section text-center">
        <div class="container">
            <div class="features-inner section-inner has-top-divider">
                <h2 class="section-title mt-0">מבצעים</h2>
                <div class="features-wrap">
                    <div class="feature is-revealing" v-for="(deal, index) in dealData" :key="index">
                        <a :href="sellerPage">
                        <div class="feature-inner">
                            <div class="feature-image">
                                <img :src="deal.image">
                            </div>
                            <h4 class="feature-title h3-mobile">{{deal.name}}</h4>
                            <p dir="rtl" class="text-sm">{{deal.note}}</p>
                            <p class="feature-price">{{deal.price}}</p>
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
        name: "Toolbar",
        props: ["dealData"],
        data() {
            return {
                sellerPage: 'https://www.nu-deals.co.il/il/egoz-melech'
            }
        }                
    }
</script>

<style lang="scss" scoped>

</style>
