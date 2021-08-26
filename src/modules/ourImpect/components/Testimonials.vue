<template>
    <div class="testimonials" role="region" :aria-label="ariaLabel">
        <div class="container">
            <h2 v-if="$i18n.locale=='en'">{{ sectionTitle }}</h2>
            <h2 v-if="$i18n.locale=='ar'">{{ arabicSectionTitle }}</h2>
            <div class="testimonials__slider">
                <carousel navigation-theme="simple" :fraction-pagination="true" :carousel-settings="slideroption" navigation-layout="bottom">
                    <div class="swiper-slide"  v-for="data in this.innertext.testimonials" :key="data.index">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <div class="image">
                                    <img :src="require(`@/assets/images/ourImpect/${data.img}`)" class="img-fluid" alt="">
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="desc">
                                    <p class="intro">{{data.intro}}</p>
                                    <div>
                                        <p class="name">{{data.name}}</p>
                                        <p class="designation">{{data.designation}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Testimonials',
    props :{
        ariaLabel: String,
        sectionTitle: String,
        arabicSectionTitle: String
    },
    data(){
        return{
            slideroption: {
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            speed:900,
            spaceBetween:40,
            rtl: this.$i18n.locale=="en" ? false : true,
            },
            innertext:{
                en:{
                    testimonials:[
                        {
                            index:"1",
                            img:"testimonials1.jpg",
                            intro:"It's a place of a good knowledge, where you can transform this knowledge into an impact, where you meet great people and mentors, but above all it made my dream come true.",
                            name:"Abdulla abu karaki",
                            designation:"Idea owner"
                        },
                        {
                            index:"2",
                            img:"testimonials2.jpg",
                            intro:"Zainiac program is a real life-changer for us. It gave us the skills, tools & resources to make our dreams come true. We believe that Zainiac effect on us will go beyond Shareek.",
                            name:"Mohamed El Sammani",
                            designation:"Zainiac Winner - Shareek"
                        },
                        {
                            index:"3",
                            img:"testimonials1.jpg",
                            intro:"It's a place of a good knowledge, where you can transform this knowledge into an impact, where you meet great people and mentors, but above all it made my dream come true.",
                            name:"Abdulla abu karaki",
                            designation:"Idea owner"
                        },
                        {
                            index:"4",
                            img:"testimonials1.jpg",
                            intro:"It's a place of a good knowledge, where you can transform this knowledge into an impact, where you meet great people and mentors, but above all it made my dream come true.",
                            name:"Abdulla abu karaki",
                            designation:"Idea owner"
                        },
                        {
                            index:"5",
                            img:"testimonials1.jpg",
                            intro:"It's a place of a good knowledge, where you can transform this knowledge into an impact, where you meet great people and mentors, but above all it made my dream come true.",
                            name:"Abdulla abu karaki",
                            designation:"Idea owner"
                        },
                    ]
                },
                ar:{
                    testimonials:[
                        {
                            index:"1",
                            img:"testimonials1.jpg",
                            intro:"إنه مكان المعرفة الجيدة ، حيث يمكنك تحويل هذه المعرفة إلى تأثير ، حيث تقابل أشخاصًا وموجهين عظماء ، ولكن قبل كل شيء جعل حلمي حقيقة.",
                            name:"عبدالله ابو كركي",
                            designation:"صاحب الفكرة"
                        },
                        {
                            index:"2",
                            img:"testimonials2.jpg",
                            intro:"برنامج زينيك هو مغير حقيقي للحياة بالنسبة لنا. لقد منحنا المهارات والأدوات والموارد لتحقيق أحلامنا. نعتقد أن تأثير Zainiac علينا سيتجاوز الشريك.",
                            name:"محمد السماني",
                            designation:"الفائز من فئة Zainiac - شريك"
                        },
                        {
                            index:"3",
                            img:"testimonials1.jpg",
                            intro:"إنه مكان المعرفة الجيدة ، حيث يمكنك تحويل هذه المعرفة إلى تأثير ، حيث تقابل أشخاصًا وموجهين عظماء ، ولكن قبل كل شيء جعل حلمي حقيقة.",
                            name:"عبدالله ابو كركي",
                            designation:"صاحب الفكرة"
                        },
                        {
                            index:"4",
                            img:"testimonials1.jpg",
                            intro:"إنه مكان المعرفة الجيدة ، حيث يمكنك تحويل هذه المعرفة إلى تأثير ، حيث تقابل أشخاصًا وموجهين عظماء ، ولكن قبل كل شيء جعل حلمي حقيقة.",
                            name:"عبدالله ابو كركي",
                            designation:"صاحب الفكرة"
                        },
                        {
                            index:"5",
                            img:"testimonials1.jpg",
                            intro:"إنه مكان المعرفة الجيدة ، حيث يمكنك تحويل هذه المعرفة إلى تأثير ، حيث تقابل أشخاصًا وموجهين عظماء ، ولكن قبل كل شيء جعل حلمي حقيقة.",
                            name:"عبدالله ابو كركي",
                            designation:"صاحب الفكرة"
                        },
                    ]
                }
            }
        }
    },
    created(){
        this.$i18n.locale=="en" ? 
        this.innertext = this.innertext.en :
        this.innertext = this.innertext.ar;
    }
}
</script>

