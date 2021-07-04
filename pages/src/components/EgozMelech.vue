<template>
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <toolbar :toolbarData="toolbarData"></toolbar>
            </div>
        </header>

        <main>
            <highlight :highlightData="highlightData" :showBrochure="false" :showButton="true"></highlight>
            <section class="clients section container">
                <div class="container">
                    <div class="clients-inner section-inner">
                        <features :featureData="featureData"></features>
                    </div>
                </div>
            </section>

            <showcase :showcaseData="showcaseData" title="מבצעים"></showcase>

        </main>

        <page-footer></page-footer>

    </div>
</template>

<script>
    export default 
    {
        name: 'EgozMelech',
        metaInfo() {
            return { 
                title: this.head.title,
                meta: [
                    { name: 'description', content:  this.head.description},

                    { property: 'og:site_name', content: this.head.pageName},
                    { property: 'og:title', content: this.head.title},
                    { property: 'og:description', content: this.head.description},

                    { property: 'og:image', content: this.head.thumbnail},
                    { property: 'og:type', content: 'website'},    
                    { property: 'og:image:type', content: "image/jpeg"},

                    { property: 'og:image:width', content: "300"},
                    { property: 'og:image:height', content: "300"},
                    { property: 'og:url', content: this.sellerPage},

                    { name: 'twitter:title', content: this.head.title},
                    { property: 'twitter:description', content: this.head.description},                    
                    { name: 'twitter:image', content: this.head.thumbnail},                    

                ]
            }
        },          
        data() {
            return {
                sellerPage: 'https://www.nu-deals.co.il/il/egoz-melech',
                head: {
                    pageName: 'Nu Deals',
                    title: 'Nudeals - מבצעי השבוע של אגוז מלך',
                    description: 'חנות פיצוחים ותבלינים טריים עם קלייה איכותית במקום. מחלקת מוצרי אפייה ומחלקת מוצרי סושי. כל מוצרי הגורמה במקום אחד.  אתם מוזמנים לבקר אותנו בכתובת נתן הנביא 6 בית שמש.',
                    thumbnail: require('../assets/egoz-melech/logo_thumb.jpg'),
                    url: this.sellerPage
                },
                highlightData: {
                    logo: require('../assets/egoz-melech/logo.jpg'),
                    title: 'מבצעי השבוע',
                    highlight: '.חנות פיצוחים ותבלינים טריים עם קלייה איכותית במקום. מחלקת מוצרי אפייה ומחלקת מוצרי סושי. כל מוצרי הגורמה במקום אחד. אתם מוזמנים לבקר אותנו בכתובת נתן הנביא 6 בית שמש',
                    brochure: require('../assets/egoz-melech/egoz_356.jpg'),
                    bottom: '',
                    buttonText: '! לקבלת מבצעים נוספים לחצו כאן',
                    sellerPage: this.sellerPage
                },
                featureData: [
                    {
                        image: require('../assets/egoz-melech/feature_1.jpg'),
                    },
                    {
                        image: require('../assets/egoz-melech/feature_2.jpg'),
                    },
                    {
                        image: require('../assets/egoz-melech/feature_3.jpg'),
                    },
                    {
                        image: require('../assets/egoz-melech/feature_4.jpg'),
                    }                                                            
                ],
                showcaseData: [
                    {
                        name:'שקד מולבן טחון',
                        note: 'מקילו ומעלה',
                        price: 'ק"ג ₪49',
                        image: require('../assets/egoz-melech/319.jpg'),
                        url: this.sellerPage
                    },                    
                    {
                        name:'שקד מולבן',
                        note: 'פרוס - גפרור - חציים - שלם',
                        price: 'ק"ג ₪60',
                        image: require('../assets/egoz-melech/almond_bleached.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'אגוז מלך 80 אחוז',
                        note: 'מקילו ומעלה',
                        price: 'ק"ג ₪39',
                        image: require('../assets/egoz-melech/618.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'תמר יהלום גמבו',
                        note: 'מקילו ומעלה',
                        price: 'ק"ג ₪45',
                        image: require('../assets/egoz-melech/golden_dates.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'פיסטוק קלוף',
                        note: '100 גרם',
                        price: '₪9.9',
                        image: require('../assets/egoz-melech/egoz_cachew.jpg'),
                        url: this.sellerPage
                    },                    
                    {
                        name:'שקד טבעי טחון',
                        note: '400 גרם',
                        price: '₪18.9',
                        image: require('../assets/egoz-melech/almond_ground_natural.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'פקאן טבעי',
                        note: 'מחצי קילו',
                        price: '₪75 ק"ג',
                        image: require('../assets/egoz-melech/592.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'תמר זהב קילו',
                        note: '',
                        price: '₪24.9',
                        image: require('../assets/egoz-melech/paradise_medjoul_dates.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'קצפת ריצ׳',
                        note: '3 + 1 מתנה',
                        price: '₪15',
                        image: require('../assets/egoz-melech/egoz_plats.jpg'),
                        url: this.sellerPage
                    },                                        
                    {
                        name:'סוכריות צבעוניות לקישוט',
                        note: '',
                        price: '₪2.90',
                        image: require('../assets/egoz-melech/egoz_candy.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'גליליות למילוי',
                        note: 'מארז - 14 יחידות',
                        price: '₪9.90',
                        image: require('../assets/egoz-melech/chocolate_rolls.jpg'),
                        url: this.sellerPage
                    }                                                                                                                

                                                                                                              
                ],
                toolbarData: [ 
                    { 
                        image: require('../assets/toolbar/shopping-cart.png'),
                        url: 'https://www.nu-deals.co.il/PageView/sellerId/873afb94-4298-4e03-abed-80212918b206/order',
                        text: 'הזמן עכשיו'
                    },
                    {
                        image: require('../assets/toolbar/telephone.png'),
                        url: 'tel:025436226',
                        text: 'התקשר עכשיו'
                    },
                    {
                        image: require('../assets/toolbar/whatsapp.png'),
                        url: 'https://api.whatsapp.com/send?phone=97225436226',
                        text: 'שלח וואטסאפ'
                    },
                    {
                        image: require('../assets/toolbar/waze.png'),
                        url: 'https://www.waze.com/live-map/directions/israel/jerusalem-district/bet-shemesh/nachal-ein-gedi-st-33?navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location&to=place.ChIJeS5C6JDDAhURWhQfp3K7kBw',
                        text: 'נווט אלי'
                    }                                         
                ],
            };
        },        
    }
</script>

<style scoped>
    .site-header::before {
        background: #0f8a9d;
        background: linear-gradient(159deg, #e66721 0%, #35220e 100%);
    }
</style>
