<template>
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <toolbar :toolbarData="toolbarData"></toolbar>
            </div>
        </header>

        <main>
            <highlight :highlightData="highlightData" :showBrochure="true" :showButton="true"></highlight>
            
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
                    brochure: require('../assets/egoz-melech/366.jpg'),
                    bottom: '',
                    buttonText: '! לקבלת מבצעים נוספים לחצו כאן',
                    sellerPage: 'https://www.nu-deals.co.il/il/egoz-melech'
                },
                featureData: [
                    {
                        image: require('../assets/egoz-melech/feature_1.jpg'),
                    },
                    {
                        image: require('../assets/egoz-melech/feature_2.jpg'),
                    },
                    {
                        image: require('../assets/egoz-melech/feature_4.jpg'),
                    }                                                            
                ],
                showcaseData: [
                    {
                        name:'קצפת ריצ׳',
                        note: '3 + 1 מתנה',
                        price: '₪15',
                        image: require('../assets/egoz-melech/egoz_plats.jpg'),
                        url: this.sellerPage
                    },      
                    {
                        name:'אינסטנט פודינג וניל שוקולד',
                        note: '100 גר',
                        price: '₪3',
                        image: require('../assets/egoz-melech/pudding.jpg'),
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
                        name:'מארז גלילי ופל למילוי',
                        note: 'מארז - 14 יחידות',
                        price: '₪12.90',
                        image: require('../assets/egoz-melech/chocolate_rolls.jpg'),
                        url: this.sellerPage
                    },                                  
                    {
                        name:'אבקת אייס קפה',
                        note: '100 גר',
                        price: '₪3.90',
                        image: require('../assets/egoz-melech/ice_coffee.jpg'),
                        url: this.sellerPage
                    },             
                    {
                        name:'יינות טפרברג אסנס',
                        note: 'בקניית 2 בקבוקים קבלו מארז שישיות כוסות יין במתנה!',
                        price: '',
                        image: require('../assets/egoz-melech/165.jpg'),
                        url: this.sellerPage
                    },                    
                    {
                        name:'מגוון יינות עמוקה',
                        note: '',
                        price: 'מבצע 2 ב₪100',
                        image: require('../assets/egoz-melech/120.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'יינות טפרברג אימפריישיין',
                        note: '',
                        price: 'מבצע 3 ב₪100',
                        image: require('../assets/egoz-melech/121.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'יין רקנטי',
                        note: '',
                        price: 'מבצע 2 ב₪100',
                        image: require('../assets/egoz-melech/122.jpg'),
                        url: this.sellerPage
                    },
                                                                                                              
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
        background: #850437;
        background: linear-gradient(159deg, #e66721 0%, #35220e 100%);
        transform: skewY(0);
        height: 580px;        
    }
</style>
