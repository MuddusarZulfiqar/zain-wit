<template>
    <div class="mediaGallery">
        <section id="introduction" data-color-theme="light">
            <banner-slider :banner-slides="bannerSlides"></banner-slider>
        </section>
        <section class="contentWrapper" id="pressReleasesec" role="region" aria-label="press release section">
            <div class="container">
                <div class="mediaGallery__tabs">
                    <b-tabs pills content-class="mt-3">
                        <b-tab title="news" active>
                            <gallery-detail-card :card-data="cardData" aria-label="PRESS RELEASE"></gallery-detail-card>
                        </b-tab>
                        <b-tab title="events">
                            <gallery-detail-card :card-data="cardData" aria-label="PRESS RELEASE"></gallery-detail-card>
                        </b-tab>
                        <b-tab title="gallery" >
                            <gallery-detail-card :card-data="cardData" aria-label="PRESS RELEASE"></gallery-detail-card>
                        </b-tab>
                    </b-tabs>
                 </div>
                <gallery-detail-pagination aria-label="PRESS RELEASE PAGINATION"></gallery-detail-pagination> 
            </div>
        </section>
    </div>
</template>

<script>

export default {
    components: { 
        BannerSlider: () => import("@/common/components/base/BaseBannerSlider.vue"),
        GalleryDetailCard: () => import("@/modules/GalleryDetail/componenets/partials/GalleryDetailCard.vue"),
        GalleryDetailPagination: () => import("@/modules/GalleryDetail/componenets/partials/GalleryDetailPagination.vue"),
    },
    data() {
        return {
            bannerSlides: [
                {
                    image: 'new_pressRelease__banner.png',
                    title: 'media gallery',
                    subtitle:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
                },
            ],
            cardData:[
                {
                    index:0,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire preciseZain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:1,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:2,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:3,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:4,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:5,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:6,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:7,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:8,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:9,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:10,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
                {
                    index:11,
                    image:"towerXchange.png",
                    date:"26 Jan 2021",
                    link:"gallery-detail",
                    title:"Zain Drone assigned by Kuwait’s Public Authority of Industry to acquire precise.."
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.mediaGallery {
    background: #f8f8f8;
    --toggleColor:var(--secondary);
    /deep/{
        @media screen and (max-width:991px){
            .tabs{
                .nav-pills{
                    flex-direction: row;
                    li{
                        width: 33.3%;
                    }
                }
            }
        }
        @media screen and (min-width:767px){
            .mainBanner .banner__slide--image{
                height:100%;
                img{
                    height: 100%;
                }
            }
        }
    }
}               
</style>
