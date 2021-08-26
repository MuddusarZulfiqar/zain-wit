<template>
    <div class="mediaGallery">
        <section id="introduction" data-color-theme="light">
            <banner-slider :banner-slides="bannerSlides"></banner-slider>
        </section>
        <div class="contentWrapper">
            <div class="container">
                <section id="courseList" role="region" aria-label="Course List">
                    <course-list ></course-list>
                </section>
                <section id="courseBox" role="region" aria-label="Course Box">
                    <course-box></course-box>
                </section>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: { 
        BannerSlider: () => import("@/common/components/base/BaseBannerSlider.vue"),
        CourseList: () => import("@/modules/courses/components/CourseList.vue"),
        CourseBox: () => import("@/modules/courses/components/CoursesBox.vue")
    },
    data() {
        return {
            bannerSlides: [
                {
                    image: 'new_pressRelease__banner.png',
                    title: 'courses',
                    subtitle:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.mediaGallery {
    background: #f8f8f8;
    --toggleColor:var(--secondary);
    /deep/{
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
