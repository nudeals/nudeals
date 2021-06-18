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
                    brochure: require('../assets/egoz-melech/egoz_349.jpg'),
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
                        name:'סוכריות צבעוניות לקישות',
                        note: '',
                        price: '₪2.9',
                        image: require('../assets/egoz-melech/egoz_candy.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'פיסטוק קלוף',
                        note: '',
                        price: '₪12.9',
                        image: require('../assets/egoz-melech/egoz_pistuk.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'מבחר חטיפי קוקוס ללא גלוטן',
                        note: '250 גר',
                        price: '₪9.90',
                        image: require('../assets/egoz-melech/egoz_cocus_mocha.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'שמפניית גביולי',
                        note: '',
                        price: '1 ב - ₪11.9',
                        image: require('../assets/egoz-melech/egoz_champaign.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'יינות באז',
                        note: '',
                        price: '2 ב - ₪55',
                        image: require('../assets/egoz-melech/egoz_buz.jpg'),
                        url: this.sellerPage
                    },


                    {
                        name:'חמוציות ללא סוכר',
                        note: '',
                        price: '₪3.9',
                        image: require('../assets/egoz-melech/egoz_cranberry.jpg'),
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
                        name:'סירופ תירס',
                        note: '',
                        price: '₪21.9',
                        image: require('../assets/egoz-melech/egoz_corn_syrup.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'קרם קוקוס',
                        note: '17-19 אחוז 400 גרם',
                        price: '₪8.9',
                        image: require('../assets/egoz-melech/egoz_coconut_cream.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'ויטאריז',
                        note: '',
                        price: '₪11.9',
                        image: require('../assets/egoz-melech/egoz_vitariz.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'גולדבומס',
                        note: '',
                        price: '₪11.9',
                        image: require('../assets/egoz-melech/egoz_almond_bliss_regular.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'גולדבומס וניל',
                        note: '',
                        price: '₪11.9',
                        image: require('../assets/egoz-melech/egoz_almond_bliss_vanila.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'אבקת שמרי בירה',
                        note: '',
                        price: '₪24.90',
                        image: require('../assets/egoz-melech/egoz_yeast_powder.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'חומץ בלסמי',
                        note: '',
                        price: '₪19.90',
                        image: require('../assets/egoz-melech/egoz_olitalia.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'לרום פאי שוקולד',
                        note: '',
                        price: '₪11.90',
                        image: require('../assets/egoz-melech/egoz_kemach_pie_crust.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'רד הוט',
                        note: '',
                        price: '₪25.90',
                        image: require('../assets/egoz-melech/egoz_franks_red_hot.jpg'),
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
