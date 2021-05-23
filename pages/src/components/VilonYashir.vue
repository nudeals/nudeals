<template>
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <toolbar :toolbarData="toolbarData"></toolbar>
            </div>
        </header>

        <main>
            <highlight :highlightData="highlightData" :showBrochure="false" :showButton="false"></highlight>
            <!-- <section class="clients section container">
                <div class="container">
                    <div class="clients-inner section-inner has-top-divider">
                        <features :featureData="featureData"></features>
                    </div>
                </div>
            </section> -->

            <showcase-no-price :showcaseData="showcaseData" title="סוגי הוילונות"></showcase-no-price>

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
                sellerPage: 'https://www.nu-deals.co.il/il/vilon-yashir',
                head: {
                    pageName: 'Nu Deals',
                    title: 'Nudeals - מבצעי השבוע של אגוז מלך',
                    description: 'חנות פיצוחים ותבלינים טריים עם קלייה איכותית במקום. מחלקת מוצרי אפייה ומחלקת מוצרי סושי. כל מוצרי הגורמה במקום אחד.  אתם מוזמנים לבקר אותנו בכתובת נתן הנביא 6 בית שמש.',
                    thumbnail: require('../assets/vilon-yashir/vilon_yashir_logo_thumb.jpg'),
                    url: this.sellerPage
                },
                highlightData: {
                    logo: require('../assets/vilon-yashir/vilon_yashir_logo.jpg'),
                    title: 'וילונות בד, ונציאנים, קפלים ועוד',
                    highlight: '.חברת וילון ישיר היא חברת הוילונות הראשונה בישראל שמגיעה אליכם הביתה ופותחת לכם את המוצרים והקטלוגים אצלכם בבית. חברת “וילון ישיר” חלוצה בשיטת מכירת הווילונות בצורה ישירה בבית הלקוח. החברה פועלת עפ”י מנגנון תמחור דיפרנציאלי, בהתאם לנתוני כל לקוח. יתרון זה בצרוף בסיס עלויות נמוכות בהיעדר חנות פיזית ותשתית טכנולוגית מתקדמת, הן הסיבות לפער במחיר וברמת השירות לטובת הצרכן בחברה.המשך',
                    brochure: '',
                    bottom: '',
                    buttonText: '! לקבלת מבצעים נוספים לחצו כאן',
                    sellerPage: this.sellerPage
                },
                showcaseData: [
                    {
                        name:'וילונות גלילה',
                        note: '',
                        image: require('../assets/vilon-yashir/1.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות לפינת האוכל',
                        note: '',
                        image: require('../assets/vilon-yashir/2.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות לחדרי שינה',
                        note: '',
                        image: require('../assets/vilon-yashir/3.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות לסלון',
                        note: '',
                        image: require('../assets/vilon-yashir/4.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות קפלים',
                        note: '',
                        image: require('../assets/vilon-yashir/5.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון זברה',
                        note: '',
                        image: require('../assets/vilon-yashir/6.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון ונציאני',
                        note: '',
                        image: require('../assets/vilon-yashir/7.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות קפלים שטוחים',
                        note: '',
                        image: require('../assets/vilon-yashir/8.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות קפל בננה',
                        note: '',
                        image: require('../assets/vilon-yashir/9.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון רומאי',
                        note: '',
                        image: require('../assets/vilon-yashir/10.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות רינגים',
                        note: '',
                        image: require('../assets/vilon-yashir/11.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות כותרת קשתות',
                        note: '',
                        image: require('../assets/vilon-yashir/12.jpg'),
                        url: this.sellerPage
                    }                                                                                         
                ],
                toolbarData: [ 
                    {
                        image: require('../assets/toolbar/telephone.png'),
                        url: 'tel:0504020017',
                        text: 'התקשר עכשיו'
                    },
                    {
                        image: require('../assets/toolbar/whatsapp.png'),
                        url: 'https://api.whatsapp.com/send?phone=972504020017',
                        text: 'שלח וואטסאפ'
                    }                                         
                ],
            };
        },        
    }
</script>

<style scoped>
    .site-header::before {
        background: #850437;
        background: linear-gradient(159deg, #850437 0%, #850437 100%);
        transform: skewY(0);
        height: 550px;
    }
    @media (min-width: 641px) {    
        .site-header::before {
            height: 580px;
        }
    }    
</style>
