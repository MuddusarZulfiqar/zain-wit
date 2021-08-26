<template>
  <div>
    <BaseIcons />
    <FixedHeader :threshold="150">
      <header role="banner">
        <a class="skip-main" href="#main">Skip to main content</a>
        <a class="skip-main" href="#footer">Skip to Footer</a>
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-8 col-sm-6 left-side">
              <ul class="list-inline align-items-center" role="presentation">
                <li>
                  <a
                    href="#"
                    role="button"
                    aria-label="Main Navigation"
                    class="menu"
                    @click.stop.prevent="openMenu"
                  >
                    <svg-icon
                      icon-id="menuIcon"
                      icon-viewbox="0 0 512 459.49"
                    ></svg-icon>
                  </a>
                </li>
                <li>
                  <router-link  :to="`/${$i18n.locale}`" title="Zain">
                    <img
                      src="@/assets/images/svg/logo.svg"
                      class="logo img-fluid"
                      alt="zain logo"
                    />
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-4 col-sm-6 right-side">
              <ul class="list-inline" role="presentation">
                <!-- <li class="inline">
                                    <router-link
                                        :to="`/${$i18n.locale}/search`"
                                        class="search"
                                        aria-label="search"
                                        role="button"
                                    >
                                        <svg-icon
                                            icon-id="search-icon"
                                            icon-viewbox="0 0 512 512"
                                        ></svg-icon>
                                    </router-link>

                                </li> -->
                <li class="langSelector">
                  <a @click="changeLocale(otherLocale)" lang="ar">
                    <span>{{ otherLangText }}</span>
                    <div class="langIcon">
                      <img
                        v-if="$i18n.locale == 'ar'"
                        src="@/assets/images/icons/english-icon.png"
                        alt=""
                      />
                      <img
                        v-if="$i18n.locale == 'en'"
                        src="@/assets/images/icons/arabic-icon.png"
                        alt=""
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </FixedHeader>
    <TheMenu @close="closeMenu" />
  </div>
