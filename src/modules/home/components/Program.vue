<template>
  <div class="program" :aria-label="ariaLabel">
    <div class="container">
      <h2 v-if="$i18n.locale == 'en'" class="sectionTitle">
        {{ sectionTitle }}
      </h2>
      <h2 v-if="$i18n.locale == 'ar'" class="sectionTitle">
        {{ arabicSectionTitle }}
      </h2>
      <p v-for="(text, index) in this.data.innerText.detail" :key="index">
        {{ text }}
      </p>
      <div class="program__head iconTabs customTabs__items">
        <carousel
          navigation-layout="side"
          :carousel-settings="sliderOption"
          navigation-theme="simple"
          @init="setSlider"
          role="tablist"
        >
          <div
            v-for="tabList in this.data.innerText.tabsList"
            :key="tabList.index"
            class="swiper-slide program__item iconTabs__item"
          >
            <a
              @click.prevent.stop
              data-target="highlights"
              class="nav-link"
              :class="{ active: isActive(tabList.index) }"
              v-on:click.stop.prevent="tabIndex = tabList.index"
              data-toggle="tab"
              href="#"
              role="tab"
              :aria-controls="'tab_zainiac' + tabList.index"
              :aria-selected="tabList.index === 0 ? 'false' : 'true'"
              :id="'zainiac' + tabList.index"
            >
              <div class="iconTabs__item--image">
                <span class="tab-icon">
                  <img
                    :src="
                      require(`@/assets/images/icons/white/${tabList.images.white}`)
                    "
                    alt=""
                    class="img-fluid"
                  />
                  <img
                    :src="
                      require(`@/assets/images/icons/yellow/${tabList.images.active}`)
                    "
                    alt=""
                    class="img-fluid selected"
                  />
                </span>
              </div>
              <h3>{{ tabList.title }}</h3>
            </a>
          </div>
        </carousel>
      </div>
      <div class="program__body">
        <b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
          <b-tab>
            <div class="howtoLearn__content">
              <div
                class="mb-40 text-center"
              >
                <span class="sectionSubTitle">{{
                  this.data.innerText.tabsList[0].contents.subtitle
                }}</span>
              </div>
              <h3 class="tabHeading">
                {{ this.data.innerText.tabsList[0].contents.headingListOne }}
              </h3>
              <ul>
                <li
                  v-for="(listOne, index) in this.data.innerText.tabsList[0]
                    .contents.listOne"
                  :key="index"
                >
                  <p>{{ listOne }}</p>
                </li>
              </ul>
              <h3 class="tabHeading">
                {{ this.data.innerText.tabsList[0].contents.headingListtwo }}
              </h3>
              <ul>
                <li
                  v-for="(listTwo, index) in this.data.innerText.tabsList[0]
                    .contents.listTwo"
                  :key="index"
                >
                  <p>{{ listTwo }}</p>
                </li>
              </ul>
              <p v-html="this.data.innerText.tabsList[0].contents.lastText"></p>
            </div>
          </b-tab>
          <b-tab>
            <div class="Experience__content">
              <ul>
                <li
                  v-for="(text, i) in this.data.innerText.tabsList[1].contents
                    .dataList"
                  :key="i"
                >
                  <p>{{ text }}</p>
                </li>
              </ul>
            </div>
          </b-tab>
          <b-tab>
            <div class="benefits__content">
              <div class="row">
                <div class="col-md-6">
                  <div class="image">
                    <img
                      src="@/assets/images/home/TabImage.png"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <h3 class="tabHeading">
                    {{ this.data.innerText.tabsList[2].contents.heading }}
                  </h3>
                  <ul>
                    <li
                      v-for="(text, index) in this.data.innerText.tabsList[2]
                        .contents.dataList"
                      :key="index"
                    >
                      <p>{{ text }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab>
            <div class="responsibility__content">
              <carousel
                navigationLayout="side"
                navigation-theme="simple"
                :carousel-settings="sliderOptionTwo"
                role="tablist"
              >
                <div
                  class="swiper-slide"
                  role="presentation"
                  v-for="item in this.data.innerText.tabsList[3].contents
                    .slideIcons"
                  :key="item.id"
                >
                  <div class="responsibility__content--item">
                    <img
                      :src="
                        require(`@/assets/images/icons/about-icons/yellow/${item.image}`)
                      "
                      class="img-fluid"
                      alt=""
                    />
                    <p class="title">{{ item.title }}</p>
                  </div>
                </div>
              </carousel>
            </div>
          </b-tab>
          <b-tab>
            <zain-world></zain-world>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import ZainWorld from "./partials/ZainWorld.vue";
export default {
  components: { ZainWorld },
  props: {
    ariaLabel: String,
    sectionTitle: String,
    arabicSectionTitle: String,
  },
  data() {
    return {
      tabIndex: 0,
      sliderOptionTwo: {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        rtl: this.$i18n.locale == "en" ? false : true,
        breakpoints: {
          1301: {
            slidesPerView: 8,
          },
          1201: {
            slidesPerView: 7,
          },
          1025: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          450: {
            slidesPerView: 2,
          },
        },
      },
      sliderOption: {
        slidesPerView: 2,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        rtl: this.$i18n.locale == "en" ? false : true,
        breakpoints: {
          576: {
            slidesPerView: 5,
          },
          415: {
            slidesPerView: 3,
          },
        },
      },

      //  innertext object
      data: {
        en: {
          innerText: {
            detail: [
              " Women in Tech is a mentorship program for women university students seeking guidance on navigating the transition from university to joining the workforce and exploring career options. The mentorship program is based on a human-centered design which is focused on creating a program for women by women.",
              "The design of the program was based on attaining as much feedback from the university students to deeply understand their challenges and needs and how we at Zain can play a proactive role in addressing them. ",
              " So far, we have conducted 12 focus groups with 3-4 participants in each group and received 860 survey responses across all markets. ",
            ],
            tabsList: [
              {
                index: 0,
                title: "Timeline and sessions",
                images: {
                  white: "icon6.png",
                  active: "icon6-active.png",
                },
                contents: {
                  subtitle: "Application closing date: September 2",
                  listOne: [
                    "Introductory Session/ Meet and Greet: September 13",
                    "Session 1: Week of September 19",
                    "Session 2: Week of October 17",
                    "Session 3: Week of October 31",
                    "Focus Group Session- We want to hear from you!",
                    "Session 4: Week of November 14",
                    "Session 5: Week of November 21",
                    "Session 6: Week of November 28",
                    "Focus Group Session – We want to hear from you",
                    "Closing Ceremony",
                  ],
                  
                },
              },
              {
                index: 1,
                title: "Experience",
                images: {
                  white: "icon5.png",
                  active: "icon5-active.png",
                },
                contents: {
                  dataList: [
                    "STEM Background",
                    "Level of experience manager and above",
                    "Varied Leadership experience",
                    "Possess the following skills: listening, advocacy, teaching and sharing",
                    "Have a passion to inspire and guide future tech-leaders",
                  ],
                },
              },
              {
                index: 2,
                title: "Benefits of Participation",
                images: {
                  white: "icon2.png",
                  active: "icon2-active.png",
                },
                contents: {
                  heading: "what to expect?",
                  dataList: [
                    "Challenge, motivate and inspire women who have chosen to be part of the STEM industry",
                    "Gain firsthand exposure with experts in the STEM industry",
                    "Create a network of future tech leaders in the region",
                    "Provide women tools on how to combat gender biases",
                    "Explore career opportunities and gain guidance by sharing experiences",
                  ],
                },
              },
              {
                index: 3,
                title: "Responsibility of the Mentees",
                images: {
                  white: "icon3.png",
                  active: "icon3-active.png",
                },
                contents: {
                  slideIcons: [
                    {
                      id: 0,
                      title: "Schedule Meetings",
                      image: "Calendar.png",
                    },
                    {
                      id: 1,
                      title: "Goal Setting (SMART)",
                      image: "setting.png",
                    },
                    {
                      id: 2,
                      title: "Prepare for Meetings",
                      image: "round-table.png",
                    },
                    {
                      id: 3,
                      title: "Be Open, Honest & Respectful",
                      image: "be-open.png",
                    },
                    {
                      id: 4,
                      title: "Safe Space",
                      image: "safe.png",
                    },
                    {
                      id: 5,
                      title:
                        "Confidentiality – but if any concerns rise please inform WiT team",
                      image: "secret-file.png",
                    },
                    {
                      id: 6,
                      title: "Attend all Focus Groups",
                      image: "attend.png",
                    },
                    {
                      id: 7,
                      title: "Complete 3 Surveys",
                      image: "call-center.png",
                    },
                  ],
                },
              },
              {
                index: 4,
                title: "WiT community",
                images: {
                  white: "icon4.png",
                  active: "icon4-active.png",
                },
              },
            ],
          },
        },
        ar: {
          innerText: {
            detail: [
              'البرنامج "المرأة في التكنولوجيا" (WIT) هو برنامج تدريبي للطالبات الجامعيات اللائي يلتمسن الإرشاد والتوجيه خلال رحلتهم من الانتقال من الجامعة إلى الالتحاق بسوق العمل واستكشاف الخيارات المهنية. ',
              "يعتمد البرنامج على الحصول على آراء الطالبات الجامعيات بغية تحقيق الفهم العميق لما يواجهن من تحديات وما يعوزهن من احتياجات وكيف يمكن لشركة زين أن تلعب دورًا استباقيًا في معالجتها. ",
              "حتى الآن، نظمت زين 12 مجموعة مناقشة يتألف كل منها من 3 إلى 4 مشاركين، وحصلت على 860 ردًا على الدراسات الاستقصائية عبر مختلف الأسواق التشغيلية التي تعمل بها. ",
            ],
            tabsList: [
              {
                index: 0,
                title: "الإطار الزمني والجلسات",
                images: {
                  white: "icon6.png",
                  active: "icon6-active.png",
                },
                contents: {
                  subtitle: "الموعد النهائي لتلقي (لتقديم) الطلبات: 2 سبتمبر",
                  listOne: [
                    "الجلسة الافتتاحية/ التعارف: 13 سبتمبر",
                    "الجلسة الاولى: الاسبوع الممتد من 19 سبتمبر",
                    "الجلسة الثانية: الاسبوع الممتد من 17 أكتوبر",
                    "الجلسة الثالثة: الاسبوع الممتد من 31 أكتوبر",
                    "جلسة مجموعات المناقشة- نود أن نسمع منكم!",
                     "الجلسة الرابعة: الاسبوع الممتد من 14 نوفمبر",
                    "الجلسة الخامسة: الاسبوع الممتد من 21 نوفمبر",
                    "الجلسة السادسة: الاسبوع الممتد من 28 نوفمبر",
                    "جلسة مجموعات المناقشة- نود أن نسمع منكم",
                    "الحفل الختامي"
                  ],
                },
              },
              {
                index: 1,
                title: "خبرة",
                images: {
                  white: "icon5.png",
                  active: "icon5-active.png",
                },
                contents: {
                  dataList: [
                    "لديهم خلفية بالعلوم والتكنولوجيا والهندسة والرياضيات (STEM)",
                    // "يملكون أكثر من 10 أعوام من الخبرة",
                    "مستوى خبرة مدير وما فوق",
                    "لديهم خبرات وتجارب قيادية متنوعة",
                    "يملكون المهارات التالية: الاستماع وتقديم الدعم والتدريس والمشاركة.",
                    "شغوفين بإلهام وتوجيه قادة المستقبل في مجال التكنولوجيا.",
                  ],
                },
              },
              {
                index: 2,
                title: "المزايا التي تحصل عليها المشاركات",
                images: {
                  white: "icon2.png",
                  active: "icon2-active.png",
                },
                contents: {
                  heading: "ما هو المتوقع تحقيقه؟",
                  dataList: [
                    "تشجيع وتحفيز وإلهام المرأة اللائي وقع عليهم الاختيار ليكن جزءً من مجال العلوم والتكنولوجيا والهندسة والرياضيات (STEM).",
                    "الحصول على فرصة الاحتكاك المباشر بالخبراء في مجال العلوم والتكنولوجيا والهندسة والرياضيات (STEM).",
                    "إنشاء شبكة من قادة المستقبل في مجال التكنولوجيا في المنطقة.",
                    "توفير أدوات ووسائل فيما يتعلق بكيفية مجابهة التحيزات القائمة على نوع الجنس.",
                    "استكشاف الفرص المهنية والحصول على التوجيه من خلال مشاركة الخبرات.",
                  ],
                },
              },
              {
                index: 3,
                title: "مسؤوليات المتدربات",
                images: {
                  white: "icon3.png",
                  active: "icon3-active.png",
                },
                contents: {
                  slideIcons: [
                    {
                      id: 0,
                      title: "جدولة الاجتماعات",
                      image: "Calendar.png",
                    },
                    {
                      id: 1,
                      title:
                        'تحديد الأهداف (بحيث تكون محددة وذاتية ويمكن تحقيقها وذات صلة بالأهداف العامة وضمن إطار زمني "ذكية/SMART")',
                      image: "setting.png",
                    },
                    {
                      id: 2,
                      title: "الإعداد للاجتماعات",
                      image: "round-table.png",
                    },
                    {
                      id: 3,
                      title: "الطلاقة والتحلي بالأمانة والاحترام",
                      image: "be-open.png",
                    },
                    {
                      id: 4,
                      title: "المحافظة على المسافات الآمنة",
                      image: "safe.png",
                    },
                    {
                      id: 5,
                      title:
                        "الالتزام بالسرية- ولكن إذا نشأت أي مخاوف، يُرجى إعلام فريق برنامج المرأة في التكنولوجيا",
                      image: "secret-file.png",
                    },
                    {
                      id: 6,
                      title: "حضور جميع جلسات مجموعات المناقشة.",
                      image: "attend.png",
                    },
                    {
                      id: 7,
                      title: "اكمال ثلاث دراسات استقصائية",
                      image: "call-center.png",
                    },
                  ],
                },
              },
              {
                index: 4,
                title: "مجتمع المرأة في التكنولوجيا (WIT)",
                images: {
                  white: "icon4.png",
                  active: "icon4-active.png",
                },
              },
            ],
          },
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
.program {
  background: url(../../../assets/images/banners/zainintrol-slider-image.png);
  background-size: cover;
  background-repeat: no-repeat;
  padding: rem(40px) 0px;
  margin-bottom: rem(20px);
  /deep/ {
    p {
      font-size: rem(20px);
      color: #fff;
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: rem(10px);
  }
  /deep/ {
    //     .detail{
    //          --h:115px;
    //          @media screen and (max-width:1600px) {
    //              --h: 100px;
    //         }
    //     }
    main ul li::marker{
      font-size:rem(20px);
    }
    .scrollArea__contents {
      padding-right: 35px;
    }
  }

  .headings {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 414px) {
      align-items: start;
      flex-direction: column;
      h2 {
        padding-bottom: rem(16px);
      }
    }
  }
  .sectionTitle {
    color: #fff;
  }
  .sectionSubTitle {
    font-size: rem(20px);
    color: #eada2f;
    text-decoration: underline;
    @media screen and (max-width: 414px) {
      font-size: rem(18px);
      padding-bottom: rem(20px);
    }
  }
  &__head {
    position: relative;
    margin-top: rem(10px);
    @media screen and (max-width: 575px) {
      margin-left: 20px;
      margin-right: 20px;
    }
    .nav-link {
      margin-bottom: rem(15px);
      position: relative;
      .tab-icon {
        background: unset;
        width: 80px;
        height: 80px;
        @media screen and (max-width: 767px) {
          width: 65px;
          height: 65px;
        }
      }
      h3 {
        color: #fff;
        font-weight: bold;
        opacity: 1;
      }
      &.active {
        h3 {
          color: #67bbe9;
        }
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 3px;
          background: #eada2f;
          bottom: rem(-15px);
          left: 0;
        }
      }
    }
    /deep/ {
      .sliderNavigation {
        @media screen and (min-width: 576px) {
          display: none;
        }
        height: auto;
        z-index: 0;
        & .sliderNavigation__controls--arrow {
          transform: unset;
        }
        &.navigationSimple {
          #prevArrow {
            left: -25px;
          }
          #nextArrow {
            right: -25px;
          }
        }
      }
    }
  }
  &__body {
    margin-top: rem(50px);

    .tabHeading {
      font-size: rem(28px);
      color: #eada2f;
      margin-bottom: rem(22px);
      font-weight: 800;
      @media screen and (max-width: 767px) {
        font-size: rem(24px);
      }
      @media screen and (max-width: 575px) {
        font-size: rem(21px);
      }
    }
    .howtoLearn__content {
      ul {
        margin-bottom: rem(22px);
      }
    }
    .responsibility__content {
      position: relative;
      /deep/ {
        .sliderNavigation {
          height: 100%;
          z-index: 0;
          display: block !important;
          @media screen and (min-width: 1301px) {
            display: none !important;
          }
        }
      }
      &--item {
        text-align: center;
        padding: 0px 5px;
        p {
          margin-top: rem(15px);
          margin-bottom: 0px;
        }
      }
      @media screen and (max-width: 1300px) {
        margin: 0 45px;
      }
      @media screen and (max-width: 767px) {
        img {
          max-width: 45px;
        }
      }
    }
    ul {
      li {
        position: relative;
        font-size: rem(18px);
        color: #fff;
        &::marker{
          font-size:rem(23px);
        }
        &:last-child {
          margin: 0px;
        }
      }
    }
    .benefits {
      &__content {
        .image {
          @media screen and (max-width: 767px) {
            width: 70%;
            margin: auto auto rem(30px) auto;

          }
           @media screen and (max-width: 450px) {
            width: 85%;

          }
        }
      }
    }
  }
}
[lang="ar"] {
  .program {
    /deep/ {
      .scrollArea__contents {
        padding-left: 35px;
        padding-right: 0;
      }
    }
    &__head {
      .nav-link {
        &.active {
          &::before {
            right: 0;
            left: auto;
          }
        }
      }
      /deep/ {
        .sliderNavigation {
          &.navigationSimple {
            #prevArrow {
              right: -25px;
              left: auto;
            }
            #nextArrow {
              left: -25px;
              right: auto;
            }
          }
        }
      }
    }
  }
}
</style>
