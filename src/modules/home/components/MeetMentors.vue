<template>
    <div class="meetmentors" :aria-label="ariaLabel" role="region">
        <div class="container">
             <meet-mentors-modal v-if="!(isEmpty(directorIn))" @closeDetailModal="closeModal" :is-show="showModal" :director="directorIn"></meet-mentors-modal>
            <div class="topHead">
                <h2  v-if="$i18n.locale=='en'" class="sectionTitle" id="newslatter">{{ sectionTitle }}</h2>
                <h2  v-if="$i18n.locale=='ar'" class="sectionTitle" id="newslatter">{{ arabicSectionTitle }}</h2>
                <router-link class="btn btn-primary" :to="`/${$i18n.locale}/meet-mentors`">{{$t("labels.viewAll")}}</router-link>
            </div>
        </div>
        <div class="meetmentorsWrapper">
            <ul class="slideAccordion">
                <li v-for="mentor in this.data.innerText.Mentores" :key="mentor.id" class="slideAccordion__items" :class="mentor.id===0 ? 'active' : ''" tabIndex="0">
                    <div class="slideAccordion__items--bgLayer"></div>
                    <div class="slideAccordion__items--image">
                        <img :src="require(`@/assets/images/mentors/${mentor.image}`)" alt="">
                    </div>
                    <div class="slideAccordion__items--content">
                        <h2 :id="'edition' + mentor.id">{{mentor.name}}</h2>
                        <h3>{{mentor.jobTitle}}</h3>
                        <p class="country">
                            <span class="icon">
                                <img :src="require(`@/assets/images/country/${mentor.flag}`)" alt="">
                            </span>
                            {{mentor.opco}}
                        </p>
                        <div class="detailInfo" v-html="mentor.detail"></div>
                        <a href="#" @click.prevent="openModal(mentor)" class="btn btn-yellow" :aria-describedby="'edition'+mentor.id" :role="'edition'+mentor.id">{{$t("buttons.explore")}}</a>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import MeetMentorsModal from "@/modules/MeetMentors/partials/MeetMentorsModal.vue"
