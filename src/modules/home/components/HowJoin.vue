<template>
  <div class="howJoin" :aria-label="ariaLabel">
    <div class="container">
      <h2 v-if="$i18n.locale == 'en'" class="sectionTitle">
        {{ sectionTitle }}
      </h2>
      <h2 v-if="$i18n.locale == 'ar'" class="sectionTitle">
        {{ arabicSectionTitle }}
      </h2>
      <b-tabs pills>
        <b-tab :title="this.data.tabsTitle[0]" active>
          <div class="applicant__requirment">
            <p>
              {{ this.data.innerParagraph }}
            </p>
            <div class="sliderNavigation__custom"></div>
            <carousel
              navigationTheme="simple"
              :carousel-settings="sliderOption"
              class="requirment"
              @init="setNavigaion"
            >
              <div
                class="swiper-slide"
                v-for="goal in this.data.ApplicantRequirnment"
                :key="goal.index"
              >
                <div class="nav-link requirment__slide--link">
                  <div class="iconTabs__item--image">
                    <span class="tab-icon">
                      <img
                        :src="`${require(`@/assets/images/icons/howJoin/${goal.image}`)}`"
                        alt=""
                        class="img-fluid"
                      />
                    </span>
                  </div>
                  <span class="requirment__slide--count">{{ goal.count }}</span>
                  <h3 class="requirment__slide--title">{{ goal.title }}</h3>
                </div>
              </div>
            </carousel>
          </div>
        </b-tab>
        <b-tab :title="this.data.tabsTitle[1]">
          <div class="applicant__requirment mustbe">
            <div class="sliderNavigation__custom"></div>
            <carousel
              navigationTheme="simple"
              :carousel-settings="sliderOption"
              class="requirment"
              @init="setNavigaion"
            >
              <div
                class="swiper-slide"
                v-for="goal in this.data.ApplicantMust"
                :key="goal.index"
              >
                <div class="nav-link requirment__slide--link">
                  <div class="iconTabs__item--image">
                    <span class="tab-icon">
                      <img
                        :src="`${require(`@/assets/images/icons/howJoin/${goal.image}`)}`"
                        alt=""
                        class="img-fluid"
                      />
                    </span>
                  </div>
                  <span class="requirment__slide--count">{{ goal.count }}</span>
                  <h3 class="requirment__slide--title">{{ goal.title }}</h3>
                </div>
              </div>
            </carousel>
          </div>
        </b-tab>
      </b-tabs>
      <div class="applyBtn text-center mt-40">
        <a
          download
          v-if="$i18n.locale == 'en'"
          href="/pdf/Mentee-Recruitment-WiT-Submission-Form.docx"
          class="btn btn-primary"
          >{{ $t("buttons.downloadBtn") }}</a
        >
        <a
          download
          v-if="$i18n.locale == 'ar'"
          href="/pdf/Submission Form WiT - Arabic.docx"
          class="btn btn-primary"
          >{{ $t("buttons.downloadBtn") }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowJoin",
  props: {
    sectionTitle: String,
    ariaLabel: String,
    arabicSectionTitle: String,
  },
  data() {
    return {
      sliderOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        slideToClickedSlide: true,
        rtl: this.$i18n.locale == "en" ? false : true,
        breakpoints: {
          992: {
            slidesPerView: 5,
          },
          651: {
            slidesPerView: 4,
          },
          451: {
            slidesPerView: 3,
          },
          351: {
            slidesPerView: 2,
          },
        },
      },
      data: {
        en: {
          tabsTitle: ["Applicant Requirements", "Applicants must be"],
          innerParagraph:
            "The program is open for women university students that are studying fields under STEM (Science, Technology, Engineering and Math). Majors include and not limited to:",
          ApplicantRequirnment: [
            {
              index: 0,
              image: "Icons-Zain Women In Tech_Computer_Science.png",
              count: "01",
              title: "Computer Science ",
            },
            {
              index: 1,
              image: "Icons-Zain Women In Tech_Information-Technology.png",
              count: "02",
              title: "Information Technology",
            },
            {
              index: 2,
              image: "Icons-Zain Women In Tech_Mechanical_Engineereing.png",
              count: "03",
              title: "Mechanical Engineering ",
            },
            {
              index: 3,
              image: "Icons-Zain Women In Tech_Data_Analystic.png",
              count: "04",
              title: "Data Analytics ",
            },
            {
              index: 4,
              image: "Icons-Zain Women In Tech_Graphic-Web_Design.png",
              count: "05",
              title: "Graphic/Web Design ",
            },
            {
              index: 5,
              image: "Icons-Zain Women In Tech_Cyber_Security.png",
              count: "06",
              title: "Cyber Security ",
            },
            {
              index: 6,
              image: "Icons-Zain Women In Tech_Chemical_Engenireeing.png",
              count: "07",
              title: "Chemical Engineering",
            },
            {
              index: 7,
              image: "Icons-Zain Women In Tech_Electrical_Engineering.png",
              count: "08",
              title: "Electrical Engineering ",
            },
            {
              index: 8,
              image: "Icons-Zain Women In Tech_Software_Engineering.png",
              count: "09",
              title: "Software Engineering  ",
            },
            {
              index: 9,
              image: "Icons-Zain Women In Tech_Statistics.png",
              count: "10",
              title: "Statistics ",
            },
          ],
          ApplicantMust: [
            {
              index: 10,
              image: "Icons-Zain Women In Tech_Achievment_Driven.png",
              count: "01",
              title: "Achievement Driven",
            },
            {
              index: 11,
              image: "Icons-Zain Women In Tech_Tewamwork&Collaboration.png",
              count: "02",
              title: "Teamwork and Collaboration ",
            },
            {
              index: 12,
              image: "Icons-Zain Women In Tech_Problem_Solving.png",
              count: "03",
              title: "Problem Solving ",
            },
            {
              index: 13,
              image: "Icons-Zain Women In Tech_Self_Management.png",
              count: "04",
              title: "Self-Management ",
            },
            {
              index: 14,
              image: "Icons-Zain Women In Tech_Innovation&Creativity.png",
              count: "05",
              title: "Innovation and Creativity  ",
            },
          ],
        },
        ar: {
          tabsTitle: [
            "الاشتراطات الواجب توافرها في مقدم الطلب",
            "يجب أن يتحلى مقدمي الطلبات بالمزايا التالية",
          ],
          innerParagraph:
            "البرنامج مفتوح لطالبات الجامعة اللائي يدرسن في المجالات المندرجة ضمن العلوم والتكنولوجيا والهندسة والرياضيات. وتشمل التخصصات على سبيل المثال لا الحصر: ",
          ApplicantRequirnment: [
            {
              index: 0,
              image: "Icons-Zain Women In Tech_Computer_Science.png",
              count: "01",
              title: "علوم الحاسوب",
            },
            {
              index: 1,
              image: "Icons-Zain Women In Tech_Information-Technology.png",
              count: "02",
              title: "تكنولوجيا المعلومات",
            },
            {
              index: 2,
              image: "Icons-Zain Women In Tech_Mechanical_Engineereing.png",
              count: "03",
              title: "الهندسة الميكانيكية",
            },
            {
              index: 3,
              image: "Icons-Zain Women In Tech_Data_Analystic.png",
              count: "04",
              title: "تحليل البيانات",
            },
            {
              index: 4,
              image: "Icons-Zain Women In Tech_Graphic-Web_Design.png",
              count: "05",
              title: "تصميم الجرافيك/المواقع الالكترونية",
            },
            {
              index: 5,
              image: "Icons-Zain Women In Tech_Cyber_Security.png",
              count: "06",
              title: "الأمن السيبراني",
            },
            {
              index: 6,
              image: "Icons-Zain Women In Tech_Chemical_Engenireeing.png",
              count: "07",
              title: "الهندسة الكيميائية",
            },
            {
              index: 7,
              image: "Icons-Zain Women In Tech_Electrical_Engineering.png",
              count: "08",
              title: "الهندسة الكهربائية",
            },
            {
              index: 8,
              image: "Icons-Zain Women In Tech_Software_Engineering.png",
              count: "09",
              title: "هندسة البرمجيات ",
            },
            {
              index: 9,
              image: "Icons-Zain Women In Tech_Statistics.png",
              count: "10",
              title: "الإحصاءات",
            },
          ],
          ApplicantMust: [
            {
              index: 10,
              image: "Icons-Zain Women In Tech_Achievment_Driven.png",
              count: "01",
              title: "الدوافع لتحقيق الإنجازات",
            },
            {
              index: 11,
              image: "Icons-Zain Women In Tech_Tewamwork&Collaboration.png",
              count: "02",
              title: "التوجه نحو العمل الجماعي والتعاون",
            },
            {
              index: 12,
              image: "Icons-Zain Women In Tech_Problem_Solving.png",
              count: "03",
              title: "القدرة على حل المشكلات",
            },
            {
              index: 13,
              image: "Icons-Zain Women In Tech_Self_Management.png",
              count: "04",
              title: "الإدارة الذاتية",
            },
            {
              index: 14,
              image: "Icons-Zain Women In Tech_Innovation&Creativity.png",
              count: "05",
              title: "الابتكار والإبداع",
            },
          ],
        },
      },
    };
  },
  methods: {
    setNavigaion(slider) {
      slider.$el.forEach((slide) => {
        var sliderId = slide.getAttribute("id");
        if (document.querySelector(`.howJoin  #${sliderId}`)) {
          var sliderNav = document.querySelector(
            `.howJoin #${sliderId} + .navigationSimple`
          );
          var appendElement = document
            .querySelector(`#${sliderId}`)
            .closest(".applicant__requirment")
            .querySelector(".sliderNavigation__custom");
          var node = document.createElement("div"); // Create a <li> node
          var textnode = (document.innerHTML = sliderNav); // Create a text node
          node.appendChild(textnode);
          appendElement.appendChild(node);
          console.log(sliderNav);
          console.log(appendElement);
        }

        // console.log(document.querySelector(`.howJoin .tab-pane.active #${sliderId}`));
      });
    },
  },
  created() {
    this.$i18n.locale == "en" ? (this.data = this.data.en) : (this.data = this.data.ar);
  },
};
</script>

