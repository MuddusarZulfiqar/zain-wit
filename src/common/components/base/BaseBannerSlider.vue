<template>
    <div class="mainBanner" role="region" :aria-label="ariaLabel">
        <carousel
            fraction-pagination
            :carousel-settings="carouselSettings"
            slider-type="slider"
            carousel-id="mainBanner"
        >
            <div
                class="swiper-slide banner__slide"
                :class="slide.video ? 'has-video' : ''"
                tabindex="-1"
                v-for="(slide, index) in bannerSlides"
                :key="index"
                role="group"                
            >
                <div class="banner__slide--image">
                    <img
                        :src="require(`@/assets/images/banners/${slide.image}`)"
                        :alt="`slide ${index}`"
                    />
                </div>
                <div class="banner__slide--video" v-if="slide.video">
                    <div
                        class="video-youtube"
                        :data-src="slide.video.url"
                        v-if="slide.video.type == 'youtube'"
                        aria-label="Play Youtube Video"
                    >
                        <iframe
                            :src="slide.video.url"
                            tabindex="-1"
                            aria-label="Play Youtube Video"
                        ></iframe>
                    </div>
                    <div
                        class="video-mp4"
                        v-if="slide.video.type == 'mp4'"
                        aria-label="Play MP4 Video"
                    >
                        <video controls tabindex="-1">
                            <source
                                :src="
                                    require(`@/assets/video/${slide.video.url}`)
                                "
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
                <div class="banner__slide--caption"  v-if="!slide.video">
                    <div class="container">
                        <h1 v-html="slide.title"></h1>
                        <p v-if="slide.subtitle && slide.subtitle!=''" v-html="slide.subtitle"></p>
                        <div @click.stop.prevent="srollToContents" class="discover"  v-if="slide.discover">
                            <router-link to="" tabindex="-1">
                                <span class="icon"
                                    ><svg-icon
                                        iconId="discover-icon"
                                        icon-viewbox="0 0 359.98 192.04"
                                    ></svg-icon
                                ></span>
                               {{$t("labels.discover")}}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </carousel>
        <a
            href="#"
            @click.stop.prevent="srollToContents"
            class="scrollDown"
            role="button"
            aria-label="Scroll to Contents"
        >
            <span></span>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        ariaLabel: String,
        bannerSlides: Array,
    },
    data() {
        return {
            carouselSettings: {
                speed: 1500,
                rtl: this.$i18n.locale=="en" ? false : true,
                scrollbar: {
                    draggable: false,
                },
            },
        }
    },
    mounted() {},
    methods: {
        pausePlay: function () {
            if (this.isPause) {
                this.$refs.mainBanner.start()
                this.isPause = false
            } else {
                this.$refs.mainBanner.pause()
                this.isPause = true
            }
        },
        srollToContents: function () {
            let headerHeight = document.querySelector('.mainBanner').offsetHeight - 40;
            document.body.scrollTop = headerHeight
            document.documentElement.scrollTop = headerHeight
        },
    },
}
</script>

<style lang="scss" scoped>
// .carousel{
//     height: 100vh;
//     overflow: hidden;
//     /deep/ {
//         .carousel-inner, .carousel-item{
//             height: 100vh;
//             overflow: hidden;
//         }
//     }
// }

