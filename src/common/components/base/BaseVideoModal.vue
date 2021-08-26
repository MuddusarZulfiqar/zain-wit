<template>
    <div>
        <b-modal modal-class="videoModal"
            ref="videoModal"
            centered
            hide-footer
            @hidden="$emit('closeVideoModal',false)" 
            v-model="isShow" >
            <div class="videoUrl">
                <iframe :src="videoUrl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </b-modal>
    </div>
</template>

<script>
    export default {
        props:{
            isShow:{
                type:Boolean,
                default:false
            },
            videoUrl:String
        },
        data(){
            return{
                showModal:this.isShow
            }
        },
        emits:['closeVideoModal'],
       
    }
</script>

<style lang="scss" scoped>
    /deep/{
        @media screen and (max-width:1200px) {
            .modal .modal-dialog {
                margin-left: auto;
                margin-right: auto; 
            }
        }
        .videoModal{
            
                .close {
                    outline: 3px dashed transparent ;
                    outline-offset: 5px;
                    @media screen and (min-width: 1201px) {
                        width: 40px !important;
                        height: 40px !important;
                        background-image: url("data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 384' fill='%23fff'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfont-size:12px;fill:%23fff;font-family:MyriadPro-Regular, Myriad Pro;%7D%3C/style%3E%3C/defs%3E%3Ctext class='cls-1' transform='translate(69.64 314.67)'%3Eclose%3C/text%3E%3Cpath d='M612,128.9l-22.62-22.62L420,275.65,250.62,106.28,228,128.9,397.37,298.28,228,467.65l22.62,22.63L420,320.9,589.38,490.28,612,467.65,442.62,298.28Zm0,0' transform='translate(-228 -106.28)'/%3E%3C/svg%3E") !important;
                        right: -73px !important;
                        top: 0 !important;
                    }
                    @media screen and (max-width:1200px) {
                        z-index: 1;
                        right: 6px !important;
                        top: 6px !important;
                    }
                    @media screen and (max-width:575px) {
                        right: 0px !important;
                        top: 0px !important;
                    }
                    @media screen and (max-width: 1600px) and (min-width: 1201px) {
                        right: -50px !important;
                    }
                    &:focus,
                    &:focus-within {
                        outline-color: var(--primary);
                    }
                }
                .modal-content{
                    padding: 0px !important;
                    .modal-body{
                        padding: 0px !important;
                    }
                }
                .videoUrl{
                    width: 100%;
                    height: 550px;
                    @media screen and (max-width:1200px) {
                        padding: rem(40px);
                    }
                    @media screen and (max-width:767px) {
                        padding: rem(30px);
                        height: 450px;
                    }
                    @media screen and (max-width:575px) {
                        padding: rem(30px);
                        height: 400px;
                    }
                    iframe{
                        width: 100%;
                        height: 100%;
                    }
                }
        }
    }
</style>