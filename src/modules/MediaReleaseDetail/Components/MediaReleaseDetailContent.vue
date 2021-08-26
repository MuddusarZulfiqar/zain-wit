<template>
  <div class="container pressReleaseMain">
        <div class="titleWrapper">
            <div class="title">
                <h2>{{innerText.heading}}</h2>
            </div>
            <router-link :to="`/${$i18n.locale}/media-gallery`" class="cross-icon">
                <span>
                    <svg-icon
                        icon-id="cross-icon2"
                        icon-viewbox="0 0 45 45"
                    ></svg-icon>
                </span>
            </router-link>
        </div>
        <base-media-slider :media-slides="images" id="zainiac_slider" data-color-theme="dark"></base-media-slider>
        <div class="highlight" id="highlight" aria-label="Highlights" role="region" data-color-theme="dark">
            <h3 class="title">
                <svg-icon
                    icon-id="shiningStar-icon"
                    icon-viewbox="0 0 45 45"
                ></svg-icon> {{$i18n.locale==='en'?'Highlights':'Arabic'}}:
            </h3>
            <ul>
                <li v-for="(text,i) in innerText.higlights" :key="i">
                    {{text}}
                </li>
            </ul>
        </div>
        <div class="description" id="description"  aria-label="DESCRIPTION" role="region" data-color-theme="dark">
            <h3 class="title">
                <svg-icon
                icon-id="description-icon"
                icon-viewbox="0 0 38 38"
                ></svg-icon> {{$i18n.locale==='en'?'description':'Arabic'}} :
            </h3>
            <div class="contentWrapper">
                <div>
                    <p v-for="(text,i) in innerText.description" :key="i">
                        {{text}}
                    </p>
                </div>
            </div>
        </div>
        <h3 class="title">
            <svg-icon
                icon-id="document-icon"
                icon-viewbox="0 0 42 47"
            ></svg-icon>{{$i18n.locale==='en'?'Related Documents':'Arabic'}} :
        </h3>
      <document id="document" aria-label="DOCUMENT" data-color-theme="dark"></document>
  </div>
</template>

<script>
export default {
    components: { BaseMediaSlider: ()=> import("@/common/components/base/BaseMediaSlider.vue"),
    Document: ()=> import("./Document.vue") },
    data() {
        return {
             innerText:{
                  heading:"Zain Group publishes insightful report on ‘Women in Technology Bridging the Gender Gap in STEM Fields’",
                  higlights:[
                       "Bader Al Kharafi: 'The role of women in tech needs to be increased. It is that simple.' ",
                       "Released on International Women’s Day, report explores important issues regarding the cause, nature, and effects of the challenges faced...",
                       "Report finds that if 600 million more women were connected to the internet over the next three years, global GDP would rise between US$13  billion - US$18 billion",
                       "Continually driving equality programs, Zain pushing an agenda that is cohesive, inclusive, and fair to all",
                       "Zain tapping into over 100 of its female workforce who were certified in the fundamentals of Data Analytics and Science"
                  ],
                  description:[
                       "Zain Group, the leading mobile telecom innovator in seven markets across the Middle East and Africa, announces the publication of its annual thought leadership report, this year entitled, Women in Technology - Bridging the Gender Gap in STEM Fields. It provides insights on the gender gap in science, technology, engineering, and math (STEM), highlighting the impact on socio-economic development across the board.",
                       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  ]
             },
            images: [
                {
                    image:"news-detail/zainiacSlider-image.png",
                    thumb:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    image:"news-detail/zainiacSlider-image.png",
                    thumb:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
                {
                    image:"news-detail/zainiacSlider-image.png",
                    thumb:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.pressReleaseMain{
    /deep/{
        .mediaSlider{
            &__item{
                @media screen and (min-width: 991px){
                    height:450px;
                }
                @media screen and (min-width: 768px){
                    height:350px;
                }
            } 
    }
        }
    h3.title{
        font-size: rem(24px);
        font-weight: 800;
        color: var(--secondary);
        margin-top: rem(10px);
        text-transform: uppercase;
        display: flex;
        align-items: center;
        padding: rem(30px) 0;
        
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
    ul{
        li{
            font-size: rem(22px);
            line-height: 1.4;
            font-weight: 600;
        }
    }
    .cross-icon{
        display: inline-block;
        height: max-content;
        &:hover{
            opacity: 0.6;
        }
    }
    .titleWrapper{
            display: flex;
            justify-content: space-between;
            padding-bottom: rem(23px);
            .title{
                flex: 1;
                h2{
                    font-weight: 900;
                    color: var(--primary);
                    font-size: rem(36px);
                    padding-right: rem(20px);
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
            }
            span{
                margin-top: rem(10px);
                flex: 0 0 80px;
                max-width: 80px;
                padding:0px rem(25px);
                transition: .5s;
                &:hover{
                    cursor: pointer;
                    opacity: .7;
                }
            }
    }
    /deep/{
        .mediaSlider{
            &::before,&::after{
                content: unset;
            }

        }
    }
    .description{
        .contentWrapper{
            &.scrollArea{
                height: 300px;
            }
            p{
                font-size: rem(22px);
                line-height: 1.4;
                font-weight: 600;
            }
        }
    }
}
[lang='ar']{
    .pressReleaseMain{
        h3.title{
            div{
                margin-left: rem(15px);
                margin-right:0;
            }
        }
        .titleWrapper{
            .title{
                h2{
                    padding-left: rem(20px);
                    padding-right:0;
                }
            }
        }
    }
}
</style>