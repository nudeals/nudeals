<template>
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <toolbar :toolbarData="toolbarData"></toolbar>
            </div>
        </header>

        <main>
            <highlight :highlightData="highlightData" :showBrochure="false" :showButton="false"></highlight>
            <showcase-no-price :showcaseData="showcaseData" title="העבודה שלנו"></showcase-no-price>
        </main>

        <page-footer></page-footer>

    </div>
</template>

<script>

    export default 
    {
        name: 'CarAccessories',
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
                sellerPage: 'https://www.nudeals.co.il',
                head: {
                    pageName: 'Nu Deals',
                    title: 'המרכז לציפוים וסאונד',
                    description: 'חלונות כהים | אביזרי יוקרה לרכב | סאונד ומולטימדיה | ליטוש פנסים | ניקוי ריפודים | תאורה מתקדמת',
                    thumbnail: require('../assets/car-accessories/header.jpg'),
                    url: this.sellerPage
                },
                highlightData: {
                    logo: require('../assets/car-accessories/header.jpg'),
                    title: '050-9029905',
                    highlight: 'חלונות כהים | אביזרי יוקרה לרכב | סאונד ומולטימדיה | ליטוש פנסים | ניקוי ריפודים | תאורה מתקדמת',
                    brochure: '',
                    bottom: '',
                    buttonText: '! לקבלת מבצעים נוספים לחצו כאן',
                    sellerPage: this.sellerPage
                },
                showcaseData: [
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal1.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal2.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal3.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal4.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal5.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal6.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal7.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal8.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal9.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal10.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal11.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal12.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal13.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal14.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal15.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal16.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal17.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal18.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal19.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal20.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/gal21.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/picture1.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'',
                        note: '',
                        image: require('../assets/car-accessories/picture2.jpg'),
                        url: this.sellerPage
                    }                                                                                           
                ],
                toolbarData: [ 
                    {
                        image: require('../assets/toolbar/telephone.png'),
                        url: 'tel:0509029905',
                        text: 'התקשר עכשיו'
                    },
                    {
                        image: require('../assets/toolbar/whatsapp.png'),
                        url: 'https://api.whatsapp.com/send?phone=972509029905',
                        text: 'שלח וואטסאפ'
                    },            
                    {
                        image: require('../assets/toolbar/waze.png'),
                        url: 'https://waze.com/ul?ll=31.755059,34.992094&orig_lat=31.70702orig_lon=34.99965navigate=yes',
                        text: 'נווט אלי'
                    }                                                     
                ],
            };
        },        
    }
</script>

<style scoped>
    .site-header::before {
        background: #000000;
        background: linear-gradient(159deg, #000000 0%, #000000 100%);
        transform: skewY(0);
        height: 550px;
    }
    ::v-deep .logo {
        width: 18rem !important;
    }

    @media (min-width: 641px) {    
        .site-header::before {
            height: 580px;
        }
    }    
</style>
