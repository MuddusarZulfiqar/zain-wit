<template>
    <div class="MeetMentorsModal" >
        <b-modal modal-class="MeetMentorsModal"
          ref="MeetMentorsModal"
          centered
          hide-footer
          @hidden="$emit('closeDetailModal',false)"
          v-model="showModal" >
          <div class="row" >
               <div class="col-md-3">
                    <div class="image">
                         <img
                         :src="
                              require(`@/assets/images/meetMentors/${director.image}`)
                         "
                         alt=""
                         class="img-fluid"
                    />
                    </div>
               </div>
               <div class="col-md-9">
                    <div class="upperInfo">
                         <div class="Detail">
                              <h5 class="title name">{{director.name}}</h5>
                         </div>
                         <div class="Detail" v-if="director.jobTitle != ''">
                              <span class="Detail__info jobTitle">{{director.jobTitle}}</span>
                         </div>
                    </div>
                    <div class="bio">
                         <base-smooth-scrollbar height="300px" ref="scrollSmooth">
                              <!-- <div class="Detail">
                                   <span class="title" v-if="director.email!= ''">{{$t("labels.email")}}</span>
                                   <span class="Detail__info"> {{director.email}}</span>
                              </div> -->
                              <div class="Detail" v-if="director.detail != ''">
                                   <span class="title">{{$t("labels.bio")}}</span>
                                   <span class="Detail__info innerTextsection" v-html="director.detail"></span>
                              </div>
                         </base-smooth-scrollbar>
                    </div>
                    
               </div>
          </div>
     </b-modal>
    </div>
</template> 

<script>
    export default {
        name:"MeetMentorsModal",
        props:{
            isShow:{
               type:Boolean,
               default:false
            },
            director:Object
          },
          data(){
               return{
                    showModal:this.isShow,
               }
          },
          //emits:['closeVideoModal'],
          mounted(){
               //this.$refs.scrollSmooth.updateScroll();
               // console.log();
          },
    }
</script>

<style lang="scss" scoped>

     .MeetMentorsModal{
          .upperInfo{
               padding-bottom: 5px;
               margin-bottom: 10px;
               border-bottom: 2px solid rgba(0,0,0,.1);
          }
          .innerTextsection{
               p{
                    &:first-child{
                         display: inline;
                    }
               }
          }
          .Detail{
               ul {
                    &:not([class]) {
                         margin-left: rem(35px);
                    }
                    li {
                         margin-bottom: rem(18px);
                         &::marker {
                              color: #d31b88;
                         }
                    }
               }
               margin-bottom: rem(10px);
               .title{
                    font-weight: 800;
                    color: #000;
                    font-size: rem(22px);
                    text-transform: capitalize;
                    margin: rem(10px) 0px 0px 0px;
                    display: inline-block;
                    &.name{
                         width: 100%;
                         font-size: rem(32px);
                         font-weight: 900;
                         @media screen and (min-width:768px) {
                              padding-right: 25px;
                         }
                    }
               }
               &__info{
                    font-size: rem(20px);
                    font-weight: 600;
                    line-height: 1.4;
                    &.jobTitle{
                         line-height: 0;
                         opacity: 0.6;
                    }
                    /deep/{
                         p{
                              display: inherit;
                         }
                    }
               }
               
          }
          @media screen and (max-width:767px){
               .image{
                    text-align:center;
                    img{
                         max-width:200px;
                    }
               }
               .upperInfo{
                    text-align: center;
               }
               .Detail{
                    ul {
                         &:not([class]) {
                              margin-left: rem(25px);
                         }
                         li {
                              margin-bottom: rem(16px);

                         }
                    }
                    .title{
                         font-size: rem(18px);
                         &.name{
                              font-size: rem(25px);
                         }
                    }
                    &__info{
                         font-size: rem(18px);
                    }
                    
               }

          }
     }
     
[lang='ar']{
     .MeetMentorsModal{
          .Detail{
               ul {
                    &:not([class]) {
                         margin-right: rem(35px);
                         margin-left:0;
                    }
               }
               .title{
                    &.name{
                         @media screen and (min-width:768px) {
                              padding-left: 25px;
                              padding-right:0;
                         }
                    }
               }   
          }
          @media screen and (max-width:767px){
               .upperInfo{
                    text-align: center;
               }
               .Detail{
                    ul {
                         &:not([class]) {
                              margin-right: rem(25px);
                              margin-left:0;
                         }

                    }  
               }
          }
     }
}
</style>