<style lang="scss" scoped>
.howJoin {
  .applyBtn {
    a {
      padding: 20px 30px;
      @media screen and (max-width: 575px) {
        padding: 10px 10px;
        font-size: 1rem;
        white-space: break-spaces;
        line-height: 1.3;
      }
    }
  }
  background: #e5e5e5;
  padding: 30px 0px 55px;
  position: relative;
  /deep/ {
    .nav.nav-pills {
      flex-direction: row;
      justify-content: unset;
      align-items: unset;
      li {
        width: 50% !important;
      }
    }
  }
  .applicant__requirment {
    position: relative;
    // padding-top: rem(40px);
    margin-top: 0px;
    .requirment {
      // padding-top: 35px;
      @media screen and (max-width: 374px) {
        // padding-top: 20px;
      }
      // @media screen and (max-width: 1200px) {
      //   padding-top: 55px;
      // }
    }
    &.mustbe {
      /deep/ {
        .sliderNavigation {
          top: 0px !important;
          @media screen and (max-width: 991px) {
            display: block !important;
          }
        }
      }
    }
  }
  /deep/ {
    .sliderNavigation {
      top: 60px;
      z-index: 0;
      position: absolute;
      height: 0px;
      padding: env(safe-area-inset-top) env(safe-area-inset-right)
        env(safe-area-inset-bottom) env(safe-area-inset-left);
      @media screen and (min-width: 1600px) {
        top: 95px;
      }
      @media screen and (max-width: 1200px) {
        top: 75px;
      }
      @media screen and (max-width: 991px) {
        top: 90px;
      }
      @media screen and (max-width: 575px) {
        top: 100px;
      }
      &__controls {
        max-width: 110px;
        &--pagination {
          display: none;
        }
        &--pause {
          display: none;
        }
        button {
          color: var(--primary);
          outline-offset: -3px !important;
        }
      }
    }
  }
  .sliderNavigation__custom {
    /deep/ {
      .sliderNavigation {
        position: static !important;
        margin-bottom: 10px;
        height: auto !important;
      }
    }
  }
}
.requirment {
  &__slide {
    &--link {
      height: 160px;
      display: inline-flex;
      width: 100%;
      background: #fff;
      box-shadow: 0 0 6px 0px rgba($color: #000000, $alpha: 0.2);
      transition: 0.4s ease all;
      // padding: rem(30px);
      text-align: center;
      position: relative;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transform: scale(0.9);
      transform-origin: center;
      .tab-icon {
        height: 100px;
        width: 100px;
        @media screen and (max-width: 767px) {
          height: 90px;
          width: 90px;
        }
      }
      &:active,
      &:focus {
        outline-color: var(--primary);
        outline-offset: 1px !important;
      }
    }
    &--logo {
      width: 62px;
      height: 62px;
      display: inline-block;
      color: #000;
    }
    h3 {
      font-size: rem(16px);
      color: #000;
      @include truncate(3, 1.2);
      margin-bottom: 0;
      margin-top: 0;
    }
    &--count {
      position: absolute;
      color: #000;
      top: 15px;
      right: 15px;
      font-weight: 800;
      font-size: rem(22px);
    }
    &--title {
      font-size: rem(17px);
      color: #000;
      margin: unset;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 1.2;
      margin-top: rem(15px);
      min-height: 54px;
      display: flex;
      align-items: center;
    }
  }
}
[lang="ar"] {
  .howJoin {
    /deep/ {
      .sliderNavigation {
        right: 0;
        left: auto;
        &__controls {
          margin: 0 auto 0 0;
          &--arrow {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
  .requirment {
    &__slide {
      &--count {
        left: 15px;
        right: auto;
      }
    }
  }
}
</style>