</template>
<script>
import BaseIcons from "@/common/components/base/BaseSvgIcons.vue";
import Menu from "@/common/layout/mixin/Menu";
import TheMenu from "@/common/layout/TheMenu.vue";
import FixedHeader from "vue-fixed-header";
export default {
  mixins: [Menu],
  components: {
    BaseIcons,
    TheMenu,
    FixedHeader,
  },
  // data(){
  //     return{
  //         isMenuOpen: false,
  //         isOpenSearch: false
  //     }
  // },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
      this.$router.go();
    },
  },
  computed: {
    otherLangText() {
      return this.$i18n.locale === "ar" ? "English" : "العربية";
    },
    otherLocale() {
      return this.$i18n.locale === "en" ? "ar" : "en";
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  --highlight: #eada2f;
  padding: rem(50px) 0px;
  position: fixed;
  width: 100%;
  z-index: 999;
  transition: all 0.6s;
  top: 0;
  left: 0;
  @media screen and (max-width: 767px) {
    padding: rem(15px) 0px;
    background-color: rgba(0, 0, 0, 1);
  }
  @media screen and (max-width: 767px) and (min-width: 372px) {
    .row {
      align-items: center;
    }
  }
  &:after {
    border: solid 2px var(--secondary);
    bottom: -2px;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    width: 0%;
    content: "";
    transform: scale(0, 0);
    transition: all 0.6s linear;
  }
  .container {
    position: relative;
  }
  .left-side {
    ul {
      // @media screen and (max-width: 371px) {
      //   justify-content: center;
      //   margin-bottom: 0px;
      // }
      li {
        &:not(:last-child) {
          margin-right: rem(50px);
          // @media screen and (max-width: 991px) {
          //   margin-right: rem(15px);
          // }
          @media screen and (max-width: 500px) {
            margin-right: rem(30px);
          }
          @media screen and (max-width: 375px) {
            margin-right: rem(20px);
          }
          // @media screen and (max-width: 370px) {
          //   position: absolute;
          //   left: 15px;
          //   top: 8px;
          // }
        }
        a {
          &:focus {
            // border: 2px solid var(--highlight);
          }
        }
      }
      li:last-child{
          a{
            padding-left: 10px;
            padding-right: 10px;
          }
        }
    }
  }
  .right-side {
    position: static;
    ul.list-inline {
      justify-content: flex-end;
      align-items: center;
      @media screen and (max-width: 767px) {
        justify-content: flex-end;
      }
      > li {
        &:not(:last-child) {
          margin-right: rem(20px);
          padding-right: rem(20px);
          position: relative;
          &:after {
            height: 14px;
            width: 1px;
            position: absolute;
            right: 0px;
            top: 50%;
            transform: translateY(-50%);
            content: "";
            background-color: #ffffff;
          }
        }
        &.inline {
          display: flex;
          align-items: center;
        }
        &.langSelector {
          .langIcon {
            img {
              max-width: 35px;
            }
            @media screen and (min-width: 992px) {
              display: none;
            }
          }
          @media screen and (max-width: 991px) {
            a {
              span {
                display: none;
              }
            }
          }
        }
        a {
          color: #ffffff;
          font-size: rem(24.42px);
          text-transform: capitalize;
          cursor: pointer;
          &:hover {
            opacity: 0.75;
          }
          &:focus {
            // border: 2px solid var(--highlight);
          }
          /deep/ &.login-icon {
            svg {
              width: 25px;
              height: 25px;
              color: #ffffff;
            }
          }
        }
        .btn-primary {
          font-size: rem(18px);
          text-transform: uppercase;
          font-weight: 600;
          padding: rem(15px) rem(42px);
        }
      }
    }
  }
  .logo {
    width: 160px;
    height: auto;
    transform: scale(1.3);
    position: relative;
    top: 4px;
    @media screen and (max-width: 767px) {
      width: 150px;
    }
    @media screen and (max-width: 575px) {
      width: 110px;
    }
    &:focus{
      outline-offset: 4px;
    }
  }
  .search {
    /deep/ svg {
      width: 27px;
      height: 27px;
    }
  }
  .menu {
    color: #fff;
    display: inline-block;
    transition: .3s ease all;
    /deep/ svg {
      width: rem(40px);
      height: auto;
      @media screen and (max-width: 767px) {
        width: rem(30px);
        height: auto;
      }
    }
    @media screen and (min-width:1025px){
      &:hover{
        opacity:.7;
      }
    }
  }
  .router-link-active {
    display: block;
  }

  a.skip-main {
    left: -999px;
    position: absolute;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -999;
    &:active,
    &:focus {
      color: #fff;
      background-color: var(--primary);
      left: 2px;
      right: auto;
      top: auto;
      width: auto;
      height: auto;
      overflow: hidden;
      margin: 10px 0;
      padding: 10px 25px;
      border-radius: 5px;
      text-align: center;
      font-size: 1.2em;
      z-index: 999;
      outline: 0 !important;
    }
  }
  &.vue-fixed-header--isFixed {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    padding: rem(11px) 0px;
    -webkit-animation-name: animationFade;
    -o-animation-name: animationFade;
    animation-name: animationFade;
    -webkit-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  @media screen and (max-width: 575px) {
    .right-side {
      ul.list-inline {
        > li {
          &.langSelector {
            .langIcon {
              img {
                max-width: 30px;
              }
            }
          }
          &:not(:last-child) {
            margin-right: rem(15px);
            padding-right: rem(15px);
          }
        }
      }
    }
    .search {
      /deep/ {
        svg {
          width: 22px;
          height: 22px;
        }
      }
    }
  }
  @media screen and (max-width: 370px) {
    // .row {
    //   flex-direction: column;
    //   & > div {
    //     flex: 0 0 100%;
    //     max-width: 100%;
    //   }
    // }
    // .right-side ul.list-inline {
    //   justify-content: center;
    //   margin-top: rem(15px);
    // }
    .search {
      /deep/ svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}
[lang="ar"] {
  header {
    .left-side {
      ul {
        li {
          &:not(:last-child) {
            margin-left: rem(35px);
            margin-right: 0;
            @media screen and (max-width: 991px) {
              margin-left: rem(15px);
              margin-right: 0;
            }
            // @media screen and (max-width: 371px) {
            //   right: 15px;
            //   left: auto;
            // }
          }
        }
      }
    }
    .right-side {
      ul.list-inline {
        > li {
          &:not(:last-child) {
            margin-left: rem(20px);
            padding-left: rem(20px);
            margin-right: 0;
            padding-right: 0;
            &:after {
              left: 0px;
              right: auto;
            }
          }
        }
      }
    }
    a.skip-main {
      right: -999px;
      left:auto &:active,
      &:focus {
        color: #fff;
        background-color: var(--primary);
        right: 2px;
        left: auto;
      }
    }
    @media screen and (max-width: 575px) {
      .right-side {
        ul.list-inline {
          > li {
            &.langSelector {
              .langIcon {
                img {
                  max-width: 30px;
                }
              }
            }
            &:not(:last-child) {
              margin-left: rem(15px);
              padding-left: rem(15px);
              margin-right: 0;
              padding-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
