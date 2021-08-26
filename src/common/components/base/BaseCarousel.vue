<template>
    <div class="baseSliderWrapper" :class="navigationLayout == 'side' ? 'sideWrapper' :''">
        <div
            class="swiper-container"
            :id="sliderId"
            ref="slider"
            role="region"
            aria-label="carousel"
            :aria-live="this.isPause?'polite':'off'"
        >
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
        </div>
        <div
            :id="`sliderNavigation_${this.sliderId}`"
            :class="[
                'sliderNavigation',
                this.totalSlides == 1 ? 'singleSlide' : '',
                navigationLayout == 'side' ? 'sideNavigation' : navigationLayout=='bottom' ? 'bottomNavigation':'',
                navigationTheme == 'simple' ? 'navigationSimple' : '',
                this.carouselSettings.thumbs ? '' : '',
            ]"
        >
            <div class="container">
                <div class="sliderNavigation__controls">
                    <!-- <p class="sliderNavigation__controls--pagination">{{currentSlide + 1}}/{{totalSlides}}</p> -->
                    <div
                        class="sliderNavigation__controls--pagination"
                        :class="[
                            'swiper-pagination' + this.sliderId,
                            fractionPagination == true ? '' : 'd-none',
                        ]"
                    ></div>
                    <div
                        :class="[
                            fractionPagination == true ? 'd-none' : '',
                        ]"
                        class="
                            sliderNavigation__controls--pagination
                            customPagination
                        "
                    >
                        Showing Item
                        <span class="current swiper-pagination-current">
                            {{ currentSlide }}</span
                        >
                        out of
                        <span class="total swiper-pagination-total">{{
                            totalSlides
                        }}</span>
                    </div>
                    <button
                        type="button"
                        id="prevArrow"
                        role="button"
                        aria-label="Previous"
                        class="sliderNavigation__controls--arrow"
                        :class="[
                            'sliderNavigation__controls--prev' + this.sliderId,
                            totalSlides == 1 ? 'd-none' : '',
                        ]"
                    >
                        <svg-icon iconId="left-arrow"></svg-icon>
                        <span class="sr-only">Previous Slide</span>
                    </button>
                    <button
                        type="button"
                        role="button"
                        :aria-label="
                            isPause
                                ? 'Start automatic slide show'
                                : 'Stop automatic slide show'
                        "
                        @click="pausePlay"
                        :class="[
                            'sliderNavigation__controls--pause',
                            totalSlides == 1 ? 'd-none' : '',
                        ]"
                    >
                        <div v-if="isPause == false" id="play">
                            <svg-icon
                                iconId="slider-pause"
                                icon-viewbox="0 0 30.52 38.09"
                            ></svg-icon>
                            <span class="sr-only">Pause</span>
                        </div>
                        <div v-if="isPause == true" id="pause">
                            <svg-icon
                                iconId="slider-play"
                                icon-viewbox="0 0 163.861 163.861"
                            ></svg-icon>
                            <span class="sr-only">Play</span>
                        </div>
                    </button>
                    <!-- <button type="button" role="button" v-if="interval==0" aria-label="Play" @click="interval=4000" class="sliderNavigation__controls--play">
                        <svg-icon iconId="slider-pause" icon-viewbox="0 0 30.52 38.09"></svg-icon>
                        <span class="sr-only">Play</span>
                    </button> -->
                    <button
                        type="button"
                        role="button"
                        id="nextArrow"
                        aria-label="Next"
                        class="sliderNavigation__controls--arrow"
                        :class="[
                            'sliderNavigation__controls--next' + this.sliderId,
                            totalSlides == 1 ? 'd-none' : '',
                        ]"
                    >
                        <svg-icon iconId="right-arrow"></svg-icon>
                        <span class="sr-only">Next Slide</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(SplitText)
