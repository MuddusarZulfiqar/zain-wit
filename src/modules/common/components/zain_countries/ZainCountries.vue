<template>
  <div class="countrySlider__wrapper">
    <div class="countrySlider__country">
      <carousel
        navigationLayout="side"
        navigation-theme="simple"
        :carousel-settings="sliderOption"
        @init="setThumbSlider"
      >
        <div
          class="swiper-slide countrySlider__country--item"
          v-for="country in countries"
          :key="country.index"
        >
          <a @click.prevent.stop class="nav-link" href="#" :id="country.name">
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
    <div class="countrySlider__body">
      <carousel
        :fraction-pagination="true"
        :carousel-settings="sliderOptionTwo"
        slider-type="slider"
      >
        <div
          class="swiper-slide"
          v-for="country in countries"
          :key="country.name"
        >
          <zain-country :country-name="country.name"></zain-country>
        </div>
      </carousel>
    </div>
  </div>
</template> 

<script>
import ZainCountry from "./partials/ZainCountry.vue";
export default {
  components: { ZainCountry },
  props: { sectionTitle: String, ariaLabel: String },
  data() {
    return {
      tabIndex: 0,
      sliderOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        breakpoints: {
          1200: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          376: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
        },
      },
      sliderOptionTwo: {
        slidesPerView: 1,
        observer: true,
        observeParents: true,
        simulateTouch: false,
      },
      thumbSlider: null,
      countries: [
        {
          index: 0,
          image: "kuwait",
          name: "KAUWAIT",
        },
        {
          index: 1,
          image: "ksa",
          name: "Saudi Arabia",
        },
        {
          index: 2,
          image: "sudan",
          name: "SUDAN",
        },
        {
          index: 3,
          image: "south-sudan",
          name: "SOUTH sudan",
        },
        {
          index: 4,
          image: "sudan",
          name: "Iraq",
        },
        {
          index: 5,
          image: "bahrain",
          name: "BAHRAIN",
        },

        {
          index: 6,
          image: "jordan",
          name: "jordan",
        },
      ],
    };
  },
  methods: {
    setThumbSlider(slider) {
      this.thumbSlider = slider;
      var thumbs = { swiper: slider };
      this.sliderOptionTwo.thumbs = thumbs;
    },
  },
};
</script>

<style lang="scss" scoped>
.countrySlider {
  &__wrapper {
    padding-top: rem(45px);
  }
  &__country {
    position: relative;
    @media screen and (max-width: 1200px) {
      margin: 0 30px;
    }
    @media screen and (max-width: 991px) {
      margin: 0 40px;
    }
    &--item {
      &.swiper-slide-thumb-active {
        a {
          color: var(--primary) !important;
        }
      }
      a {
        padding: rem(12px) rem(2px);
        font-size: rem(18px);
        color: #585758;
        text-transform: uppercase;
        outline-offset: -3px !important;
        font-weight: bold;
        text-align: center;
        @media screen and (min-width: 1600px) {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: rem(16px);
        }
        @media screen and (max-width: 991px) {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &:hover {
          color: #585758;
        }
        &:focus {
          outline-color: var(--primary);
        }
        .icon {
          display: inline-block;
          margin-right: rem(8px);
          img {
            width: 30px;
            height: 23px;
          }
        }
      }
    }
    /deep/ {
      @media screen and (min-width: 1200px) {
        .sliderNavigation {
          display: none;
        }
      }
      .sliderNavigation {
        &.sideNavigation {
          @media screen and (min-width: 992px) {
            #prevArrow {
              left: -25px;
            }
            #nextArrow {
              right: -25px;
            }
          }
          .sliderNavigation {
            &__controls {
              &--arrow {
                color: var(--secondary);
                top: 20px;
              }
            }
          }
        }
      }
    }
  }
  &__body {
    margin-top: rem(50px);
    padding-bottom: rem(0px);
    // padding-top: rem(10px);
    background: #fff;
    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 1px;
      background: #a3a3a3;
      position: absolute;
      top: -35px;
    }
    /deep/ {
      .sliderNavigation {
        position: static;
        --arrow: var(--secondary);
        --pause: var(--secondary);
        &__controls {
          max-width: 100%;
          padding-left: 40px;
          padding-right: 20px;
          &--paluse {
            order: 1;
            flex-grow: 0;
          }
          button {
            &:disabled {
              color: #494949;
              opacity: 1;
            }
          }
          #prevArrow {
            order: 3;
            border: unset !important;
            &:focus {
              outline-offset: -5px;
            }
          }
          #nextArrow {
            order: 4;
            border: unset !important;
            &:focus {
              outline-offset: -5px;
            }
          }
          &--pagination {
            order: 2;
            flex-grow: 1.8;
            text-align: center;
            letter-spacing: 0;
            font-weight: 800;
            color: #494949;
            .swiper-pagination-current {
              color: var(--secondary);
            }
          }
        }
      }
    }
  }
}
</style>
