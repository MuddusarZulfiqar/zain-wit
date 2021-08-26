<template>
    <div class="meetMentorsCard">
          <div class="meetMentorsCard__image">
               <img
                    :src="
                         require(`@/assets/images/meetMentors/${directorInfo.image}`)
                    "
                    alt=""
                    class="img-fluid"
               />
          </div>
          <h4 v-if="directorInfo.name" class="meetMentorsCard--title">{{ directorInfo.name }}</h4>
          <span v-if="directorInfo.jobTitle" class="meetMentorsCard--destination">{{
               directorInfo.jobTitle
          }}</span>
          <a href="#" @click.prevent="$emit('openDirmodel',directorInfo)" class="abs-link meetMentorsCard__link"></a>
     </div>
</template>

<script>

    export default {
          props:{
               directorInfo:Object
          },
          data(){
               return{
                    directorIn: {},
                    
               } 
          },
          emits:['openDirmodel'],  
    }
</script>

<style lang="scss" scoped>
.meetMentorsCard {
    padding: rem(10px);
    box-shadow: 7px 7px 4px 0 rgba($color: #000000, $alpha: 0.1);
    background: #fff;
    text-align: center;
    padding-bottom: rem(25px);
    transition: 0.4s ease all;
     height: 100%;
     min-height: 400px;
    position: relative;
    
    &:hover{
          background: var(--secondary);
          .meetMentorsCard--title{
               color: #fff;
          }
          .meetMentorsCard--destination{
               color: #fff !important;
          }
     }
    &__image{
         width:100%;
         height: 300px;
         img{
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: top;
         }
         @media screen and (max-width:450px) {
              height: 400px;
         }
    }
    &--title {
        font-size: rem(18px);
        color: #131413;
        font-weight: bold;
        margin-top: rem(30px);
        transition: 0.4s ease all;
        margin-bottom: rem(5px);
    }
    &--destination {
        font-size: rem(15px);
        color: var(--primary) !important;
        font-weight: bold;
        transition: 0.4s ease all;
        display: block;
        @media screen and (max-width:616px){
          min-height: 25px;
        }
    }
//     @media screen and (max-width:1026px){
//           min-height: 412px;
//      }
//     @media screen and (max-width:991px) {
//          min-height: 275px;
//     }
//     @media screen and (max-width:575px) {
//          min-height: 250px;
//     }
}
</style>