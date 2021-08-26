<template>
  <div class="home">
    <section-scroll :page-sections="this.sideNavigations"></section-scroll>
    <section data-color-theme="light" id="header">
      <a href="https://www.youtube.com/watch?v=iJCQbFBELho" target="_zain" class="bannerLink">
      <banner-slider :banner-slides="this.mainbanner" ></banner-slider>
      </a>
    </section>
    <div class="contentWrapper">
      <section data-color-theme="dark" id="our_purpose">
        <About
          aria-label="Our Purpose"
          section-title="Our Purpose"
          arabic-section-title="غرضنا"
        ></About>
      </section>
      <section data-color-theme="light" id="programs">
        <Program
          aria-label="Program"
          sectionTitle="Program"
          arabic-section-title="البرنامج"
        ></Program>
      </section>
      <section data-color-theme="dark" id="meet_mentors">
        <meet-mentors
          aria-label="meetmentors"
          section-title="Meet the Mentors"
          arabic-section-title="قابل المدربين"
        ></meet-mentors>
      </section>
      <section id="how_join" data-color-theme="dark">
        <how-join
          aria-label="how to join?"
          section-title="how to join?"
          arabic-section-title="كيفية الانضمام؟"
        ></how-join>
      </section>
      <section data-color-theme="dark" id="faq">
        <Faq
          aria-label="faqs"
          section-title="FAQs"
          arabic-section-title="الأسئلة الشائعة"
        ></Faq>
      </section>
      <section data-color-theme="dark" id="contact">
        <contact
          aria-label="contact"
          section-title="contact"
          arabic-section-title="اتصل"
        ></contact>
      </section>
    </div>
  </div>
</template>

<script>
import BannerSlider from "@/common/components/base/BaseBannerSlider.vue";
import BaseLoader from "@/common/components/base/BaseLoader";
import Menu from "@/common/layout/mixin/Menu";
import About from "@/modules/home/components/About.vue";
import MeetMentors from "@/modules/home/components/MeetMentors.vue";
import Faq from "@/modules/home/components/Faq.vue";
import contact from "@/modules/home/components/Contact.vue";
import Program from "@/modules/home/components/Program.vue";
import HowJoin from "@/modules/home/components/HowJoin.vue";
export default {
  name: "Home",
  mixins: [Menu],
  components: {
    BannerSlider,
    About,
    MeetMentors,
    Faq,
    BaseLoader,
    Program,
    HowJoin,
    contact,
  },
  data() {
    return {
      mainbanner:{
        en:{
            bannerSlides: [
            {
              image: "homeBanner-1920x1000.png",
              title: "Women In Tech",
              subtitle:'',
              discover: "#",
            },
          ],
        },
        ar:{
            bannerSlides: [
            {
              image: "homeBanner-1920x1000.png",
              subtitle:'',
              title: "المرأة في التكنولوجيا",
              discover: "#",
            },
          ],
        }
      },     
      sideNavigations: {
        en: {
          pageSections: [
            {
              title: "HEADER",
              id: "header",
            },
            {
              title: "OUR PURPOSE",
              id: "our_purpose",
            },
            {
              title: "PROGRAM",
              id: "programs",
            },
            {
              title: "MEET THE MENTORS",
              id: "meet_mentors",
            },
            {
              title: "HOW TO JOIN",
              id: "how_join",
            },
            {
              title: "FAQs",
              id: "faq",
            },
            {
              title: "CONTACT US",
              id: "contact",
            },
            {
              title: "FOOTER",
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
              title: "غرضنا",
              id: "our_purpose",
            },
            {
              title: "البرنامج",
              id: "programs",
            },
            {
              title: "قابل المدربين",
              id: "meet_mentors",
            },
            {
              title: "كيفية الانضمام؟",
              id: "how_join",
            },
            {
              title: "الأسئلة الشائعة",
              id: "faq",
            },
            {
              title: "اتصل بنا",
              id: "contact",
            },
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
    document.body.classList.add("front-page");
    this.$i18n.locale == "en"
      ? (this.sideNavigations = this.sideNavigations.en.pageSections)
      : (this.sideNavigations = this.sideNavigations.ar.pageSections);
      this.$i18n.locale == "en"
      ? (this.mainbanner = this.mainbanner.en.bannerSlides)
      : (this.mainbanner = this.mainbanner.ar.bannerSlides);
  },
  mounted() {
    document.body.classList.add("front-page");
  },
  destroyed() {
    document.body.classList.remove("front-page");
  },
};
</script>
<style lang="scss" scoped>

.home {
  /deep/{
    .contentWrapper{
      padding-bottom:0;
    }
  }
  section{
    position: relative;
    .bannerLink{
      display: block;
      position: relative;
      transition: .5s ease all;
      &:hover{
        opacity: .8;
      }
    }
  }
  background: #fff;

  /deep/ {
    .pageSections{
      .nav-pills{
        a{
          text-transform: unset;
        }
      }
    }
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
        &:after {
          opacity: 0.6;
        }
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
