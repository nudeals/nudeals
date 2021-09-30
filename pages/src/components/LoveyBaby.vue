<template>
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <toolbar :toolbarData="toolbarData"></toolbar>
            </div>
        </header>

        <main>
            <highlight :highlightData="highlightData" :showBrochure="false" :showButton="false"></highlight>
            <showcase-no-price :showcaseData="showcaseData" title="Our Products"></showcase-no-price>
        </main>

        <page-footer></page-footer>

    </div>
</template>

<script>

    export default 
    {
        name: 'LoveyBaby',
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
                sellerPage: '',
                head: {
                    pageName: 'Nu Deals',
                    title: '',
                    description: '',
                    thumbnail: require('../assets/lovey-baby/lovey_baby_logo.jpg'),
                    url: this.sellerPage
                },
                highlightData: {
                    logo: require('../assets/lovey-baby/lovey_baby_logo.jpg'),
                    title: '',
                    highlight: '',
                    brochure: '',
                    bottom: '',
                    buttonText: '! לקבלת מבצעים נוספים לחצו כאן',
                    sellerPage: this.sellerPage
                },
                showcaseData: [
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/1.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/2.jpg'),
                        url: this.sellerPage
                    },                      
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/3.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/4.jpg'),
                        url: this.sellerPage
                    },           
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/5.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/6.jpg'),
                        url: this.sellerPage
                    },                      
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/7.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/8.jpg'),
                        url: this.sellerPage
                    },             
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/9.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/10.jpg'),
                        url: this.sellerPage
                    },           
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/11.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'No letter pink themed pacifier clip!',
                        note: '',
                        image: require('../assets/lovey-baby/12.jpg'),
                        url: this.sellerPage
                    }                   
                                                                                                         
                ],
                toolbarData: [ 
                    {
                        image: require('../assets/toolbar/telephone.png'),
                        url: 'tel:0534305115',
                        text: 'Phone'
                    },
                    {
                        image: require('../assets/toolbar/whatsapp.png'),
                        url: 'https://api.whatsapp.com/send?phone=972534305115',
                        text: 'WhatsApp'
                    }                                         
                ],
            };
        },        
    }
</script>

<style scoped>
    .site-header::before {
        background: #c29475;
        background: linear-gradient(159deg, #c29475 0%, #c29475 100%);
        transform: skewY(0);
        height: 550px;
    }
    @media (min-width: 641px) {    
        .site-header::before {
            height: 580px;
        }
    }    
</style>