<style lang="scss" scoped>

.testimonials{
     padding: rem(30px) 0px rem(55px);
     background: #e5e5e5;
    position: relative;
    h2 {
        font-size: rem(45px);
        font-weight: 900;
        color: var(--primary);
        margin:rem(25px) 0;
        text-transform: capitalize;
        z-index: 2;
        position: relative;
        max-width: max-content;
        @media screen and (max-width: 991px) {
            font-size: rem(30px);
        }
    }
    /deep/ {
        .sliderNavigation{
            position: absolute;
            top: 15px;
            height: 0;
            right: 0;
            &__controls{
               z-index: -1;
                // max-width: 210px !important;
                color: var(--primary);
                --arrow:var(--primary);
                &--pagination {
                    flex: unset;
                    max-width: unset;
                    text-align: right;
                }
            }
            &.bottomNavigation {
                .sliderNavigation{
                    &__controls{
                        margin-top:0 !important;
                    }
                }
            }
            @media screen and (max-width:767px){
                position: static;
                &.bottomNavigation {
                    max-width:300px;
                    margin-top:rem(30px);
                   .sliderNavigation{
                       &__controls{
                           &--pagination{
                               flex: 0 0 25%;
                                max-width: 25%;
                           }
                       }
                   }
                }
                &__controls{
                    justify-content: space-around;
                }
            }
        }
    }
    .desc {
        .intro {
            position: relative;
            font-size: rem(22px);
            margin-bottom: rem(100px);
            padding: 0 rem(90px);
            &:after,
            &:before {
                content: "";
                position: absolute;
                background-image: url("data:image/svg+xml,%0A%3Csvg fill='%23d31b88' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 384 329.14'%3E%3Cg class='cls-2'%3E%3Cpath class='cls-3' d='M0,164.57V329.14H164.57V164.57H54.86A109.84,109.84,0,0,1,164.57,54.85V0C73.82,0,0,73.82,0,164.57' transform='translate(0 0)'/%3E%3Cpath class='cls-3' d='M384,54.86V0C293.25,0,219.43,73.82,219.43,164.57V329.14H384V164.57H274.29A109.83,109.83,0,0,1,384,54.86' transform='translate(0 0)'/%3E%3C/g%3E%3C/svg%3E");
                width: 50px;
                height: 45px;
                left: 0;
                top: -25px;
                background-size: cover;
                @media screen and (max-width:991px){
                    width: 38px;
                    height: 32px;
                }
            }
            &:after {
                right: 0;
                left: auto;
                transform: rotate(180deg);
                top: 0;
            }
        }
        .name {
            font-size: rem(24px);
            color: var(--secondary);
            line-height: 1;
            margin-bottom: rem(10px);
        }
        .designation {
            color: #4f4f4f;
            line-height: 1;
            margin: 0;
            font-weight: 900;
        }
        @media screen and (max-width:991px){
            padding-top:rem(45px);
            .intro{
                &:before{
                    top:-10px;
                }
            }
        }
        @media screen and (max-width:767px){
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            padding-top:rem(20px);
            .designation{
                text-align: center;
            }
            .intro{
                margin: rem(20px) 0 0 0;
                padding:0 rem(45px);
                &:after , &:before{
                    width: 20px;
                    height: 18px;
                }
            }
        }
    }
    @media screen and (max-width:767px){
        .row{
            .image{
                text-align: center;
                img{
                    max-height: 375px;
                }
            }
        }
    }
}
[lang='ar']{
    .testimonials{
        /deep/ {
            .sliderNavigation{
                left: 0;
                right:auto;
                &.bottomNavigation {
                    .sliderNavigation{
                        &__controls{
                            &--arrow{
                                transform: rotate(180deg);
                            }
                            &--pagination{
                                text-align: left;
                                direction:ltr;
                            }
                        }
                    }
                }
            }
        }
        .desc {
            .intro {
                &:after,
                &:before {
                    right: 0;
                    left:auto;
                    transform: rotate(180deg);
                }
                &:after {
                    left: 0;
                    right: auto;
                    transform: rotate(0deg);
                }
            }
        }
    }
}
</style>
