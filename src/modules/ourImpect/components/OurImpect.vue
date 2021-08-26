<template>
    <div class="ourImpect" :aria-label="ariaLabel">
        <div class="container">
          <h2 class="sectionTitle">{{sectionTitle}}</h2>
          <b-tabs pills content-class="mt-20">
               <b-tab :title="this.data.innerText.tabsData.tabOne" active>
                    <ul>
                         <li v-for="(text, i) in this.data.innerText.tabsData.listdetail" :key="i"><p>{{text}}</p> </li>
                    </ul>
               </b-tab>
               <b-tab :title="this.data.innerText.tabsData.tabTwo">
                    <ul>
                         <li v-for="(text, i) in this.data.innerText.tabsData.listTowdetail" :key="i"><p>{{text}}</p></li>
                    </ul>
               </b-tab>
          </b-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
          sectionTitle:String,
          ariaLabel:String,
        },
        data(){
             return{
                  data:{
                       en:{
                              innerText:{
                                   tabsData:{
                                        tabOne:"Mentees",
                                        listdetail:[
                                             "Skill, attitude, knowledge & behavior development",
                                             "Internships, certifications & networking opportunities attained",
                                             "Increase in motivation to pursue STEM career",
                                             "Improvement in academic performance"
                                        ],
                                        tabTwo:"Mentors",
                                        listTowdetail:[
                                             "Track career advancement for mentors",
                                             "Mentee and mentor satisfaction with mentorship relationship"
                                        ]
                                   }
                              }
                         },
                         ar:{
                              innerText:{
                                   tabsData:{
                                        tabOne:"المتدربات",
                                        listdetail:[
                                             "تطوير المهارات والسلوك والمعرفة. ",
                                             "تلقي التدريب الداخلي ونيل الشهادات وإتاحة فرص التواصل. ",
                                             "زيادة التحفيز للسعي من أجل مزاولة المهن في مجال العلوم والتكنولوجيا والهندسة والرياضيات (STEM)",
                                             "تحسين الأداء الأكاديمي"
                                        ],
                                        tabTwo:"المدربين",
                                        listTowdetail:[
                                             "تتبع التطور الوظيفي للمدربين.",
                                             "رضا المتدربات والمدربين عن العلاقة التدريبية وقناعتهم بها. "
                                        ]
                                   }
                              }
                         }
                    }
                  
               }
          },
          created(){
               this.$i18n.locale=="en" ? 
               this.data = this.data.en :
               this.data = this.data.ar;
          }
     }
</script>

<style lang="scss" scoped>
.ourImpect{
      .sectionTitle {
          font-size: rem(35px);
            font-weight: 900;
            color: var(--secondary);
            text-transform: uppercase;
            margin-bottom: rem(25px);
            @media screen and (max-width: 991px) {
                font-size: rem(25px);
            }
            @media screen and (max-width: 575px) {
                font-size: rem(22px);
            }
     }
     /deep/{
          .nav.nav-pills {
                    flex-direction: row;
                    justify-content: unset;
                    align-items: unset;
               li {
                    width: 50% !important;
               }
          }
     }
}

</style>