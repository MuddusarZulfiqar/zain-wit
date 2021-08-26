<template>
    <div class="courseList">
        <ul class="courseList__box">
            <li class="courseList__box--item">
                <span class="image">
                    <img src="@/assets/images/icons/courseList/video.png" alt="" class="img-fluid">
                </span>
                <div class="desc">
                    <h2>45+ CLASSES</h2>
                    <span>From the masters</span>
                </div>
            </li>
            <li class="courseList__box--item">
                <span class="image">
                    <img src="@/assets/images/icons/courseList/playlist.png" alt="" class="img-fluid">
                </span>
                <div class="desc">
                    <h2>24 lessons</h2>
                    <span>average per class</span>
                </div>
            </li>
            <li class="courseList__box--item">
                <span class="image">
                    <img src="@/assets/images/icons/courseList/clock.png" alt="" class="img-fluid">
                </span>
                <div class="desc">
                    <h2>12 minutes</h2>
                    <span>average per lesson</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CourseList'
}
</script>

<style lang="scss" scoped>
.courseList{
    background: #f8f8f8;
    &__box{
        list-style: none;
        display: flex;
        justify-content: center;
        &--item{
            position: relative;
            background: #fff;
            display: flex;
            align-items: center;
            padding: rem(20px) rem(45px);
            box-shadow: 6px 7px 14px -2px rgba($color: #707070, $alpha: .4);
            &:not(:last-child){
                margin-right: rem(30px);
            }
            @media screen and (min-width:1025px){
                &:hover{
                    box-shadow: 6px 7px 14px -2px rgba($color: #6e337a, $alpha: .4);
                }
            }
            .image{
                flex: 0 0 50px;
                max-width: 50px;
            }
            .desc{
                flex: 1;
                margin-left: rem(40px);
                h2{
                    font-size: rem(32px);
                    font-weight: 800;
                    text-transform: uppercase;
                }
                span{
                    color: gray;
                    font-size: rem(20px);
                    font-weight: 700;
                    text-transform: capitalize;
                }
            }
        }
        @media screen and (max-width:1025px){
            &--item{
                padding: rem(20px) rem(30px);
                &:not(:last-child){
                    margin-right: rem(20px);
                }
                .desc{
                    margin-left: rem(25px);
                    h2{
                        font-size: rem(28px);
                    }
                    span{
                        color: gray;
                        font-size: rem(18px);
                    }
                }
            }
        }
        @media screen and (max-width:991px){
            &--item{
                 padding: rem(20px);
                .image{
                    flex: 0 0 40px;
                    max-width: 40px;
                }
                .desc{
                    margin-left: rem(20px);
                    h2{
                        font-size: rem(28px);
                    }
                }
            }
        }
        @media screen and (max-width:767px){
             flex-wrap: wrap;
            &--item{
                max-width:45%;
                flex:0 0 45%;
                .image{
                    flex: 0 0 35px;
                    max-width: 35px;
                }
                .desc{
                    margin-left: rem(20px);
                    h2{
                        font-size: rem(24px);
                    }
                }
            }
        }
        @media screen and (max-width:500px){
             flex-wrap: wrap;
            &--item{
                max-width:100%;
                flex:0 0 100%;
                text-align:center;
                &:not(:last-child){
                    margin-right:0;
                }
                .image{
                    flex: 0 0 35px;
                    max-width: 35px;
                }
                .desc{
                    margin-left: rem(20px);
                    h2{
                        font-size: rem(24px);
                    }
                }
            }
        }
    }
}
[lang='ar']{
    .courseList{
        &__box{
            &--item{
                &:not(:last-child){
                    margin-left: rem(30px);
                    margin-right:0;
                }
                .desc{
                    margin-right: rem(40px);
                    margin-left:0;
                }
            }
            @media screen and (max-width:1025px){
                &--item{
                    &:not(:last-child){
                        margin-left: rem(20px);
                        margin-right:0;
                    }
                    .desc{
                        margin-right: rem(25px);
                        margin-left:0;
                    }
                }
            }
            @media screen and (max-width:991px){
                &--item{
                    .desc{
                        margin-right: rem(20px);
                        margin-left:0;
                    }
                }
            }
            @media screen and (max-width:767px){
                &--item{
                    .desc{
                        margin-right: rem(20px);
                        margin-left:0;
                    }
                }
            }
            @media screen and (max-width:500px){
                &--item{
                    &:not(:last-child){
                        margin-left:0;
                    }
                    .desc{
                        margin-right: rem(20px);
                        margin-left:0;
                    }
                }
            }
        }
    }
}
</style>
