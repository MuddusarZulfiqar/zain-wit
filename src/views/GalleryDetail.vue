<template>
    <div class="pressRelease ">
        <section-scroll :page-sections="pageSections"></section-scroll>
        <section id="introduction" data-color-theme="light"> 
            <banner-slider :banner-slides="bannerSlides"></banner-slider>
        </section>
        <div class="contentWrapper">
            <section data-color-theme="dark">
                <media-release-detail-content></media-release-detail-content>
            </section>
        </div>
    </div>
</template>

<script>
import MediaReleaseDetailContent from '@/modules/MediaReleaseDetail/Components/MediaReleaseDetailContent.vue'
export default {
    components: { 
     BannerSlider: () => import("@/common/components/base/BaseBannerSlider.vue"),
     MediaReleaseDetailContent: () => import("@/modules/MediaReleaseDetail/Components/MediaReleaseDetailContent.vue")
    },
    data() {
        return {
          
          bannerSlides: [
                {
                    image: 'new_pressRelease__banner.png',
                    title: 'details',
                    subtitle:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
                },
            ],
            pageSections: [
                {
                    title: 'Introduction',
                    id: 'introduction',
                },
                {
                    title: 'Media Slider',
                    id: 'zainiac_slider',
                },
                {
                    title: 'Highlights',
                    id: 'highlight',
                },
                {
                    title: 'Description',
                    id: 'description',
                },
                {
                    title: 'Related document',
                    id: 'document',
                }
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.pressRelease {
    background: #f8f8f8;
    
}
</style>
