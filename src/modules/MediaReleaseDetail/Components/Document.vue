<template>
    <ul class="relatedDocuments__list">
        <li v-for="document in documents" :key="document.index" class="relatedDocuments__list--item">
            <router-link
                :to="document.link"
                class="document__info"  aria-label="Image – image-icon – 100 megabytes">
                <h2>
                    {{document.title}}
                </h2>
                <div class="relatedDocuments__list--item--documents">
                    <h3> {{document.downloadTitle}}</h3>
                    <div class="icon">
                        <span>
                            <svg-icon
                                :icon-id="document.type==='image'?'gallery-icon' : document.type==='video' ? 'video-icon' : document.type==='pdf' ? 'pdf-icon' : ''"
                                :icon-viewbox="document.type==='image'?'0 0 43.94 41.19' : document.type==='video' ? '0 0 238.4 224' : document.type==='pdf' ? '0 0 369 384' : ''"
                            ></svg-icon>
                        </span>
                        {{document.size}}
                    </div>
                </div>
            </router-link>
        </li>
    </ul>
</template>

<script>
export default {
    props: {ariaLabel: String },
    data(){
         return{
              documents:[
                   {
                        index:0,
                        type:"image",
                        link:"#",
                        title:"Mr Ahmed Al Tahous, Chairman Of Zain Group (left) & Bader Al Khafari, Zain Vice Chairman & Group CEO",
                        downloadTitle:"DOWNLOAD IMAGE",
                        size:"100MB"
                   },
                   {
                        index:1,
                        type:"video",
                        link:"#",
                        title:"Mr Ahmed Al Tahous, Chairman Of Zain Group (left) & Bader Al Khafari, Zain Vice Chairman & Group CEO",
                        downloadTitle:"DOWNLOAD video",
                        size:"400MB"
                   },
                   {
                        index:2,
                        type:"pdf",
                        link:"#",
                        title:"Mr Ahmed Al Tahous, Chairman Of Zain Group (left) & Bader Al Khafari, Zain Vice Chairman & Group CEO",
                        downloadTitle:"DOWNLOAD ENGLISH PDF",
                        size:"150MB"
                   },
                   {
                        index:3,
                        type:"pdf",
                        link:"#",
                        title:"Mr Ahmed Al Tahous, Chairman Of Zain Group (left) & Bader Al Khafari, Zain Vice Chairman & Group CEO",
                        downloadTitle:"DOWNLOAD ARABIC PDF",
                        size:"150MB"
                   }
              ]
         }
    }
}
</script>

<style lang="scss" scoped>
.relatedDocuments{  
    --barcolor: #6e337a;
    --trackcolor: #adadad;
    &__list{
        list-style: none;
        &--item{
            margin: 0px;
            &--documents{
                @include flex (center , space-between);
                flex-wrap: nowrap;
                flex:0 0 350px;
                position:relative;
                @media screen and (max-width:950px){
                    flex:0 0 250px;
                }
                 @media screen and (max-width:667px){
                    flex:0 0 215px;
                }
                 @media screen and (max-width:575px){
                    flex:none;
                    width:100%;
                }
               @media screen and (min-width: 576px){
                   padding-left: 20px;
                    &:before{
                        content:"";
                        position: absolute;
                        width: 1px;
                        height:30px;
                        left:0;
                        top:50%;
                        transform: translateY(-50%);
                        background: #000;
                    }
               }
            }
            .document__info {
                width: 100%;
                background: #fff;
                padding: rem(15px) rem(35px);
                text-decoration: none;
                box-shadow: 0 0 13px 0px rgba($color: #000000, $alpha: 0.2);
                border: 2px solid transparent;
                transition: 0.4s ease all;
                margin-bottom: rem(30px);
                outline-offset: 0;
                outline-width: 2px;
                display:flex;
                align-items: center;
                justify-content: space-between;
                @media screen and (max-width:991px) {
                    padding: rem(15px) rem(25px);
                }
                @media screen and (max-width:575px){
                    flex-direction: column;
                     padding: rem(15px);
                }
                &:focus {
                    outline-color: var(--primary);
                    background: var(--primary);
                }
                &:hover {
                    border-color: var(--primary);
                    background: var(--primary);
                }
                .icon {
                    font-size: rem(20px);
                    color: #131413;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    flex: 1;
                    justify-content: flex-end;
                    @media screen and (max-width:767px) {
                        font-size: rem(18px);
                    }
                    span {
                        color: #131413;
                        width: 22px;
                        height: 20px;
                        display: inline-block;
                        margin-right: 10px;
                        @media screen and (max-width:767px) {
                            width: 20px;
                            height: 18px;
                        }
                    }
                }
                h2{
                    padding-right:rem(60px);
                    font-weight:600;
                    @media screen and (max-width:667px){
                        padding-right:rem(25px);
                    }
                    @media screen and (max-width:575px){
                        padding-right:0;
                        margin-bottom: rem(25px);
                    }
                }
                h3 {
                    margin: 0px;
                    font-size: rem(20px);
                    font-weight: 900;
                    text-transform: uppercase;
                    color: var(--secondary);
                    margin-right:rem(35px);
                    @media screen and (max-width:991px) {
                        font-size: rem(18px);
                    }
                     @media screen and (max-width:667px) {
                        font-size: rem(16px);
                        margin-right:rem(20px);
                    }
                }
            }
            a:hover,a:focus{
                outline-width: 3px;
                outline-offset: 4px;
                .icon{
                    color: #fff;
                    span{
                        color: #fff;
                    }
                }
                h3 , h2{
                    color: #fff !important;
                }
                .relatedDocuments__list--item--documents{
                    &:before{
                        background: #fff;
                    }
                }
            }
        }
    }
    
}
[lang='ar']{
    .relatedDocuments{  
        &__list{
            &--item{
                &--documents{
                    @media screen and (min-width: 576px){
                        padding-right: 20px;
                        padding-left:0;
                        &:before{
                            right:0;
                            left:auto;
                        }
                    }
                }
                .document__info {
                    .icon {
                        span {
                            margin-left: 10px;
                            margin-right:0;
                        }
                    }
                    h2{
                        padding-left:rem(60px);
                        padding-right:0;
                        @media screen and (max-width:667px){
                            padding-left:rem(25px);
                            padding-right:0;
                        }
                        @media screen and (max-width:575px){
                            padding-left:0;
                        }
                    }
                    h3 {
                        margin-left:rem(35px);
                        margin-right:0;
                        @media screen and (max-width:667px) {
                            margin-left:rem(20px);
                            margin-right:0;
                        }
                    }
                }
            }
        }
        
    }
}
</style>