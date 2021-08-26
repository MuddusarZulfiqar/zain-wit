<template>
    <div class="countrySlider__main" role="region">
        <img
            src="@/assets/images/sustainiblity/countryBanner.png"
            alt=""
            class=" countrySlider__main--image"
        />
        <div class="countrySlider__detail">
            <ul class="countrySlider__detail--list">
                <b-media tag="li" class="countrySlider__detail--item" tabindex="0" :aria-describedby="countryName">
                    <span class="sr-only">{{countryName}}</span>
                    <template #aside vertical-align="center">
                        <span class="icon" >
                            <!-- <svg-icon
                                icon-id="ramadanMeel"
                                icon-viewbox="0 0 801.23 635.06" icon-alt=""
                            ></svg-icon> -->
                            <img src="@/assets/images/icons/zainworldstaticicon-1.png"  alt="">
                        </span>
                    </template>
                    <p :aria-describedby="countryName">
                        <span>2,648</span> Iftar meals<br />distributed during
                        Ramadan
                    </p>
                </b-media>
                <b-media tag="li" class="countrySlider__detail--item" tabindex="0" :aria-describedby="countryName">
                    <span class="sr-only">{{countryName}}</span>
                    <template #aside vertical-align="center">
                        <span class="icon"  >
                            <!-- <svg-icon
                                icon-id="clock"
                                icon-viewbox="0 0 512 512" icon-alt=""
                            ></svg-icon> -->
                            <img src="@/assets/images/icons/zainworldstaticicon-2.png"  alt="">
                        </span>
                    </template>
                    <p :aria-describedby="countryName">
                        <span>70</span> Hours <br />spent on training per
                        employee
                    </p>
                </b-media>
                <b-media tag="li" class="countrySlider__detail--item" tabindex="0" :aria-describedby="countryName">
                    <span class="sr-only">{{countryName}}</span>
                    <template #aside vertical-align="center">
                        <span class="icon" >
                            <!-- <svg-icon
                                icon-id="hand-tree"
                                icon-viewbox="0 0 448.26 447.32" icon-alt=""
                            ></svg-icon> -->
                            <img src="@/assets/images/icons/zainworldstaticicon-3.png"  alt=""></span>
                    </template>
                    <p :aria-describedby="countryName"><span>351,000</span> Trees<br />planted in Sudan</p>
                </b-media>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        countryName:String
    }
}
</script>

<style lang="scss" scoped>
.countrySlider {
    &__main {
        position: relative;
        --highlight: #eada2f;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            
        }
    }
    &__detail {
        position: absolute;
        z-index: 1;
        visibility: hidden;
        @include center-vertical();
        right: 3%;
        margin-top: rem(30px);
        &--list {
            /deep/ {
                .media-aside {
                    margin-right: rem(45px);
                }
                .media-body {
                    p {
                        --highlight: #eada2f;
                        color: #fff;
                        font-size: rem(25px);
                        font-weight: 600;
                        margin-bottom: unset;
                        

                        span {
                            font-size: rem(38px);
                            font-weight: 900;
                        }
                    }
                }
            }
            .icon {
                width: rem(60px);
                display: inline-block;
                color: #fff;
            }
        }
        &--item {
            align-items: center;
            height: 100%;
            margin-bottom: rem(25px);
            &:focus-within , &:focus{
                outline: 3px dashed var(--yellow);
                outline-offset: 1px;
            }
        }
    }
    @media screen and (max-width:991px){
        // &__main {
        //    height: 350px;
        //     img{
        //         height: auto;
        //     }
        // }
        &__detail {
            &--list{
                /deep/{
                    .media-body{
                        p {
                            font-size: rem(22px);
                            span{
                               font-size: rem(34px); 
                            }
                        }
                    }
                }
                .icon {
                    width: rem(50px);
                }
            }
            &--item {
                margin-bottom: rem(20px);
            }
        }
    }
    @media screen and (max-width:767px){
        &__main {
           height: 350px;
            img{
                object-fit: inherit;
            }
        }
        &__detail {
            &--list{
                /deep/{
                    .media-body{
                        p {
                            font-size: rem(20px);
                            span{
                               font-size: rem(28px); 
                            }
                        }
                    }
                }
            }
        }
    }
     @media screen and (max-width:575px){
        &__main {
           height: 300px;
        }
        &__detail {
            &--list{
                /deep/{
                    .media-body{
                        p {
                            font-size: rem(18px);
                            span{
                               font-size: rem(25px); 
                            }
                        }
                    }
                }
            }
        }
    }
}
.swiper-slide.swiper-slide-active .countrySlider__detail{
    visibility: visible;
}
</style>
