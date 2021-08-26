<template>
     <div class="courseDetal" :aria-label="ariaLabel">
          <div class="container">
               <h2 class="sectionTitle">{{ sectionTitle }}</h2>
               <div class="row">
                    <div class="col-lg-8 col-md-7">
                         <div class="main_content">
                              <h3 class="title">
                                   <svg-icon
                                   icon-id="shiningStar-icon"
                                   icon-viewbox="0 0 45 45"
                                   ></svg-icon> cource detail
                              </h3>
                              <div class="detail">
                                   <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                   </p>
                                   <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                   </p>
                                   <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                   </p>
                              </div>
                              <!-- <h3 class="title">Requirments</h3> -->
                              <h3 class="title">
                                   <svg-icon
                                   icon-id="description-icon"
                                   icon-viewbox="0 0 38 38"
                                   ></svg-icon>Requirments
                              </h3>
                              <div class="detail">
                                   <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                   </p>
                                   <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                   </p>
                                   <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing Lorem Ipsum passages, and more
                                        recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                   </p>
                              </div>

                         </div>
                    </div>
                    <div class="col-lg-4 col-md-5">
                         <div class="box ">
                              <div class="imageSection">
                                   <img src="@/assets/images/icons/char_17-01.jpg" class="img-fluid" />
                              </div>
                              <h5 class="namelabel">
                                   Johne doe
                              </h5>
                              <span class="subtitle">
                                   Lorem, ipsum, dolor.
                              </span>
                              <div class="detail">
                                   <p>Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Tempora recusandae corrupti odit sapiente accusantium optio, quo sed perferendis voluptas architecto exercitationem deleniti ab perspiciatis accusamus animi aliquam saepe <router-link to="#" href="">. Praesentium, nisi?</router-link></p>
                              </div>
                         </div>
                         <div class="box courseDetal__detail">
                              <h5 class="boxTitle">Includes</h5>
                              <ul class="courseDetal__detail--list">
                                   <li>
                                        Lorem ipsum dolor sit, amet consectetur.
                                   </li>
                                    <li>
                                        Lorem ipsum dolor sit, amet consectetur.
                                   </li>
                                    <li>
                                        Lorem ipsum dolor sit, amet consectetur.
                                   </li>
                                    <li>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, unde.
                                   </li>
                                    <li>
                                        Lorem ipsum dolor sit, amet consectetur.
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
     export default {
          props: {
               sectionTitle: String,
               ariaLabel: String,
          },
     };
</script>

<style lang="scss" scoped>
     .courseDetal {
          .sectionTitle {
               font-weight: 900;
               color: var(--primary);
               font-size: rem(36px);
               margin-bottom: rem(10px) !important;
               text-transform: capitalize;
               @media screen and (max-width:1600px){
                    font-size: rem(32px);
               }
               @media screen and (max-width:991px){
                    font-size: rem(26px);
               }
               @media screen and (max-width:767px){
                    font-size: rem(22px);
               }
          }
          .main_content {
               margin-right: rem(50px);
               margin-bottom: rem(40px);
                h3.title{
                    font-size: rem(24px);
                    font-weight: 800;
                    color: var(--secondary);
                    text-transform: uppercase;
                    display: flex;
                    align-items: center;
                    padding: rem(30px) 0;
                    border-bottom: 1px solid #d6d6d6;
                    margin-bottom: rem(20px);
                    div{
                         display: inline-block;
                         width: 42px;
                         height: 47px;
                         margin-right: rem(15px);
                         @media screen and (max-width:767px) {
                              width: 35px;
                              height: 35px;
                         }
                    }
                    @media screen and (max-width:767px) {
                         font-size: rem(22px);
                    }
               }
               .detail {
                    // margin-bottom: rem(40px);
                    p {
                         font-size: rem(22px);
                         line-height: 1.4;
                         font-weight: 600;
                         color:#444444;
                    }
               }
               @media screen and (max-width:991px){
                    margin-right:0;
               }
               @media screen and (max-width:767px){
                    .detail {
                         p {
                              font-size: rem(18px);
                         }
                    }
               }
          }
          .box {
               margin-bottom:rem(30px);
               box-shadow:0 0 7px rgba($color:#000,$alpha:0.1);
               background: #fff;
               padding: rem(40px) rem(30px);
               text-align:center;
               .imageSection {
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 100px;
                    border-radius: 50%;
                    overflow: hidden;
               }
               h5{
                    font-size:rem(30px);
                    font-weight:700;
                    text-align:center;
                    margin-top:rem(30px);
                    text-transform:capitalize;
                    color:#444444;
               }
               .subtitle{
                    color: #999999;
                   font-weight: bold;
                   font-size: rem(20px);
                   text-transform: capitalize;
               }
               .detail{
                    margin-top:rem(30px);
                    p{
                         color: #999999;
                         font-size: rem(22px);
                         line-height: 1.4;
                         font-weight: 600;
                    }
                    a{
                         color:var(--secondary);
                         font-weight:bold;
                    }
               }
               @media screen and (max-width:767px){
                    padding:rem(25px);
                    h5{
                         font-size:rem(25px);
                         margin-top:rem(25px);
                    }
                    .subtitle{
                         font-size: rem(18px);
                    }
                    .detail{
                         p{
                              font-size: rem(18px);
                         }
                    }
               }
          }
          &__detail{
               text-align:left !important;
               h5{
                    text-align:left !important;
                    margin-bottom:rem(30px);
               }
               ul{
                    list-style-type:none;
                    li{ 
                         position:relative;  
                         padding-left: 25px;
                         color: #999999;
                         font-size: rem(22px);
                         line-height: 1.4;
                         font-weight: 600;
                         &:before{
                              content:'';
                              position: absolute;
                              left: 0px;
                              width: 8px;
                              height: 8px;
                              background:var(--primary);
                              border-radius:50%;
                              top: 50%;
                              transform: translateY(-50%);
                         }
                    }
               }
               @media screen and (max-width:767px){
                    ul{
                         li{
                              font-size:rem(18px);
                         }
                    }
               }
          }
     }

     [lang='ar']{
          .courseDetal {
               .main_content {
                    margin-left: rem(50px);
                    margin-right:0;
                    @media screen and (max-width:991px){
                         margin-left:0;
                    }
                     h3.title{
                         div{
                              margin-left: rem(15px);
                              margin-right:0;
                         }
                    }
               }
               &__detail{
                    text-align:right !important;
                    h5{
                         text-align:right !important;
                    }
                    ul{
                         li{  
                              padding-right: 25px;
                              padding-left:0;
                              &:before{
                                   content:'';
                                   right: 0px;
                                   left:auto;
                              }
                         }
                    }
               }
          }
     }
</style>