<template>
    <div class="pressRelease" :area-label="ariaLabel">
        <h2 class="sectionTitle">{{ sectionTitle }}</h2>
        <carousel
            :fractionPagination="true"
            :carousel-settings="carouselSettings"
            slider-type="slider"
        >
            <div
                class="swiper-slide pressRelease__item"
                v-for="(item, index) in pressRelease"
                :key="index"
            >
                <div class="grid" data-grid-item-gap="40">
                    <div class="pressRelease__item--contents">
                        <div class="pressRelease__item--date">
                            {{ item.date }}
                        </div>
                        <h3 class="pressRelease__item--title" id="pressrelease">
                            {{ item.title }}
                        </h3>
                        <p class="pressRelease__item--detail">
                            {{ item.detail }}
                        </p>
                        <div class="button-row">
                            <router-link
                                to="#"
                                class="btn btn-primary"
                                aria-describedby="pressrelease"
                                >Explore More</router-link
                            >
                        </div>
                    </div>
                    <div class="pressRelease__item--image">
                        <img
                            :src="require(`@/assets/images/${item.image}`)"
                            class="img-fluid"
                            :alt="item.title"
                        />
                    </div>
                </div>
            </div>
        </carousel>
    </div>
</template>

<script>
export default {
    props: {
        sectionTitle: String,
        ariaLabel: String,
    },
    data() {
        return {
            carouselSettings: {
                slidesPerView: 1,
                // autoplay: {
                //     delay: 3500,
                //     disableOnInteraction: true
                // },
                autoplay: false,
                speed: 1500,
                spaceBetween: 30,
                observer: true,
                observeParents: true,
            },
            pressRelease: [
                {
                    date: '5 June-2020',
                    title: 'Zain Saudi Arabia generates SAR 164 million in profits during first-half of 2020 1',
                    detail: 'Zain Saudi Arabia (Zain KSA) has achieved notable financial results during the first six months of the year ending June 30, 2020, recording a net profit of SAR 164 million on revenues of SAR 3,928 million. This performance reflects the company’s solid fiscal trend despite COVID-19 related impacts. This impact has been partially absorbed by SAR 125 million decrease in operating expenses (Opex) in Q2 2020  because of the company’s  efficiency drive and better cost management to limit the impact of the pandemic. ',
                    image: 'home-pressrelease-item.png',
                },
                {
                    date: '5 June-2020',
                    title: 'Zain Saudi Arabia generates SAR 164 million in profits during first-half of 2020 2',
                    detail: 'Zain Saudi Arabia (Zain KSA) has achieved notable financial results during the first six months of the year ending June 30, 2020, recording a net profit of SAR 164 million on revenues of SAR 3,928 million. This performance reflects the company’s solid fiscal trend despite COVID-19 related impacts. This impact has been partially absorbed by SAR 125 million decrease in operating expenses (Opex) in Q2 2020  because of the company’s  efficiency drive and better cost management to limit the impact of the pandemic. ',
                    image: 'home-pressrelease-item.png',
                },
                {
                    date: '5 June-2020',
                    title: 'Zain Saudi Arabia generates SAR 164 million in profits during first-half of 2020 3',
                    detail: 'Zain Saudi Arabia (Zain KSA) has achieved notable financial results during the first six months of the year ending June 30, 2020, recording a net profit of SAR 164 million on revenues of SAR 3,928 million. This performance reflects the company’s solid fiscal trend despite COVID-19 related impacts. This impact has been partially absorbed by SAR 125 million decrease in operating expenses (Opex) in Q2 2020  because of the company’s  efficiency drive and better cost management to limit the impact of the pandemic. ',
                    image: 'home-pressrelease-item.png',
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.pressRelease {
    position: relative;
    .sectionTitle {
        color: #fff;
        margin-bottom: rem(40px);
        text-transform: uppercase;
    }
    &__item {
        .grid {
            grid-template-columns: 1fr 400px;
            @media screen and (max-width:900px){
               grid-template-columns: 1fr 320px; 
            }
            @media screen and (max-width: 767px) {
                grid-template-columns: 1fr;
                .pressRelease__item--contents {
                    margin-bottom: rem(30px);
                }
            }
        }
        &--date {
            color: #e9da2f;
            font-size: rem(24px);
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: rem(20px);
            @media screen and (max-width:767px){
                font-size:rem(20px);
            }
        }
        &--title {
            color: #67bbe9;
            font-size: rem(30px);
            font-weight: 900;
            text-transform: uppercase;
            margin-bottom: rem(35px);
            @include truncate(2);
            @media screen and (max-width:767px){
                font-size:rem(25px);
            }
        }
        &--detail {
            font-size: rem(22px);
            font-weight: 600;
            color: #fff;
            line-height: 1.3;
            @include truncate(6, 1.3);
            @media screen and (max-width:767px){
                font-size:rem(18px);
            }
        }
        &--image{
            @media screen and (max-width:767px){
                text-align: center;
            }
        }
        .button-row {
            margin-top: rem(55px);
            padding-left: 8px;
            padding-bottom: 8px;
            visibility: hidden;
            transition: all 0.5s ease;
            @media screen and (max-width: 1199px) {
                margin-top: rem(40px);
            }
            @media screen and (max-width: 991px) {
                margin-top: rem(35px);
            }
        }
    }
    /deep/ {
        .sliderNavigation {
            @media screen and (max-width: 767px) {
                position: static;
            }
            &__controls {
                width: 400px;
                max-width: 400px;
                justify-content: space-evenly;
                @media screen and (max-width: 991px) {
                    width: 200px;
                    max-width: 200px;
                }
                @media screen and (max-width: 767px) {
                    margin: auto;
                    margin-top:rem(16px);
                }
            }
        }
        .singleSlide {
            .sliderNavigation__controls {
                justify-content: center;
            }
        }
    }
}
.swiper-slide-active{
    .button-row{
        visibility: visible;
    }
}
</style>