export default {
    props: {
        carouselSettings: Object,
        carouselId: {
            type: String,
            default: '',
        },
        navigationLayout: String,
        navigationTheme: String,
        fractionPagination: {
            default: false,
            type: Boolean,
        },
        fractionPaginationActive: {
            default: false,
            type: Boolean,
        },
        controller: Object,
        sliderType: {
            type: String,
            default: 'carousel',
        },
    },
    data() {
        return {
            totalSlides: 0,
            currentSlide: 0,
            isPause: true,
            sliderId: 'slider-' + this.randomNumber(),
            slider: Object,
            swiper: Object,
            sliderObj:null
        }
    },
    created() {
        if (this.carouselId != '') {
            this.sliderId = this.carouselId
        }
    },
    mounted() {
        this.setUpCarousel()
    },
    methods: {
        setUpCarousel: function () {
            var navigation = {
                nextEl: '.sliderNavigation__controls--next' + this.sliderId,
                prevEl: '.sliderNavigation__controls--prev' + this.sliderId,
            }
            var pagination = {
                el: '.swiper-pagination' + this.sliderId,
                type: 'fraction',
            }
            var keyboard = { enabled: false }
            var draggable = { draggable: false }
            var swipping = {noSwiping: false}
            this.carouselSettings.navigation = navigation;
            if(!this.carouselSettings.keyboard){
                this.carouselSettings.keyboard = keyboard
            }
            this.carouselSettings.pagination = pagination
            this.carouselSettings.draggable = draggable
            this.carouselSettings.noSwiping = false
            //this.carouselSettings.simulateTouch = false
            //this.carouselSettings.touchRatio = 0
            this.slider = document.getElementById(this.sliderId)
            if (this.carouselSettings.autoplay) {
                this.isPause = false
            }
            if (this.slider) {
                this.swiper = new Swiper(this.slider, this.carouselSettings)
                var length = this.swiper.slides.length;
                console.log(length);
                if(length==0){
                    length = this.slider.querySelectorAll('.swiper-slide').length;
                    document.querySelector("#sliderNavigation_" + this.sliderId).classList.add('d-none'); 
                }
                length==1 ? document.querySelector("#sliderNavigation_" + this.sliderId).classList.add('d-none') : "";
                this.totalSlides =
                    length
            }
            this.currentSlide = this.swiper.activeIndex + 1
            this.$emit('init', this.swiper)
            this.accessibility()
            this.mainBanner()
        },
        accessibility: function () {
            var slide = this.slider.querySelectorAll('.swiper-slide')
            if (!this.isPause) {
                this.slider.setAttribute('aria-live', 'off')
            }
            if (this.sliderType == 'slider') {
                slide.forEach((element) => {
                    element.setAttribute('aria-hidden', 'true')
                    element.setAttribute('tabindex', '-1')
                })
                setTimeout(() => {
                    this.slider
                        .querySelector('.swiper-slide-active')
                        .setAttribute('aria-hidden', 'false')
                    this.slider
                        .querySelector('.swiper-slide-active')
                        .setAttribute('tabindex', 0)
                }, 400)
                this.swiper.on('slideChangeTransitionEnd', (swiper) => {
                    this.currentSlide = swiper.activeIndex
                    slide.forEach((element) => {
                        element.setAttribute('tabindex', '-1')
                        element.setAttribute('aria-hidden', 'true')
                    })
                    setTimeout(() => {
                        this.slider
                            .querySelector('.swiper-slide-active')
                            .setAttribute('tabindex', '0')
                        this.slider
                            .querySelector('.swiper-slide-active')
                            .setAttribute('aria-hidden', 'false')
                        // slider.querySelector(".swiper-slide-active").focus();
                    }, 1000)
                })
            }
        },
        mainBanner: function () {
            this.swiper.on('slideChange', (e) => {
                this.currentSlide = e.activeIndex + 1
                setTimeout(() => {
                    //if (this.sliderId == 'mainBanner') {
                    var currentSlide = this.slider.querySelector(
                        '.swiper-slide-active',
                    )
                    var mp4 = currentSlide.querySelector('.video-mp4')
                    var image = currentSlide.querySelector(
                        '.banner__slide--image',
                    )
                    var youtube =
                        currentSlide.querySelector('.video-youtube')
                    if (currentSlide.classList.contains('has-video')) {
                        if (mp4) {
                            var video = mp4.querySelector('video')
                            video.setAttribute('tabindex', 0)
                            video.play()
                            image.classList.add('invisible')
                            this.stopYoutube()
                        } else if (youtube) {
                            var vs = youtube.dataset.src
                            youtube
                                .querySelector('iframe')
                                .setAttribute('src', vs)
                            youtube
                                .querySelector('iframe')
                                .setAttribute('tabindex', -1)
                            image.classList.add('invisible')
                            this.stopMp4()
                        } else {
                            this.stopYoutube()
                            this.mp4()

                            image.classList.remove('invisible')
                        }
                    }
                    //}
                }, 500)
            })
        },
        stopYoutube: function () {
            var iframes = this.slider.querySelectorAll('iframe')
            iframes.forEach((element) => {
                element.setAttribute('src', '')
                element.setAttribute('tabindex', -1)
            })
        },
        stopMp4: function () {
            var mp4 = this.slider.querySelectorAll('video')
            mp4.forEach((element) => {
                element.pause()
                element.setAttribute('tabindex', -1)
            })
        },
        pausePlay: function () {
            if (this.isPause) {
                this.swiper.autoplay.start()
                this.isPause = false
            } else {
                this.swiper.autoplay.stop()
                this.isPause = true
            }
        },
        randomNumber: function () {
            return Math.floor(Math.random() * (100000 - 1 + 1) + 1)
        },
    },
}
</script>

