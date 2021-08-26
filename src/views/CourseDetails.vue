<template>
  <div class="courseDetail">
    <section data-color-theme="light" id="header">
      <banner-slider :banner-slides="bannerSlides"></banner-slider>
    </section>
    <section data-color-theme="light" id="detail">
      <main-detail
        section-title="Course Name Goes Here"
        aria-label="course Detail"
      ></main-detail>
    </section>
  </div>
</template>

<script>
import BannerSlider from "@/common/components/base/BaseBannerSlider.vue";
import MainDetail from "@/modules/CourseDetail/MainDetail.vue";
export default {
  name: "cource-detail",
  components: { BannerSlider, MainDetail },
  data() {
    return {
      bannerSlides: [
        {
          image: "innerBanner-1920x1000.png",
          title: "Your Children are<br>safe at home<br> are they safe online?",
          subtitle:
            "More than 30% of all internet users are children and with the expansion of the broadband it will radically increase",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
