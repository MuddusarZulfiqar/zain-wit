<template>
    <div class="mediaSlider">
        <carousel
            class="mediaSlider__slides"
            fractionPagination
            slider-type="slider"
            :carousel-settings="basicSearchSlider"
        >
            <div
                class="swiper-slide"
                v-for="(data, index) in mediaSlides"
                :key="index"
            >
                <div class="mediaSlider__item">
                    <img
                        :src="require(`@/assets/images/${data.image}`)"
                        alt="zain world"
                        class="img-fluid"
                    />
                </div>
                 <h2 v-if="data.thumb">{{data.thumb}}</h2>
            </div>
        </carousel>
    </div>
</template>

<script>
export default {
    props: { mediaSlides: Array,

    },
    data() {
        return {
            basicSearchSlider: {
                slidesPerView: 1,
                observer: true,
                observeParents: true,
                speed: 1500,
                rtl: this.$i18n.locale=="en" ? false : true,
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.mediaSlider {
    position: relative;
    z-index: 1;
    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        right: -10px;
        top: -10px;
        background: rgba($color: #4a4a4a, $alpha: 0.2);
    }
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -2;
        right: -20px;
        top: -20px;
        background: rgba($color: #4a4a4a, $alpha: 0.2);
    }
    &__slides {
        background: #e9e9e9;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        > div {
            > div > div {
                outline-offset: -8px;
            }
        }
    }
    .swiper-slide{
        h2{
            text-align: center;
            font-size: rem(24px);
            font-weight: 700;
            color: var(--secondary);
            padding-top: rem(30px);
            word-spacing: rem(3px);
            padding-left: rem(8px);
            padding-right: rem(8px);
            @media screen and (max-width:767px) {
                font-size: rem(20px);
                padding-top: rem(25px);
            }
            @media screen and (max-width:575px) {
                font-size: rem(17px);
                padding-top: rem(20px);
            }
        }
    }
    /deep/ {
        .sliderNavigation {
            bottom: 0px;
            position:static;
            &__controls {
                max-width: 100%;
                padding: 0px rem(28px) 0px rem(30px);
                @media screen and (max-width:767px) {
                    padding: 0 rem(15px);
                }
                &--pagination {
                    order: 2;
                    flex-grow: 1.8;
                    text-align: center;
                    letter-spacing: 0;
                    font-weight: 800;
                    color: #494949;
                    .swiper-pagination-current {
                        color: var(--secondary);
                        margin-left: rem(20px);
                    }
                }
                #prevArrow {
                    order: 3;
                    border: unset !important;
                    color: var(--secondary);
                        outline-offset: -8px;
                }
                #nextArrow {
                    order: 4;
                    border: unset !important;
                    color: var(--secondary);
                        outline-offset: -8px;
                }
                &--pause {
                    order: 1;
                    flex-grow: 0;
                    color: var(--secondary);
                    &:hover {
                        opacity: .75;
                    }
                }
                .swiper-button-disabled {
                    color: #494949 !important;
                    opacity: 1;
                }
            }
        }
    }
}
[lang='ar']{
    .mediaSlider {
        &::before {
            left: -10px;
            right:auto;
        }
        &::after {
            left: -20px;
            right:auto;
        }
        /deep/ {
            .sliderNavigation {
                &__controls {
                    &--arrow{
                        transform: rotate(180deg);
                    }
                    &--pagination {
                        direction: ltr;
                    }
                    &--pause{
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }
}
</style>