<style lang="scss" scoped>
.sideWrapper{
    @media screen and (max-width:991px) {
        margin-top: 45px;
    }
}
.sliderNavigation {
    position: absolute;
    bottom: rem(60px);
    width: 100%;
    --color: #fff;
    --arrow: #fff;
    --border: #fff;
    --pause: #fff;
    --topborder: #fff;
    color: var(--color);
    z-index: 1;
    left: 0;
    .container {
        padding: 0;
    }
    button {
        background: transparent;
        border: 0;
        outline: 3px dashed transparent;
        outline-offset: 0px;
        &:focus {
            outline-color: var(--highlight);
        }
    }
    &__controls {
        @include flex(center, space-between);
        max-width: 300px;
        margin: 0 0 0 auto;
        @media screen and (max-width: 991px) {
            max-width: 220px;
            justify-content: space-around;
        }
        /deep/ svg {
            height: 28px;
            width: 22px;
            @media screen and (max-width: 991px) {
                transform: scale(0.8);
                transform-origin: center;
            }
        }
        &--pause {
            color: var(--pause);
            /deep/ svg {
                width: 23px;
                height: auto;
            }
            #play {
                width: 23px;
                height: auto; 
            }
        }
        &--arrow {
            width: rem(65px);
            height: rem(65px);
            border: solid 1px var(--border) !important;
            border-radius: 50%;
            color: var(--arrow);
            @include flex(center, center);
            @media screen and (max-width: 1320px) {
                width: rem(55px);
                height: rem(55px);
            }
            @media screen and (max-width: 991px) {
                width: 45px;
                height: 45px;
            }
            @media screen and (min-width:1199px){
                &:hover {
                    opacity: 0.5;
                }
            }
            &.swiper-button-disabled {
                pointer-events: none;
                opacity: 0.5;
            }
        }
        &--pagination {
            margin: 0;
            font-size: rem(28px);
            font-weight: 700;
            letter-spacing: 2px;
            position: static;
            width: auto;
            &.customPagination{
                font-size: rem(28px);
                @media screen and (max-width: 767px){
                    font-size: rem(22px);
                }
            }
            @media screen and (max-width: 1200px) {
                font-size: rem(22px);
            }
            @media screen and (max-width: 991px) {
                font-size: rem(20px) !important;
            }
            @media screen and (max-width: 575px) {
                font-size: rem(17px) !important;
                font-weight:800 !important;
            }
            
        }
        
    }
    &.sideNavigation {
        top: 0;
        height: 0;
        // @media screen and (max-width: 991px) {
        //     height: 0 !important;
        //     z-index: 0;
        //     transform: unset !important;
        //     top: 20px !important;

        // }
        .sliderNavigation__controls--pagination {
            display: none;
        }
        
        .sliderNavigation__controls--pause {
            display: none;
        }
        .sliderNavigation__controls--arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            // @media screen and (max-width: 991px) {
            //     top: -50px !important;
            //     transform: unset;
            // }
        }
        #nextArrow {
            right: rem(-120px);
        }
        #prevArrow {
            left: rem(-120px);
        }
        @media screen and (max-width: 1400px) {
            #nextArrow {
                right: rem(-80px);
            }
            #prevArrow {
                left: rem(-80px);
            }
        }
        // @media screen and (max-width: 991px) {
        //     #nextArrow {
        //         right: 0px !important;
        //         left:auto !important;
        //     }
        //     #prevArrow {
        //         right: 65px !important;
        //         left: auto !important;
        //     }
        // }
    }
    &.bottomNavigation{
        margin:auto;
        position: static;
        max-width: 1200px;
        /*border-top: solid 1px var(--topborder);
        padding-top: rem(20px);*/
        margin-top: rem(40px);
        
        .sliderNavigation__controls{
            max-width: none;
            @media screen and (max-width:1600px) and (min-width:576px){
                margin-left: 20px;
                margin-right:20px;
            }
            @media screen and (max-width:1150px){
                margin-top:rem(20px);
            }
            @media screen and (max-width:414px){
                max-width:100%;
                margin:0;
                margin-top:rem(20px);
            }
        }
        .sliderNavigation__controls--pagination{
            flex: 0 0 85%;
            max-width: 85%;
        }
        .sliderNavigation__controls--pause{
            display: none;
        }
        @media screen and (max-width:1199px){
            padding:0 15px;
        }
        @media screen and (max-width:575px){
            padding:0;
        }
        @media screen and (max-width:767px){
            .sliderNavigation__controls--pagination{
                flex: 0 0 65%;
                max-width: 65%;
            }
        }
        @media screen and (max-width:414px){
            .sliderNavigation__controls--pagination{
                // flex: 0 0 100%;
                // max-width: 100%;
                // text-align: center;
                // margin-bottom:20px;
                // order: 2;
                // padding: 0 10px;
                // text-align: center;
            }
            // .sliderNavigation #nextArrow{
            //     order: 3 !important;
            // }
        }
    }
    .showPagination {
        display: block !important;
    }
    &.navigationSimple {
        .sliderNavigation__controls--arrow {
            border: unset !important;
            width: 45px;
            height: 45px;
            outline-offset: 2px;
            
            @media screen and (max-width: 1320px) {
                width: 40px;
                height: 40px;
            }
            @media screen and (max-width: 991px) {
                width: 30px;
                height: 30px;
            }

        }
        #nextArrow {
            right: rem(-60px);
        }
        #prevArrow {
            left: rem(-60px);
        }
    }
    &.singleSlide {
        display: none;
    }
}
[lang='ar']{
    .sliderNavigation {
        &.sideNavigation {
            .sliderNavigation{
                &__controls{
                    &--arrow{
                        transform: translateY(-50%) rotate(180deg) !important;
                    }
                }
            }
            
            #nextArrow {
                left: rem(-120px);
                right:auto;
            }
            #prevArrow {
                right: rem(-120px);
                left:auto;
            }
            @media screen and (max-width: 1400px) {
                #nextArrow {
                    left: rem(-80px);
                    right:auto;
                }
                #prevArrow {
                    right: rem(-80px);
                    left:auto;
                }
            }
        }
        &.navigationSimple {
            #nextArrow {
                left: rem(-60px);
                right:auto;
            }
            #prevArrow {
                right: rem(-60px);
                left:auto;
            }
        }
    }
}
</style>