.mainBanner {
    height: 80vh;
    overflow: hidden;
    margin-bottom: rem(30px);
    position: relative;
    outline:none;
    @media screen and (max-width: 1200px) {
        height: 100%;
        position: relative;
    }
    .banner {
        &__slide {
            position: relative;
            --overlay: #7c2a82;
            // &:after,
            // &:before {
            //     position: absolute;
            //     left: 0;
            //     top: 0;
            //     width: 100%;
            //     height: 100%;
            //     content: '';
            //     // background: var(--overlay);
            //     background: #000;
            //     opacity: 0.7;
            //     z-index: 0;
            // }
            &:before {
               display:none;
            }
            height: 80vh;
            @media screen and (max-width: 1200px) {
                height: 100%;
            }
            &--image {
                @media screen and (max-width: 1366px) and (min-width: 1025px) and (orientation:landscape) {
                    height: 100%;
                }
                img {
                    width: 100%;
                    @media screen and (max-width: 1366px) and (min-width: 1025px) and (orientation:landscape) {
                        height: 100%;
                        object-fit: cover;
                    }
                }
                @media screen and (max-width: 767px) {
                    height: 350px;
                    img {
                        max-width: unset;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }
            &--caption {
                text-align: center;
                position: absolute;
                max-width: 1100px;
                // bottom: rem(220px);
                top: 60%;
                transform: translateY(-50%);
                left: 0;
                right: 0;
                margin: auto;
                z-index: 2;
                padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
                @media screen and (max-width: 1600px) {
                    // bottom: rem(50px);
                    top: 54%;
                }
                @media screen and (max-width: 767px) {
                    top: 35%;
                }
                @media screen and (max-width: 575px) {
                    top: 42%;
                }
                @media screen and (max-width: 400px) {
                    top: auto;
                    transform: none;
                    bottom: rem(40px);
                    display: flex;
                    align-items: flex-end;
                }
                h1 {
                    font-weight: 900;
                    font-size: rem(65px);
                    color: #fff;
                    text-transform: uppercase;
                    padding-bottom: rem(30px);
                    background:rgba($color: #000000, $alpha: .3);
                    display: inline-block;
                    padding: rem(15px);
                    line-height: 1;
                    @media screen and (max-width: 1600px) {
                        font-size: rem(50px);
                    }
                    @media screen and (max-width: 1200px) {
                        font-size: rem(30px);
                        padding-bottom: rem(10px);
                    }
                    @media screen and (max-width: 767px) {
                        font-size: rem(26px);
                    }
                    @media screen and (max-width: 350px) {
                        font-size: rem(22px);
                    }
                }
                p {
                    color: #fff;
                    font-size: rem(24px);
                    font-weight: 500;
                    line-height: 1.5;
                    background:rgba($color: #000000, $alpha: .3);
                    padding: rem(15px);
                    // @include truncate(4);
                    @media screen and (max-width: 1600px) {
                        font-size: rem(20px);
                    }
                    @media screen and (max-width: 1200px) {
                        font-size: rem(18px);
                    }
                }
                .discover {
                    // display: inline-block;
                    // margin-top: rem(35px);
                    position: absolute;
                    bottom: rem(-110px);
                    left: 50%;
                    transform: translateX(-50%);
                    right: 0;
                    // margin: auto;
                    width: 200px;
                    @media screen and (max-width:767px) {
                        bottom: rem(-78px);
                    }
                    a {
                        display: inline-block;
                        color: #fff;
                        font-size: rem(24px);
                        font-weight: 700;
                        text-transform: uppercase;
                        padding: 20px;
                        // border:solid 2px transparent;
                        // &:focus{
                        //     border-color:var(--highlight);
                        // }
                        @media screen and (max-width: 1600px) {
                            font-size: rem(20px);
                        }
                        @media screen and (max-width: 1200px) {
                            font-size: rem(18px);
                        }
                        &:hover {
                            color: var(--highlight);
                            text-decoration: none;
                        }
                    }
                    .icon {
                        display: block;
                        padding-bottom: rem(10px);
                    }
                    /deep/ svg {
                        width: 60px;
                        height: auto;
                        @media screen and (max-width: 1200px) {
                            width: 40px;
                        }
                    }
                }
            }
            &.has-video {
                // .banner__slide--image{
                //     visibility: hidden;
                // }
            }
            &--video {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 1;
                iframe {
                    width: 100%;
                    height: 100%;
                    border: 0;
                }
                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                > div {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            }
        }
    }
    /deep/ {
        .sliderNavigation {
            width: 330px;
            // left: calc(100% - (1260px/2));
            right: calc((100% - 1170px) / 2);
            left: auto;
            margin-left: -30px;

            &__controls {
                max-width: 330px;
            }
            @media screen and (max-width: 1300px) {
                right: 15px;
            }
            @media screen and (max-width: 1200px) {
                bottom: 15px;
                width: 280px;
            }
            @media screen and (max-width: 1025px) {
                width: 100%;
                position: static;
                background: #000;
                opacity: 0.9;
                transform: none;
                margin-left: 0;
                padding: rem(15px) 0;
                &__controls{
                    //max-width: none;
                    margin:auto
                }
            }
            
        }
        .singleSlide {
            display: none;
        }
    }

    .scrollDown {
        position: absolute;
        left: 0;
        right: 0;
        bottom: rem(50px);
        margin: auto;
        display: inline-block;
        width: 42px;
        height: 58px;
        border: solid 3px rgb(156, 151, 151);
        border-radius: 19px;
        z-index: 1;
        @media screen and (max-width: 991px) {
            bottom: 15px;
            display: none;
        }
        @media screen and (max-width:767px){
            width: 33px;
            height: 50px;
        }
        span {
            position: absolute;
            top: 5px;
            content: '';
            left: 0;
            right: 0;
            margin: auto;
            width: 4px;
            height: 12px;
            border-radius: 5px;
            z-index: 1;
            background: #fff;
            animation: moveupdown 3s ease-in-out infinite;
        }
        @keyframes moveupdown {
            0% {
                top: 15%;
            }
            50% {
                top: 60%;
            }
            100% {
                top: 15%;
            }
        }
    }
}
[lang='ar']{
    .mainBanner {
        
        .banner {
            &__slide {
                &--video {
                    right: 0;
                    left:auto;
                    > div {
                        right: 0;
                        left: auto;
                    }
                }
                &--caption{
                    .discover {
                   
                    right: 50%;
                    transform: translateX(50%);
                    left: auto;
                    }
                }
            }
        }
        /deep/ {
            .sliderNavigation {
                left: calc((100% - 1170px) / 2);
                right: auto;
                margin-right: -30px;
                margin-left:0;
                @media screen and (max-width: 1300px) {
                    left: 15px;
                    right: auto;
                }
                @media screen and (max-width: 1025px) {
                    margin-right: 0;
                }
                &__controls{
                    &--arrow{
                        transform: rotate(180deg);
                    }
                    &--pagination{
                        direction:ltr;
                    }
                }
                
            }
        }

    }
}
</style>
