<template>
  <div class="ZainWorld" id="worldofzain">
    <base-smooth-scrollbar height="200px">
      <p v-html="this.data.innerText"></p>
    </base-smooth-scrollbar>
    <div class="ZainWorld__slide customTabs">
      <div class="ZainWorld__slide--head customTabs__items">
        <carousel
          navigationLayout="side"
          navigation-theme="simple"
          :carousel-settings="sliderOption"
          @init="setSlider"
          role="tablist"
        >
          <div
            class="swiper-slide ZainWorld__slide--link"
            v-for="country in countries"
            :key="country.index"
            role="presentation"
          >
            <a
              @click.prevent.stop
              data-target="highlights"
              class="nav-link"
              :class="{ active: isActive(country.index) }"
              v-on:click.stop.prevent="tabIndex = country.index"
              data-toggle="tab"
              href="#"
              role="tab"
              :aria-controls="`tab_zainWorld_${country.index}`"
              :aria-selected="country.index == 0 ? 'true' : 'false'"
              :id="`zainWorld_${country.index}`"
            >
              <span class="icon">
                <img
                  :src="require(`@/assets/images/country/${country.image}.png`)"
                  alt=""
                  class="img-fluid"
                />
              </span>
              {{ country.name }}
            </a>
          </div>
        </carousel>
      </div>
      <div class="ZainWorld__slide--body customTabs__contents">
        <b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
          <b-tab
            v-for="country in countries"
            :key="country.index"
            :id="`tab_zainWorld_${country.index}`"
            :button-id="`zainWorld_${country.index}`"
            :title="country.name"
          >
            <div class="ZainWorld__content">
              <div class="ZainWorld__content--world text-center">
                <img
                  :src="require(`@/assets/images/map/${country.mapImg}`)"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import countries from "@/common/json/common";
export default {
  data() {
    return {
      tabIndex: 0,
      sliderOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        rtl: this.$i18n.locale == "en" ? false : true,
        breakpoints: {
          1201: {
            slidesPerView: 7,
          },
          992: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          415: {
            slidesPerView: 2,
          },
        },
      },
      countries:
        this.$i18n.locale == "en"
          ? countries.en.countries
          : countries.ar.countries,
      data: {
        en: {
          innerText:
            "The program spans across the Middle East and North Africa and is provided in seven countries which include Bahrain, Iraq, Kuwait, Jordan, Saudi Arabia, Sudan and South Sudan. When it comes to the region as a whole, there is still a long way to go in addressing the gap in STEM. At Zain, we are committed to bridging the divide as it will allow women to contribute in the future of technology.",
        },
        ar: {
          innerText:
            "يغطي البرنامج منطقة الشرق الاوسط وشمال افريقيا ويجري تقديمه في سبع دول حيث تعمل شركة زين، وهذه الدول هي؛ البحرين والعراق والكويت والأردن والمملكة العربية السعودية والسودان وجنوب السودان. وحينما يتعلق الأمر بالمنطقة ككل، لا يزال هناك شوطًا طويلاً يجب قطعه في رحلة معالجة الفجوة في مجال دراسة العلوم والتكنولوجيا والهندسة والرياضيات. وفي زين، نحن ملتزمون بسد الفجوة نظرًا لأن ذلك سيسمح المرأة بالمشاركة في مستقبل التكنولوجيا.",
        },
      },
    };
  },
  created() {
    this.$i18n.locale == "en"
      ? (this.data = this.data.en)
      : (this.data = this.data.ar);
  },
  methods: {
    isActive(index) {
      return this.tabIndex == index;
    },
  },
};
</script>

