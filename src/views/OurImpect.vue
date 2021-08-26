<template>
  <div class="ourImpect">
    <section-scroll :page-sections="this.sideSectionScroll"></section-scroll>
    <section data-color-theme="light" id="header">
      <banner-slider :banner-slides="this.mainbanner"></banner-slider>
    </section>
    <div class="contentWrapper">
      <section data-color-theme="dark" id="targets_measurements">
        <targets-and-measurement
          aria-label="Targets and Measurements"
          section-title="Targets and Measurements"
          arabic-section-title="الأهداف والمقاييس"
        ></targets-and-measurement>
      </section>
      <section>
        <our-impect
          aria-label="We will be measuring/tracking the below for"
          section-title="We will be measuring/tracking the below for"
        ></our-impect>
      </section>
      <!-- <section data-color-theme="dark" id="testimonials">
        <testimonials
          aria-label="testimonials"
          section-title="testimonials"
          arabic-section-title="الشهادات - التوصيات"
        ></testimonials>
      </section> -->
    </div>
  </div>
</template>

<script>
import BannerSlider from "@/common/components/base/BaseBannerSlider.vue";
import BaseLoader from "@/common/components/base/BaseLoader";
import TargetsAndMeasurement from "@/modules/ourImpect/components/TargetsAndMeasurement.vue";
import OurImpect from "@/modules/ourImpect/components/OurImpect.vue";
// import testimonials from "@/modules/ourImpect/components/Testimonials.vue";
export default {
  name: "Home",
  components: {
    BannerSlider,
    TargetsAndMeasurement,
    Testimonials: () =>
      import("@/modules/ourImpect/components/Testimonials.vue"),
    BaseLoader,
    OurImpect,
    // testimonials
    // groupSection,
  },
  data() {
    return {
       mainbanner:{
        en:{
          bannerSlides: [
          {
            image: "impectbanner.png",
            title: "our impact",
            subtitle:
              "",
          },
        ],
        },
        ar:{
            bannerSlides: [
            {
              image: "impectbanner.png",
              title: "تأثيرنا",
              subtitle:
                "",
            },
          ],
        }
      },
      scroll: [],
      sideSectionScroll: {
        en: {
          pageSections: [
            {
              title: "Header",
              id: "header",
            },
            {
              title: "targets and measurement",
              id: "targets_measurements",
            },
              // {
              //   title: "testimonials",
              //   id: "testimonials",
              // },
            {
              title: "Footer",
              id: "footer",
            },
          ],
        },
        ar: {
          pageSections: [
            {
              title: "الرئيسية",
              id: "header",
            },
            {
              title: "الأهداف والمقاييس",
              id: "targets_measurements",
            },
              // {
              //   title: "الشهادات - التوصيات",
              //   id: "testimonials",
              // },
            {
              title: "تذييل",
              id: "footer",
            },
          ],
        },
      },
    };
  },
  created() {
    this.$i18n.locale == "en"
      ? (this.sideSectionScroll = this.sideSectionScroll.en.pageSections)
      : (this.sideSectionScroll = this.sideSectionScroll.ar.pageSections);
      this.$i18n.locale == "en"
      ? (this.mainbanner = this.mainbanner.en.bannerSlides)
      : (this.mainbanner = this.mainbanner.ar.bannerSlides);
    console.log(this.sideSectionScroll.ar.pageSections);
  },
};
</script>
<style lang="scss" scoped>
.ourImpect {
  background: var(--bg);
  .contentWrapper {
    padding: 0px;
  }
  /deep/ {
    .report_items {
      .card__link {
        &:focus {
          --highlight: var(--primary);
        }
      }
    }
    .mainBanner {
      margin-bottom: 0;
      .banner__slide {
        --overlay: #000;
        // &:after {
        //   opacity: 0.6;
        // }
        &:before {
          display: none;
        }
      }
      @media screen and (max-width: 400px) {
        .banner__slide--caption {
          bottom: rem(145px);
        }
      }

      .banner__caption p {
        color: #fff;
      }
    }
  }
}

.home {
  background: var(--bg);
  /deep/ {
    .mainBanner {
      .scrollDown {
        display: none;
      }
    }
    .financialReports {
      .financialReport {
        &__title {
          color: #ffffff;
        }
        &__wrapper {
          .sliderNavigation {
            &__controls {
              #prevArrow {
                color: #fff;
                border: 1px solid #fff !important;
                // width:40px;
                // height:40px;
              }
              #nextArrow {
                color: #fff;
                border: 1px solid #fff !important;
                // width:40px;
                // height:40px;
              }
            }
          }
        }
        &__year {
          &--link {
            a {
              color: #d5d5d5;
              &:active,
              &:focus {
                &::after {
                  border-color: #e3ce13;
                }
              }
              &.active {
                color: #e3ce13; /*#e3ce13*/
                &::before {
                  background: #cc7ce9;
                }
                &:hover {
                  color: #e3ce13;
                }
              }
              &:hover {
                color: #d5d5d5;
              }
            }
          }
        }
      }
    }
    #stock_market {
      .stockUpdates {
        background: var(--bg);
      }
    }
  }
}
</style>
