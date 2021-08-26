<template>
    <div class="col-lg-3 col-md-4 col-sm-6 course__card">
            <div class="course__card--image">
                <img :src="require(`@/assets/images/${card.image}`)" alt="" class="img-fluid">
            </div>
            <div class="course__card--content">
                <h2>{{card.title}}</h2>
                <div class="country">
                    <span class="country--icon">
                        <img :src="require(`@/assets/images/country/${card.country.image}`)" alt="" class="img-fluid">
                    </span>
                    <span class="country--name">{{card.country.name}}</span>
                </div>
                <p>{{card.detail}}</p>
                <span class="unit">{{card.unit}}</span>
                <div class="links">
                    <ul class="linksStyle">
                        <li v-for="(link,index) in card.links" :key="index+'6ds40f'">
                            <router-link :to="link.link" class="btn">{{link.text}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props:{
            card:Object
        },
        mounted(){
            console.log(this.card)
        }
    }
</script>

<style lang="scss" scoped>
.course{
    &__card{
        position: relative;
        overflow: hidden;
        margin-bottom: 30px;
        
         &--image{
            height: 440px;
            width:100%;
            position: relative;
            transition: unset;
            @media screen and (max-width:1600px) {
                height: 400px;
            }
            &::before{
                content:'';
                width:100%;
                height: 100%;
                position: absolute;
                top: 0px;
                left: 0px;
                background: rgba($color: #000000, $alpha: 0.5);
                // transition: 0.5s ease all;
                @media screen and (max-width:1025px){
                    background: rgba($color: #000000, $alpha: 0.8);
                }
            }
            img{
                height: 100%;
                width:100%;
                object-fit: cover;
            }
        }
        &--content{
            position: absolute;
            width: calc(100% - 30px);
            height: 100%;
            top:calc(100% - 110px);
            left:50%;
            transform: translateX(-50%);
            padding:rem(20px);
            transition: 0.5s ease all;
            cursor: pointer;
            @media screen and (max-width:1600px) {
                top:calc(100% - 90px);
            }
            @media screen and (max-width:1025px) {
                top:0;
            }
            h2{
                color: #fff;
                font-weight: 600;
                font-size: rem(30px);
                text-transform: capitalize;
            }
            .country{
                display: flex;
                align-items: center;
                margin-bottom: rem(25px);
                &--icon{
                    flex: 0 0 22px;
                    max-width: 22px;
                }
                &--name{
                    flex:1;
                    margin-left: rem(10px);
                    color: #fff;
                    font-size: rem(16px);
                    font-weight: 300;
                    text-transform: uppercase;
                }
            }
            p{
                color: #fff;
                font-size: rem(18px);
                line-height: 1.5;
                @include truncate(5,1.5);
            }
            .unit{
                font-size: rem(20px);
                color: #fff;
                font-weight: 800;
                margin-bottom: rem(20px);
            }
            .links{
                margin-top:rem(20px);
            }
            .linksStyle{
                list-style-type: none;
                a{
                    width: 100%;
                    border: 1px solid #fff;
                    font-weight: 800;
                    &:hover{
                        background: var(--primary);
                        border-color: var(--primary) !important;
                        color: #fff;
                    }
                }
            }
        }
        @media screen and (min-width:1025px){
            &:hover,&:focus-within{
                .course__card--image{
                    &::before{
                        background: rgba($color: #000000, $alpha: 0.8);
                    }
                }
                .course__card--content{
                    top: 0px;
                }
            }
        }
    }
}

[lang='ar']{
    .course{
        &__card{
            &--content{
                .country{
                    &--name{
                        margin-right: rem(10px);
                        margin-left:0;
                    }
                }
            }
        }
    }
}
</style>