<style lang="scss" scoped>
.ZainWorld {
  margin-top: rem(45px);
  position: relative;
  p {
    font-size: rem(20px);
    color: #fff;
  }
  //     /deep/{
  //          .scrollArea{
  //               --h:115px;
  //           }
  //     }
  &__title {
    //    font-size: rem(24px);
  }
  &__slide {
    &--head {
      margin-top: rem(30px);
      margin-bottom: rem(30px);
      padding: 0px rem(30px);
      position: relative;
      @media screen and (max-width: 1199px) {
        margin-left: 5px;
        margin-right: 5px;
      }
      /deep/ {
        @media screen and (max-width: 1199px) {
          .swiper-container {
            margin: 0 20px;
          }
        }
        .sliderNavigation {
          height: 100%;
          z-index: 0;
          // @media screen and (min-width: 1201px) {
          //     display: none;
          // }
          @media screen and (max-width: 1200px) {
            // width: 95%;
            margin-left: auto;
            margin-right: auto;
            display: block !important;
          }

          &__controls {
            #nextArrow {
              right: -60px;
              @media screen and (max-width: 1200px) {
                right: -4px;
                top: 50% !important;
                transform: translateY(-50%);
              }
              @media screen and (max-width: 575px) {
                right: -5px;
              }
            }
            #prevArrow {
              left: -60px;
              @media screen and (max-width: 1200px) {
                left: -4px;
                top: 50% !important;
                transform: translateY(-50%);
              }
              @media screen and (max-width: 575px) {
                left: -5px;
              }
              // @media screen and (max-width: 530px) {
              //     top: 80px !important;
              // }
            }
          }
        }
      }
    }
    &--link {
      padding: rem(12px) rem(2px);
      a {
        // padding: rem(12px) rem(2px);
        padding: 8px 2px;

        font-size: rem(20px);
        color: #fff;
        text-transform: uppercase;
        outline: 3px dashed transparent;
        outline-offset: -2px !important;
        font-weight: bold;
        text-align: center;
        display: flex;
        justify-content: center;
        // display: inline-block;
        &.active {
          color: #67bbe9;
          &:hover {
            color: #67bbe9;
          }
        }
        &:hover {
          color: #fff;
        }
        &:focus {
          outline: 3px dashed var(--highlight);
        }
        .icon {
          max-width: 30px;
          min-width: 30px;
          display: inline-block;
          margin-right: rem(8px);
          @media screen and (max-width: 575px) {
            max-width: 22px;
            min-width: 22px;
            font-size: rem(16px);
          }
        }
      }
    }
  }
  &__content {
    &--items {
      display: flex;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 10px;
      padding-right: 10px;
      flex-wrap: wrap;
      @media screen and (max-width: 1200px) {
        justify-content: center;
        align-items: center;
      }
      .details {
        width: calc(100% / 5);
        @media screen and (max-width: 1200px) {
          width: calc(100% / 3);
          text-align: center;
        }
        @media screen and (max-width: 575px) {
          width: calc(100% / 2);
          margin-bottom: rem(25px);
        }
        &__icon {
          max-width: 50px;
          margin-bottom: 30px;
          @media screen and (max-width: 1200px) {
            margin-left: auto;
            margin-right: auto;
          }
        }
        &__title {
          font-size: rem(24px);
          font-weight: bold;
          color: #fff;
          margin-bottom: 20px;
          line-height: 1;
          span {
            font-size: 18px;
          }
        }
        &__subtitle {
          font-size: rem(18px);
          color: #d2d2d2;
        }
      }
    }
  }
}
[lang="ar"] {
  .ZainWorld {
    &__slide {
      &--head {
        /deep/ {
          .sliderNavigation {
            &__controls {
              #nextArrow {
                left: -60px;
                right: auto;
                @media screen and (max-width: 1200px) {
                  left: -4px;
                  right: auto;
                }
                @media screen and (max-width: 575px) {
                  left: -5px;
                  right: auto;
                }
              }
              #prevArrow {
                right: -60px;
                left: auto;
                @media screen and (max-width: 1200px) {
                  right: -4px;
                  left: auto;
                }
                @media screen and (max-width: 575px) {
                  right: -5px;
                  left: auto;
                }
              }
              &--arrow {
                transform: translateY(-50%) rotate(180deg);
              }
            }
          }
        }
      }
      &--link {
        a {
          .icon {
            margin-left: rem(8px);
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
