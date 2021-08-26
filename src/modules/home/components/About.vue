<template>
    <div class="about" role="region" :aria-label="ariaLabel">
        <div class="container">
            <div class="grid" data-grid-item-width="1/2" data-grid-item-gap="80">
                <div class="about__contents">
                    <h2 id="zainpioneer"  v-if="$i18n.locale=='en'" class="sectionTitle">{{sectionTitle}}</h2>
                    <h2 id="zainpioneer"  v-if="$i18n.locale=='ar'" class="sectionTitle">{{arabicSectionTitle}}</h2>
                    <p v-html="this.inerText.aboutInnerText">
                        <!-- {{this.inerText.aboutInnerText}} -->
                    </p>
                    <!-- <router-link
                        to="#"
                        class="btn btn-primary"
                        aria-describedby="zainpioneer"
                        >Explore More</router-link
                    > -->
                </div>
                <div class="about__slider">
                    <carousel :carousel-settings="carouselSettings" fraction-pagination slider-type="slider">
                        <div class="swiper-slide about__slider--slide">
                            <img
                                src="@/assets/images/ourpurpose-img.jpg" class="img-fluid"
                                alt="zain image 1"
                            />
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ariaLabel: String,
        sectionTitle: String,
        arabicSectionTitle:String

    },
    data() {
        return {
            inerText:{
                en:{
                    aboutInnerText:"To foster the development of girls and women in Science<i>,</i>Technology<i>,</i> Engineering and Math (STEM) by connecting them with experienced mentors and motivated mentees. By creating successful matches, the program will enable future generation of girls and women to enter the field with the promise of becoming change-makers in the industry.",
                },
                ar:{
                    aboutInnerText:"سعياً منا لتأهيل الكوادر النسائية اللائي تتراوح اعمارهن ما بين 18 عامًا وما فوق، ممن تخصصن في مجالات العلوم والتكنولوجيا والهندسة والرياضيات (STEM) وذلك بمشاركتهم في ورش تدريبية مع مدربين ذوي خبرة عريقة. سيكون هذا البرنامج أداة التمكين التي تمنح الاجيال القادمة من المرأة القدرة على اقتحام شتى المجالات على أمل أن يصبحن رائدات التغيير في المجالات ذات الطابع العلمي.",
                }
            },
            carouselSettings: {
                autoplay: {
                    disableOnInteraction: false,
                },
                effect: 'coverflow',
                speed: 800,
                loop: false,
            },
        }
    },
    created(){
        this.$i18n.locale=="en" ? 
        this.inerText = this.inerText.en :
        this.inerText = this.inerText.ar; 
    },
}
</script>

<style lang="scss" scoped>
.about {
    padding: rem(65px) 0px;
    position: relative;
    // background: var(--bg) url('../../../assets/images/zain-kuwait-bg.png') right
    //     center no-repeat;
    /deep/{
        .swiper-container-3d .swiper-slide-shadow-right {
            background-image: none !important;
            display:none !important;
        }
        .swiper-container-3d .swiper-slide-shadow-left, 
        .swiper-container-3d .swiper-slide-shadow-right, 
        .swiper-container-3d .swiper-slide-shadow-top, 
        .swiper-container-3d .swiper-slide-shadow-bottom{
             display:none !important;
        }
    }
    @media screen and (max-width: 991px) {
        padding: rem(35px) 0px;
    }
    .grid {
        @media screen and (max-width: 1500px) {
            grid-template-columns: 50% 40%;
        }
        @media screen and (max-width: 767px) {
            grid-template-columns: 100%;
            > div {
                text-align: center;
               
            }
        }
        @media screen and (max-width:991px) and (min-width:576px)  {
            // max-width: 90%;
            // margin-left: auto;
            // margin-right: auto;
            
            /deep/.sliderNavigation{
                margin-top: rem(40px);
            }
        }
    }
    &__contents {
        outline:none;
        /deep/ {
            .tabs{
                padding-left:rem(30px);
                .nav-pills {
                    li{
                        width:50%;
                    }
                }
                @media screen and (max-width:991px){
                    padding-left:0;
                    .nav-pills{
                        flex-direction: row;
                        li{
                            width:50%;
                        }
                    }
                }
            }
            .scrollArea{
                --h:125px;
                .__vuescroll {
                    .__bar-is-vertical{
                        background:#6e337a !important;
                    }
                }
            }
        }
        h2 {
            font-size: rem(35px);
            font-weight: 900;
            color: var(--secondary);
            text-transform: uppercase;
            margin-bottom: rem(35px);
            padding-top:0;
            @media screen and (max-width: 991px) {
                font-size: rem(25px);
                padding:0;
            }
        }
        p {
            color: #444444;
            font-size: rem(22px);
            font-weight: 600;
            line-height: 1.4;
            margin: rem(30px) 0 0 0;
            outline:none;
            @media screen and (max-width: 767px) {
                font-size: rem(18px);
            }
            i{
                font-style: normal;
            }
        }
        @media screen and (max-width: 767px) {
            margin-bottom: rem(25px);
        }
    }
    &__slider {
        position: relative;
        padding-top: rem(0px);
        /deep/{
            .swiper-container , .baseSliderWrapper{
                height:100%;
            }
        }
        
        @media screen and (max-width: 1025px){
            /deep/{
                #introSlider{
                background: url(../../../assets/images/homeIntro-responsive-bg.png) left top no-repeat;
                background-size: cover;
                }
            }
            
            video{
                display: none;
            }
        }
        &--slide {
            text-align: center;
            position: relative;
            img {
                margin: auto;
                position: static;
                left: 0;
                right: 0;
                bottom: 0;
                margin:auto;
                height:100%;
                @media screen and (max-width:992px) and (min-width:768px){
                    width:100%;
                    position:absolute;
                    object-fit: cover;
                    object-position: 100% top;
                }
                @media screen and (max-width: 767px){
                    max-height: 90%;
                    height:auto;
                }
            }
        }
        /deep/ {
            .sliderNavigation {
                position: static;
                margin-top: rem(60px);
                color: var(--primary);
                --arrow: var(--secondary);
                --border: var(--secondary);
                --pause: var(--primary);
                &__controls {
                    margin: auto;
                }
            }
        }
    }
    @media screen and (max-width:767px){
        /deep/{
            [data-grid-item-gap="80"]{
                --grid-item-gap: 0;
            }
        }
    }
}
[lang='ar']{
    .about {
        &__slider {
            &--slide {
                img {
                    transform: scaleX(-1);
                }
            }
        }
    }
}
</style>