export default {
     components:{
          MeetMentorsModal
     },
    props: {
        sectionTitle: String,
        ariaLabel: String,
        arabicSectionTitle: String
    },
    data(){
        return{
            showModal: false,
            directorIn:{},
            data:{
                en:{
                    innerText:{
                    Mentores:[
                            {
                                id: 0,
                                name:"Bouthina Ahmed Mahroos",
                                image:"Bouthina Mahroos Zain KSA.jpg",
                                opco:"ksa",
                                flag:"ksa.png",
                                detail:"<p> Bouthina Ahmed Mahroos has 13 years-experience in HR, and worked in different industries including FMCG, automotive, financial services and telecommunication. She strives to enjoy the journey and create a balance between work and personal life. What drives Bouthina is ‘work hard until you don’t have to introduce yourself’.</p>",
                                jobTitle:"Acting Payroll Senior Manager ",
                                email:"Bouthina.Mahroos@sa.zain.com"
                            },
                            {
                                id: 1,
                                name:"Dalia Mohammed Ramez Shakhshir",
                                image:"Dalia Shakhshir Zain Jordan.jpg",
                                opco:"jordan",
                                flag:"jordan.png",
                                detail:"<p> Dalia Shakhshir is a passionate and dedicated Product Development Team Leader in the Telecom domain with a proven track of quality deliverables, IT development, and Business Analysis experience of 16+ years. Dalia is a creative detail-oriented problem solver, with advanced analytical and reasoning skills who consistently delivers and fulfils strategic implementations. Honesty and kindness are the main values Dalia believes in and lives by. Spending quality time with her three children is what Dalia enjoys the most, as well as walking and making homemade sweets.</p>",
                                jobTitle:"Consumer Business",
                                email:"Dalia.Shakhsheir@jo.zain.com"
                            }, 
                            {
                                id: 2,
                                name:"Haider Aied Ali Alkarway",
                                image:"Haider-Aied-Ali-Alkarway-Zain-Iraq.png",
                                opco:"iraq",
                                flag:"iraq.png",
                                detail:"<p> Haider Aied is the Head of the Corporate Reporting Unit since 2017 with over 15 years’ experience at Zain Iraq. He is responsible for communicating with different departments to support the creation of reports and dashboards. Haider enjoys hunting and camping.</p>",
                                jobTitle:"Head of Corporate Reporting Unit",
                                email:"Haider.Aied@iq.zain.com"
                            },
                            {
                                id: 3,
                                name:"Omer Kamal",
                                image:"omer-kamal.jpg",
                                opco:"Sudan",
                                flag:"sudan.png",
                                detail:"<p> Omer is a Qualified Telecom Management Professional with over 17 years of experience in Marketing, Technology, Project Management, and Customer Experience Management. He has the Proficiency of implementing strategies that consistently enhancing business and operational targets as well as accomplishing customer satisfaction targets across professional career. Omer played an excellent role through different roles in Zain starting from Technology Operations then Technology Planning, and also when Managing Customer Experience Delivery team and Finally in Marketing roles as a Manager and a Director.</p><br/><p>Also Omer had Proven ability of development & implementation of departmental strategy & plans for accomplishing departmental & organizational business objectives; setting up improvement initiatives based on structured methods in assessment, for accomplishing Organizational targets and  Objectives.</p>",
                                jobTitle:"Marketing Segments - Director",
                                email:""
                            },
                            {
                                id: 4,
                                name:"Lama (Mohammad Said) Musallam Al Rahawanjy",
                                image:"Lama Rahwanji Zain Jordan.jpg",
                                opco:"jordan",
                                flag:"jordan.png",
                                detail:"<p> Mrs. Lama Al Rahawanjy is a creative, inspiring others and positive person who held a Regulatory Manager position at Zain Jordan, having graduated from Princess Sumaya University  with a Master degree in Information Systems, and B.Sc. with honors in Computer Science.Mrs. Lama was employed in the IT department of Zain Jordan between 1997 – 2003 and held different positions in different departments at Zain Jordan to gain variant experiences and enrich her knowledge and skills. From 2003 to present she worked in Regulatory Affairs Department, and while she moved to Canada for the period from 2013 to 2015 she took different courses in Business Administrations and Project Managements to held a Corporate IT Strategist Position at one of the well-established employment services company.</p><p>She has strong technical and personnel skills such as communication, critical thinking and problem solving, leadership and training, negotiation, organizational and time management skills. Her goal to be successful business woman and benefit the society; encouraged her to stay open-minded to any new opportunities. Outside of the office, Lama enjoys drawing and interior design.</p>",
                                jobTitle:"Legal & Regulatory Affairs",
                                email:"lama.AlRahwanji@Jo.Zain.com"
                            },
                            {
                                id: 5,
                                name:"Mubarak Ebrahim Nass",
                                image:"Mubarak Nass.jpg",
                                opco:"bahrain",
                                flag:"bahrain.png",
                                detail:"<p> Mubarak Ebrahim Nass is Infrastructure & Core Specialist at Zain Bahrain who is responsible for CS Core & Infrastructure deployments, IT help desk & ERP. Mubarak is blessed to be part of many success stories at Zain Bahrain like 4G launch, 5G launch, and most recent being the Apple iWatch enablement & launch. Mubarak is passionate about looking for new technologies and methods to enhance the customer & end-user experience. Mubarak likes to play video games, read & watch movies.</p>",
                                jobTitle:"",
                                email:""
                            }
                        ]
                    }
                },
                ar:{
                    innerText:{
                    Mentores:[
                            {
                                id: 0,
                                name:"بثينة محروس",
                                image:"Bouthina Mahroos Zain KSA.jpg",
                                opco:"المملكة العربية السعودية",
                                flag:"ksa.png",
                                detail:'<p>تتمتع بخبرة 13 عاما في قطاع الموارد البشرية، عملت في صناعات مختلفة بما في ذلك السلع الاستهلاكية والسيارات والخدمات المالية والاتصالات، وتسعى جاهدة للاستمتاع بالرحلة، وخلق توازن بين عملها وحياتها الشخصية، فهي ترفع شعار في الحياة "اعمل بجد بحيث لا تضطر يوما إلى تعريف نفسك".</p>',
                                jobTitle:"القائم بأعمال مدير الرواتب",
                                email:"Bouthina.Mahroos@sa.zain.com"
                            },
                            {
                                id: 1,
                                name:"داليا شاخشير",
                                image:"Dalia Shakhshir Zain Jordan.jpg",
                                opco:"الاردن",
                                flag:"jordan.png",
                                detail:"<p>يُعرف غنها الحماس والتفاني في قطاع الاتصالات مع مسيرة ممتدة من الجودة وتطوير تكنولوجيا المعلومات في تحليل الأعمال تزيد عن 16 عاما.</p><br/><p>تُبدع داليا في حل المشاكلات حيث تركز على التفاصيل مع مهاراتها التحليلية والاستدلالية المتقدمة، تتخذ داليا من الصدق وحسن الأخلاق قيمتان رئيسيتان، إذ  تؤمن بهما بشدة في حياتها، وأكثر ما تهواه هو قضاء وقت ممتع مع أطفالها الثلاثة بالإضافة إلى المشي وصنع الحلوى المنزلية.</p>",
                                jobTitle:"هي قائدة فريق تطوير المنتجات",
                                email:"Dalia.Shakhsheir@jo.zain.com"
                            },
                            {
                                id: 2,
                                name:"حيدر عايد",
                                image:"Haider-Aied-Ali-Alkarway-Zain-Iraq.png",
                                opco:"العراق",
                                flag:"iraq.png",
                                detail:"<p>منذ العام 2017 ، يتمتع بأكثر من 15 عاما من الخبرة في شركة زين العراق، كما أنه مسؤول عن التواصل مع الإدارات المختلفة لدعم إنشاء التقارير، يهوى حيدر الصيد والتخييم.</p>",
                                jobTitle:"هو رئيس وحدة التقارير المؤسسية ",
                                email:"Haider.Aied@iq.zain.com"
                            },
                            {
                                id: 3,
                                name:"عمير كمال علي مختار ",
                                image:"omer-kamal.jpg",
                                opco:"السودان",
                                flag:"sudan.png",
                                detail:"<p> Omer is a Qualified Telecom Management Professional with over 17 years of experience in Marketing, Technology, Project Management, and Customer Experience Management. He has the Proficiency of implementing strategies that consistently enhancing business and operational targets as well as accomplishing customer satisfaction targets across professional career. Omer played an excellent role through different roles in Zain starting from Technology Operations then Technology Planning, and also when Managing Customer Experience Delivery team and Finally in Marketing roles as a Manager and a Director.</p><br/><p>Also Omer had Proven ability of development & implementation of departmental strategy & plans for accomplishing departmental & organizational business objectives; setting up improvement initiatives based on structured methods in assessment, for accomplishing Organizational targets and  Objectives.</p>",
                                jobTitle:"مدير قطاعات التسويق، قطاعات التسويق",
                                email:""
                            },
                            // {
                            //     id: 3,
                            //     name:"إياد بورجي",
                            //     image:"Iyadh Borgi Zain Group.png",
                            //     opco:"مجموعة",
                            //     flag:"group.png",
                            //     detail: "<p> إياد بورجي هو مدير العمليات التجارية والأداء في مجموعة زين. حيث يقوم بمراجعة وتحليل أداء عمليات زين وتقييم الاستثمارات الرأسمالية الرئيسية وتنسيق ميزانية السنة بأكملها من خلال عمليات زين. وقبل انضمامه إلى زين، عمل إياد في العديد من الشركات في مختلف البلدان وهو الأمر الذي شكل معرفته وخبرته في هذه الصناعة. شعاره في الحياة هو إيمانك بنفسك ومتابعة أحلامك أينما كانت واغتنام كل فرصة. ويُعد إياد من أشد المعجبين بريال مدريد كما يحب الموسيقى والسفر.</p>",
                            //     jobTitle:"Business Operations & Performance Director",
                            //     email:"Iyadh.Borgi@zain.com"
                            // },
                            {
                                id: 4,
                                name:"لمى الرهونجي",
                                image:"Lama Rahwanji Zain Jordan.jpg",
                                opco:"الأردن",
                                flag:"jordan.png",
                                detail:"<p>لديها 24 عاما من الخبرات العملية في شركة زين الأردن، كما أنها تتمتع بمهارات فنية وشخصية قوية مثل التواصل، التفكير النقدي، حل المشكلات، القيادة، التدريب، التفاوض، المهارات التنظيمية، وإدارة الوقت، هدفها أن تكون سيدة أعمال ناجحة، وأن تقدم ما ينفع المجتمع، مما شجعها على البقاء منفتحة على أي فرص جديدة، وهي خارج بيئة العمل، تهوى الرسم والتصميم الداخلي.</p>",
                                jobTitle:"تحتل منصب المدير التنظيمي",
                                email:"lama.AlRahwanji@Jo.Zain.com"
                            },
                            {
                                id: 5,
                                name:"مبارك إبراهيم",
                                image:"Mubarak Nass.jpg",
                                opco:"البحرين",
                                flag:"bahrain.png",
                                detail:"<p>هو متخصص في البنية التحتية والأساسية في شركة زين البحرين، وهو مسؤول عن عمليات نشر علوم الحاسب والبنية التحتية الأساسية ومكتب مساعدة تكنولوجي وتخطيط موارد المؤسسات، ينعم مبارك بكونه جزءًا من العديد من قصص النجاح في زين البحرين مثل إطلاق شبكة الجيل الرابع وإطلاق شبكة الجيل الخامس، وآخرها تمكين وإطلاق Apple iWatch. إن مبارك شغوف بالبحث عن تقنيات وأساليب جديدة لتعزيز تجربة العميل والمستخدم النهائي. ويهوى لعب ألعاب الفيديو وقراءة ومشاهدة الأفلام.</p>",
                                jobTitle:"",
                                email:""
                            }
                        ]
                    }
                }
            }
        }
    },
    created(){
        this.$i18n.locale=="en" ? 
        this.data = this.data.en :
        this.data = this.data.ar;
    },
    mounted(){
        var items = document.querySelectorAll(".slideAccordion__items:not(.active)");
        var self = this;
        items.forEach(item=>{
            item.addEventListener("mouseenter", self.removeActive);
            item.addEventListener("focus", self.removeActive);
        });
    },
    methods: {
         closeModal() {
               this.showModal = false
               this.directorIn = {}
          },
          openModal(dInfo) {
               this.showModal = true
               this.directorIn = dInfo
          },
          isEmpty(obj) {
               for(var key in obj) {
                    if(obj.hasOwnProperty(key))
                         return false;
               }
               return true;
          },
        isActive(index) {
            return this.tabIndex == index
        },
        removeActive(){
            var itemsInner = document.querySelectorAll(".slideAccordion__items");
            itemsInner.forEach(i=>{
                i.classList.remove("active");
            });
        },
    },
}
</script>

