<template>
  <div class="meetMentors">
    <section data-color-theme="light" id="header">
      <banner-slider :banner-slides="this.slides"></banner-slider>
    </section>
    <section class="contentWrapper">
      <Mentors></Mentors>
    </section>
  </div>
</template>

<script>
import BannerSlider from "@/common/components/base/BaseBannerSlider.vue";
import Mentors from "@/modules/MeetMentors/Mentors.vue";
export default {
  components: { BannerSlider, Mentors },
  data() {
    return {
      slides: {
        en: {
          bannerSlides: [
            {
              image: "mentorsbanner.png",
              title: "MEET THE MENTORS",
            },
          ],
        },
        ar: {
          bannerSlides: [
            {
              image: "mentorsbanner.png",
              title: "قابل المدربين ",
            },
          ],
        },
      },
    };
  },
  created() {
    this.$i18n.locale == "en"
      ? (this.slides = this.slides.en.bannerSlides)
      : (this.slides = this.slides.ar.bannerSlides);
  },
};
</script>

<style lang="scss" scoped>
.contentWrapper {
  padding: 0px;
}
</style>