<template>
    <div class="course row justify-content-center">
        <Card v-for="card in cardData" :card="card" :key="card.index" />
    </div>
</template>

<script>
import Card from "./partials/Card.vue"
export default {
    name:'CourseList',
    components:{
        Card
    },
    data(){
        return{
            cardData:[
                {
                    index:0,
                    image:"courses.png",
                    title:"course title",
                    country:{
                        image:"kuwait.png",
                        name:"Kuwait"
                    },
                    detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
                    unit:"128 KWD",
                    links:[
                        {
                            text:"View Details",
                            link:"cource-detail"
                        },
                        {
                            text:"Enroll",
                            link:"#"
                        }
                    ]
                },
                {
                    index:1,
                    image:"courses.png",
                    title:"course title",
                    country:{
                        image:"kuwait.png",
                        name:"Kuwait"
                    },
                    detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
                    unit:"128 KWD",
                    links:[
                        {
                            text:"View Details",
                            link:"cource-detail"
                        },
                        {
                            text:"Enroll",
                            link:"#"
                        }
                    ]
                },
                {
                    index:2,
                    image:"courses.png",
                    title:"course title",
                    country:{
                        image:"kuwait.png",
                        name:"Kuwait"
                    },
                    detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
                    unit:"128 KWD",
                    links:[
                        {
                            text:"View Details",
                            link:"cource-detail"
                        },
                        {
                            text:"Enroll",
                            link:"#"
                        }
                    ]
                },
                {
                    index:3,
                    image:"courses.png",
                    title:"course title",
                    country:{
                        image:"kuwait.png",
                        name:"Kuwait"
                    },
                    detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
                    unit:"128 KWD",
                    links:[
                        {
                            text:"View Details",
                            link:"cource-detail"
                        },
                        {
                            text:"Enroll",
                            link:"#"
                        }
                    ]
                },
                {
                    index:4,
                    image:"courses.png",
                    title:"course title",
                    country:{
                        image:"kuwait.png",
                        name:"Kuwait"
                    },
                    detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
                    unit:"128 KWD",
                    links:[
                        {
                            text:"View Details",
                            link:"cource-detail"
                        },
                        {
                            text:"Enroll",
                            link:"#"
                        }
                    ]
                },
                {
                    index:5,
                    image:"courses.png",
                    title:"course title",
                    country:{
                        image:"kuwait.png",
                        name:"Kuwait"
                    },
                    detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
                    unit:"128 KWD",
                    links:[
                        {
                            text:"View Details",
                            link:"cource-detail"
                        },
                        {
                            text:"Enroll",
                            link:"#"
                        }
                    ]
                },
                {
                    index:6,
                    image:"courses.png",
                    title:"course title",
                    country:{
                        image:"kuwait.png",
                        name:"Kuwait"
                    },
                    detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
                    unit:"128 KWD",
                    links:[
                        {
                            text:"View Details",
                            link:"cource-detail"
                        },
                        {
                            text:"Enroll",
                            link:"#"
                        }
                    ]
                },
                 {
                    index:7,
                    image:"courses.png",
                    title:"course title",
                    country:{
                        image:"kuwait.png",
                        name:"Kuwait"
                    },
                    detail:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita",
                    unit:"128 KWD",
                    links:[
                        {
                            text:"View Details",
                            link:"cource-detail"
                        },
                        {
                            text:"Enroll",
                            link:"#"
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
// .course{
//     display: flex;
//     margin: rem(50px) 0px;
//     @media screen and (max-width:767px){
//         margin: rem(30px) 0 0 0;
//     }
//     &__card{
//         position: relative;
//         height: 440px;
//         overflow: hidden;
//         @media screen and (max-width:1600px) {
//             height: 400px;
//         }
//         @media screen and (max-width:575px) {
//             height: 375px;
//             max-width:375px;
//             margin-left:auto;
//             margin-right:auto;
//         }
//          &--image{
//             height: 100%;
//             width:100%;
//             position: relative;
//             &::before{
//                 content:'';
//                 width:100%;
//                 height: 100%;
//                 position: absolute;
//                 top: 0px;
//                 left: 0px;
//                 background: rgba($color: #000000, $alpha: 0.5);
//                 transition: 0.5s ease all;
//             }
//             img{
//                 height: 100%;
//                 width:100%;
//                 object-fit: cover;
//             }
//         }
//         &--content{
//             position: absolute;
//             width: calc(100% - 30px);
//             height: 100%;
//             top:calc(100% - 90px);
//             left:50%;
//             transform: translateX(-50%);
//             padding:rem(20px);
//             transition: 0.5s ease all;
//             @media screen and (max-width:1600px) {
//                 top:calc(100% - 90px);
//             }
//             h2{
//                 color: #fff;
//                 font-weight: 600;
//                 font-size: rem(30px);
//                 text-transform: capitalize;
//             }
//             .country{
//                 display: flex;
//                 align-items: center;
//                 margin-bottom: rem(25px);
//                 &--icon{
//                     flex: 0 0 30px;
//                     max-width: 30px;
//                 }
//                 &--name{
//                     flex:1;
//                     margin-left: rem(10px);
//                     color: #fff;
//                     font-size: rem(16px);
//                     font-weight: 300;
//                     text-transform: uppercase;
//                 }
//             }
//             p{
//                 color: #fff;
//                 font-size: rem(18px);
//                 line-height: 1.5;
//                 @include truncate(5,1.5);
//             }
//             .unit{
//                 font-size: rem(20px);
//                 color: #fff;
//                 font-weight: 800;
//                 margin-bottom: rem(20px);
//             }
//             .links{
//                 margin-top:rem(20px);
//             }
//             .linksStyle{
//                 list-style-type: none;
//                 a{
//                     width: 100%;
//                     border: 1px solid #fff;
//                     font-weight: 800;
//                     &:hover{
//                         background: var(--primary);
//                         border-color: var(--primary) !important;
//                         color: #fff;
//                     }
//                 }
//             }
//         }
//         &:hover{
//             .course__card--image{
//                 &::before{
//                     background: rgba($color: #000000, $alpha: 0.8);
//                 }
//             }
//             .course__card--content{
//                 top: 0px;
//             }
//         }
//     }
// }

</style>
