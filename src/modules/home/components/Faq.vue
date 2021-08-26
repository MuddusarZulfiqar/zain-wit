<template>
    <div class="faq" role="region" :aria-label="ariaLabel">
        <div class="container">
        <h2  v-if="$i18n.locale=='en'">{{sectionTitle}}</h2>
        <h2  v-if="$i18n.locale=='ar'">{{arabicSectionTitle}}</h2>
          <div class="accordion" role="tablist">
            <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="info">{{this.data.Faqs[0].title}}</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <b-card-text>
                            <ul v-for="(item, index) in this.data.Faqs[0].detail" :key="index + 551651">
                                <li>
                                    {{item}}
                                </li>
                            </ul>
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="info">{{this.data.Faqs[1].title}}</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                     <b-card-body>
                        <b-card-text>
                            <p v-for="(item, index) in this.data.Faqs[1].detail" :key="index + 551651">
                                {{item}}
                            </p>
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <b-card no-body>
                <b-card-header header-tag="header" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="info">{{this.data.Faqs[2].title}}</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                     <b-card-body>
                        <b-card-text>
                            <p v-for="(item, index) in this.data.Faqs[2].detail" :key="index + 551651">
                                {{item}}
                            </p>
                        </b-card-text>
                    </b-card-body>
                </b-collapse>
            </b-card>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ariaLabel: String,
        sectionTitle: String,
        arabicSectionTitle: String
    },
    data() {
        return {
            data:{
                en:{
                    Faqs:[
                        {
                            index:1,
                            title:"What is the Application Process?",
                            detail:[
                                "Submit Application Form (includes CV)",
                                // "Submit short video ",
                                "Virtual Interview with WiT team "
                            ]
                        },
                        {
                            index:2,
                            title:"Who can join? ",
                            detail:["Women who are currently in university pursuing a degree in Science, Technology, Engineering, Math (STEM) and are planning to join the workforce. "]
                        },
                        {
                            index:3,
                            title:"Are there any fees or costs? ",
                            detail:["No this program does not have fees."]
                        }
                    ]
                },
                ar:{
                    Faqs:[
                        {
                            index:1,
                            title:"ما هي عمليات تقديم الطلب؟ ",
                            detail:[
                                "تقديم نموذج الطلب (يشمل السيرة الذاتية)",
                                // "تقديم مقطع فيديو قصير.",
                                "إجراء مقابلة افتراضية (على الانترنت) مع فريق برنامج المرأة في التكنولوجيا"
                            ]
                        },
                        {
                            index:2,
                            title:"من يمكنهم الانضمام للبرنامج؟",
                            detail:["المرأة اللائي يبلغن من العمر 18 عامًا فما أكثر ممن يدرسن حاليًا في الجامعة للحصول على شهادة في مجال العلوم والتكنولوجيا والهندسة والرياضيات (STEM) ويخططن للارتياد سوق العمل."]
                        },
                        {
                            index:3,
                            title:"هل يتم دفع أي رسوم أو تكاليف؟ ",
                            detail:["لا، فهذا البرنامج لا يفرض على المتدربات دفع أي رسوم"]
                        }
                    ]
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
    .faq{
        padding-top:rem(60px);
        padding-bottom:rem(30px);
        h2 {
            font-size: rem(35px);
            font-weight: 900;
            color: var(--secondary);
            // text-transform: uppercase;
            margin-bottom: rem(35px);
            @media screen and (max-width: 991px) {
                font-size: rem(25px);
            }
        }
        .accordion {
            > .card {
                padding-left:rem(30px);
                padding-right:rem(30px);
                > .card-header{
                    background:transparent;
                    border:0;
                    padding:0;
                    .btn{
                        background:transparent;
                        font-size:rem(20px);
                        color:#444444;
                        text-align: left;
                        padding-left:60px;
                        padding-right:30px;
                        position:relative;
                        line-height:1.2;
                        white-space: pre-wrap;
                        @media screen and (max-width:767px){
                            font-size:rem(17px);
                        }
                        &:before{
                            content:"";
                            position:absolute;
                            width:47px;
                            height:47px;
                            background:url(../../../assets/images/svg/faq-icon.svg) left top no-repeat;
                            background-size: cover;
                            left:0;
                            top: 50%;
                            transform: translateY(-50%);
                            @media screen and (max-width:767px){
                                width:40px;
                                height:40px;
                            }
                        }
                        &:after{
                            content:"";
                            position:absolute;
                            width: 0;
                            height: 0;
                            border-left: 10px solid transparent;
                            border-right: 10px solid transparent;
                            border-top: 10px solid var(--toggleColor);
                            right:0;
                            top: 15px;
                            transition: .4s ease all;
                        }
                        &.not-collapsed{
                            color:var(--primary);
                            font-size:rem(30px);
                            @media screen and (max-width:767px){
                                font-size:rem(25px);
                            }
                            @media screen and (max-width:575px){
                                font-size:rem(20px);
                            }
                            &:after{
                                transform:rotate(180deg);
                            }
                        }
                    }
                }
                .card-body{
                    padding-top:rem(25px);
                    padding-left:60px;
                    p{
                        font-size:rem(24px);
                        color:#444444;
                        @media screen and (max-width:767px){
                            font-size:rem(18px);
                        }
                    }
                }
            }
        }
    }
    [lang='ar']{
         .faq{
            .accordion {
                > .card {
                    > .card-header{
                        .btn{
                            text-align: right;
                            padding-right:60px;
                            padding-left:30px;

                            &:before{
                                content:"";
                                right:0;
                                left:auto;
                            }
                            &:after{
                                left:0;
                                right:auto;
                            }
                        }
                    }
                    .card-body{
                        padding-right:60px;
                        padding-left:0;
                    }
                }
            }
        }
    }
</style>
