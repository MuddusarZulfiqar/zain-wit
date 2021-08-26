<template>
    <div class="targetMeasurement" role="region" :aria-label="ariaLabel">
        <div class="container">
            <div class="grid" data-grid-item-width="1/2" data-grid-item-gap="40">
                <div class="targetMeasurement__contents">
                    <h2 v-if="$i18n.locale=='en'" id="zainpioneer">{{ sectionTitle }}</h2>
                    <h2 v-if="$i18n.locale=='ar'" id="zainpioneer">{{ arabicSectionTitle }}</h2>
                    <p>
                        {{this.data.innerText}}
                    </p>
                </div>
                <div class="targetMeasurement__image">
                    <img src="@/assets/images/targetimg1.jpg" class="img-fluid " alt="targetimg1"/>
                    <img src="@/assets/images/targetimg2.jpg" class="img-fluid img-top" alt="targetimg2"/>
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
        arabicSectionTitle: String
    },
    data() {
        return {
            data:{
                en:{
                    innerText:"The pilot phase of the program starting (August 2021 – December 2021) will be selecting 5 mentees from each operation to join the program. We will be conducting focus group and feedback sessions with all stakeholders involved to gain better insights and set accurate targets.",
                },
                ar:{
                    innerText:"ستتضمن المرحلة التجريبية من البرنامج والتي تبدأ في الفترة من (أغسطس وحتى سبتمبر 2021) اختيار خمس متدربات من كل دولة للانضمام إلى البرنامج. وستنظم زين مجموعات مناقشة وستعقد جلسات للحصول على الآراء مع جميع أصحاب المصلحة المشاركين للوصول إلى فهم أفضل وتحديد الأهداف بدقة.",
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
        this.data = this.data.en :
        this.data = this.data.ar;
    }
}
</script>

<style lang="scss" scoped>
.targetMeasurement {
    padding: rem(65px) 0px rem(30px) 0;
    @media screen and (max-width:767px){
        padding:rem(35px) 0 rem(370px) 0;
    }
    @media screen and (max-width:450px){
        padding:rem(35px) 0 rem(300px) 0;
    }
     @media screen and (max-width:400px){
        padding:rem(35px) 0 rem(280px) 0;
    }
     @media screen and (max-width:380px){
        padding:rem(35px) 0 rem(260px) 0;
    }
     @media screen and (max-width:350px){
        padding:rem(35px) 0 rem(240px) 0;
    }
    position: relative;
     h2 {
            font-size: rem(45px);
            font-weight: 900;
            color: var(--primary);
            margin:rem(25px) 0;
            @media screen and (max-width: 991px) {
                font-size: rem(30px);
            }
        }
    .grid {
        @media screen and (max-width: 1500px) {
            grid-template-columns: 50% 30%;
        }
        @media screen and (max-width:1025px) {
            grid-template-columns: 50% 40%;
        }
        @media screen and (max-width: 767px) {
            grid-template-columns: 100%;
            > div {
                text-align: center;
               
            }
        }
        @media screen and (max-width:991px) and (min-width:576px)  {
            max-width: 98%;
            margin-left: auto;
            margin-right: auto;
            
            /deep/.sliderNavigation{
                margin-top: rem(40px);
            }
            .zainIntro__slider{
                &::after{
                    // bottom: -22px;
                }
            }
        }
    }
    &__contents {
        h2 {
            font-size: rem(35px);
            font-weight: 900;
            color: var(--secondary);
            text-transform: uppercase;
            margin-bottom: rem(25px);
            @media screen and (max-width: 991px) {
                font-size: rem(26px);
            }
        }
        p {
            color: #444444;
            font-size: rem(22px);
            font-weight: 600;
            max-width: 80%;
            line-height: 1.4;
            margin-bottom: rem(50px);
            @media screen and (max-width: 991px) {
                max-width: 100%;
            }
        }
        // @media screen and (max-width: 991px) {
        //     margin-bottom: rem(40px);
        // }
    }
    &__image{
        position: relative;
        img{
            position: absolute;
            right: 0;
            top: 0;
            z-index:2;
            &.img-top{
                z-index: 1;
                top: -10px;
                right: -10px;
            }
            @media screen and (max-width:767px){
                left: 50%;
                transform: translateX(-50%);
                right:auto;
                &.img-top{
                    right: auto;
                    left: 52%;
                }
            }
        }
       
    }
}
[lang='ar']{
    .targetMeasurement {
        &__image{
            img{
                left: 0;
                right:auto;
                &.img-top{
                    left: -10px;
                    right:auto;
                }
                @media screen and (max-width:767px){
                    left: 50%;
                    transform: translateX(-50%);
                    right:auto;
                    &.img-top{
                        right: auto;
                        left: 48%;
                    }
                }
            }
        
        }
    }
}
</style>
