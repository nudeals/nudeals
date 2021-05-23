<template>
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <toolbar :toolbarData="toolbarData"></toolbar>
            </div>
        </header>

        <main>
            <highlight :highlightData="highlightData"></highlight>
            <section class="clients section">
                <div class="container">
                    <div class="clients-inner section-inner has-top-divider">
                        <features :featureData="featureData"></features>
                    </div>
                </div>
            </section>

            <deals :dealData="dealData"></deals>

        </main>

        <page-footer></page-footer>

    </div>
</template>

<script>
    export default 
    {
        name: 'Contact',
        data() {
            return {
                sellerPage: 'https://www.nu-deals.co.il/il/egoz-melech',
                highlightData: {
                    logo: require('../assets/egoz-melech/logo.jpg'),
                    title: 'מבצעי השבוע',
                    highlight: '.חנות פיצוחים ותבלינים טריים עם קלייה איכותית במקום. מחלקת מוצרי אפייה ומחלקת מוצרי סושי. כל מוצרי הגורמה במקום אחד. אתם מוזמנים לבקר אותנו בכתובת נתן הנביא 6 בית שמש',
                    brochure: require('../assets/egoz-melech/egoz_349.jpg'),
                    bottom: 'לרגל חג השבועות מבצעים במחלקת אפייה',
                    buttonText: 'לקבלת מבצעים נוספים לחצו כאן',
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
                dealData: [
                    {
                        name:'קצפת ריצי',
                        note: '3 + 1 מתנה',
                        price: '₪15',
                        image: require('../assets/egoz-melech/plats.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'פאי לעוגות',
                        note: '',
                        price: '₪19.9',
                        image: require('../assets/egoz-melech/pie_crust.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'אבקת קקאו דל שומן',
                        note: 'ל 1 ק"ג',
                        price: '₪9.9',
                        image: require('../assets/egoz-melech/chocolate_powder.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'אבקת נוגט',
                        note: 'ל 2 יחידות של 100 גרם',
                        price: '₪17.9',
                        image: require('../assets/egoz-melech/nogut.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'חמוציות ללא סוכר',
                        note: 'ל 100 גרם',
                        price: '₪3.9',
                        image: require('../assets/egoz-melech/cranberry.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'אבקה להכנת אייס קפה',
                        note: 'ל 100 גרם',
                        price: '₪3.9',
                        image: require('../assets/egoz-melech/ice_coffee.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'אבקה להכנת אייס קפה',
                        note: 'ל 1 קג',
                        price: '₪29.9',
                        image: require('../assets/egoz-melech/ice_coffee.jpg'),
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