<style lang="scss" scoped>

.meetmentors {
    padding-top: rem(20px);
    padding-bottom: rem(0px);
    .topHead{
        @include flex( start , space-between);
        padding-bottom: rem(40px);
        .sectionTitle{
            padding:0;
            color: var(--primary);
        }
    }

}
@mixin transition($transition...) {
    -moz-transition:    $transition;
    -ms-transition:      $transition;
    -webkit-transition: $transition;
    transition:         $transition;
}
.slideAccordion {
  --layer: #6e337a;
  list-style: none;
  margin: 0 auto;
  display: flex;
  height: 650px;
  @media screen and (max-width:1600px) and (min-width:768px) {
       height: 550px;
  }
  @media screen and (max-width:767px){
      height:800px;
  }
  $self: &;
  &__items{
    width: 20%; 
    opacity:1;
    position:relative;
    margin-bottom: 0;
    @include transition(all .5s ease-in-out);
    overflow: hidden;
    cursor: pointer;
    @media screen and (max-width:767px){
        width: 100%;
        height:20%;
        margin-bottom: 0;
    }
    &--bgLayer{
        position: absolute;
        width:100%;
        height: 100%;
        left: 0;
        top:0;
        background: var(--layer);
        opacity: .7;
        z-index: 1;
    }
    &--image{
        img{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
            // @media screen and (max-width:767px) {
            //     object-position: center top;
            // }
        }
        
    }
    $self: &;
    &--content{
      position: absolute;
      top:-100%;
      transform: translateY(-50%);
      font-size: rem(16px);
      color:#fff;
      padding:rem(20px) rem(60px);
      @include flex ( flex-start , center);
      flex-direction: column;
      z-index: 2;
      width:100%;
      transition: .5s ease all;
      opacity: 0;
    //   @media screen and (min-width:1600px){
    //       width:550px;
    //   }
      @media screen and (max-width:767px){
          top:-200%;
          width:95%;
      }
      h2{
          font-size:rem(34px);
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: rem(20px);
          @media screen and (max-width:991px){
            font-size:rem(28px);
          }
          @media screen and (max-width:575px){
            font-size:rem(24px);
          }

      }
       h3{
          font-size:rem(28px);
          font-weight: 900;
          text-transform: uppercase;
          margin-bottom: rem(16px);
          @media screen and (max-width:991px){
            font-size:rem(24px);
          }
          @media screen and (max-width:575px){
            font-size:rem(21px);
          }

      }
      .detailInfo{
           @include truncate(4,1.45);
           margin-bottom: 20px;
           @media screen and (max-width:575px){
               max-height:5em;
           }
      }
      p{
          font-size: rem(20px);
          font-weight: 600;
          margin-bottom: rem(25px);
          
            line-height: 1.6;

          /deep/{
              span{
                  display:block;
              }
          }
          @media screen and (max-width:991px){
            font-size:rem(18px);
          }
          @media screen and (max-width:575px){
            font-size:rem(17px);
          }
          &.country{
              text-transform: uppercase;
              font-size: rem(24px);
              font-weight:700;
              margin-bottom: rem(15px);
              @media screen and (max-width:767px){
                    font-size: rem(20px);
                }
              /deep/{
                  span{
                      margin-right:rem(14px);
                      display:inline-block;
                      img{
                            max-width:40px;
                            @media screen and (max-width:767px){
                                max-width:27px;
                            }
                        }
                  }
              }
          }
      }
      .btn{
            &:focus{
                outline: 3px dashed var(--yellow);
            }
            display: none;
      }
    }
    &:hover , &:focus , &:focus-within, &.active {
        width: 50%;
        opacity: 1;
        transition: .5s ease all;
        #{ $self }--content{
            opacity: 1;
            top:50%;
            .btn{
                display: block;
            }
        }
        @media screen and (max-width:1199px){
            width: 75%;
        }
        @media screen and (max-width:991px){
            width: 90%;
        }
        @media screen and (max-width:767px){
            width: 100%;
            height:100%;
        }
    } 
    &:hover ~ li:last-child , &:focus ~ li:last-child  , &:focus-within ~ li:last-child {
        width: 10%;
        opacity: 1;
        @media screen and (max-width:767px){
            width: 100%;
            height:20%;
        }
    }
  }
  @media screen and (max-width:1199px){
      &__items{
          &--content{
              padding:rem(20px) rem(30px) rem(20px) rem(45px);
          }
      }
}
//   @media screen and (max-width:850px){
//       &__items{
//           &--content{
//               padding-right:rem(120px);
//           }
//       }
//   }
  @media screen and (max-width:767px){
      flex-direction: column;
      &__items{
          &--content{
              padding: rem(20px);
          }
      }
  }
  @media screen and (max-width:575px){
      &__items{
          &--content{
              width:100%;
          }
      }
  }
}
[lang='ar']{
    .slideAccordion {
        $self: &;
        &__items{
            &--bgLayer{
                right: 0;
                left:auto;
            }
            &--image{
                img{
                    right: 0;
                    left:auto;
                }
                
            }
            $self: &;
            &--content{
                p{

                    &.country{
                        /deep/{
                            span{
                                margin-left:rem(14px);
                                margin-right:0;
                            }
                        }
                    }
                }
            }

        }
        @media screen and (max-width:1199px){
            &__items{
                &--content{
                    padding:rem(20px) rem(45px) rem(20px) rem(30px);
                }
            }
        }
        @media screen and (max-width:767px){
            &__items{
                &--content{
                    padding: rem(20px);
                }
            }
        }
    }
}
</style>
