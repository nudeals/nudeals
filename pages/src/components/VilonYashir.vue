<template>
    <div class="body-wrap boxed-container">
        <header class="site-header">
            <div class="container">
                <toolbar :toolbarData="toolbarData"></toolbar>
            </div>
        </header>

        <main>
            <highlight :highlightData="highlightData" :showBrochure="false" :showButton="false"></highlight>
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
                    title: 'וילון ישיר - החנות אצלכם בבית - וילונות בד, ונציאנים',
                    description: 'חברת וילון ישיר היא חברת הוילונות הראשונה בישראל שמספקת את שירותיה בבית הלקוח לכל אורך התהליך: משלב הבחירה, התכנון והתקנת הוילונות לשביעות רצון הלקוחות!',
                    thumbnail: require('../assets/vilon-yashir/vilon_yashir_logo_thumb.jpg'),
                    url: this.sellerPage
                },
                highlightData: {
                    logo: require('../assets/vilon-yashir/vilon_yashir_logo.jpg'),
                    title: 'וילונות בד, ונציאנים, קפלים ועוד',
                    highlight: '.חברת וילון ישיר היא חברת הוילונות הראשונה בישראל שמגיעה אליכם הביתה ופותחת לכם את המוצרים והקטלוגים אצלכם בבית. חברת “וילון ישיר” חלוצה בשיטת מכירת הווילונות בצורה ישירה בבית הלקוח. החברה פועלת עפ”י מנגנון תמחור דיפרנציאלי, בהתאם לנתוני כל לקוח. יתרון זה בצרוף בסיס עלויות נמוכות בהיעדר חנות פיזית ותשתית טכנולוגית מתקדמת, הן הסיבות לפער במחיר וברמת השירות לטובת הצרכן בחברה',
                    brochure: '',
                    bottom: '',
                    buttonText: '! לקבלת מבצעים נוספים לחצו כאן',
                    sellerPage: this.sellerPage
                },
                showcaseData: [
                    {
                        name:'וילון בד קפלים עם כותרת לחדר שינה',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_1.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון בד קפלים לסלון עם זוית',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_2.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון קפלים בד שקוף לחדר שינה',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_3.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות בד שקוף לבד לסלון עם מנועים חשמליים',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_4.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון בד פינתי לחדר שינה',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_5.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון קפלים עם כותרת קשת פתוחה לפינת אוכל',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_6.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות בד שקוף לחדר שינה',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_7.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילונות בד קפלים שקופים עם כותרת קשת פתוחה לסלון',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_9.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון בד לסלון באורך שלוש מטר',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_10.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון קפלים  לפינת אוכל עם כותרת',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_11.jpg'),
                        url: this.sellerPage
                    },
                    {
                        name:'וילון בד קפלים שקוף עם כותרות לפינת אוכל',
                        note: '',
                        image: require('../assets/vilon-yashir/vilon_yashir_12.jpg'),
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
