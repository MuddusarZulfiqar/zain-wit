<template>
    <div class="contactUs__form" > 
        <form role="contact Form"> 
            <fieldset>
                <legend class="visuallyhidden">&nbsp;</legend>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="control-label">{{this.form.detail.fullName}}<span>*</span></label>
                            <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.fullName +'..'"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.email}}<span>*</span></label>
                            <input type="email" class="form-control" aria-label="" :placeholder="this.form.detail.email +'..'"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.number}}<span>*</span></label>
                            <input type="tell" class="form-control number" aria-label="" :placeholder="this.form.detail.contact +'..'"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.country}}<span>*</span></label>
                             <vue-select :options="input__options" v-model="selected_item" aria-label="country" tabIndex="0"></vue-select>
                            <!-- <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.country"/> -->
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.nationality}}<span>*</span></label>
                            <vue-select :options="input__options2" v-model="nationality" aria-label="nationality" tabIndex="0"></vue-select>
                            <!-- <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.nationality"/> -->
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.address}}<span>*</span></label>
                            <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.address"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.uni}}<span>*</span></label>
                            <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.uni"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.major}}<span>*</span></label>
                            <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.major"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.expectedYear}}<span>*</span></label>
                             <vue-select :options="input__options3" v-model="expectedYear" aria-label="country" tabIndex="0"></vue-select>
                            <!-- <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.expectedYear"/> -->
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.gpa}}<span>*</span></label>
                             <!-- <vue-select :options="input__options4" v-model="gpa" aria-label="country" tabIndex="0"></vue-select> -->
                            <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.gpa"/>
                        </div>
                    </div>
                    <!-- <div class="col-md-12">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.gpa}}<span>*</span></label>
                            <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.gpa"/>
                        </div>
                    </div> -->
                    <div class="col-md-12">
                         <div class="form-group">
                            <label class="control-label">{{this.form.detail.careerList}}<span>*</span></label>
                            <input type="text" class="form-control" aria-label="" :placeholder="this.form.detail.careerList"/>
                        </div>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div class="checkboxWrapper">
                            <div class="form-group">
                                <label class="control-label">{{this.form.options.title}}</label>
                                <ul>
                                    <li v-for="(items,index) in this.form.options.checkBoxes" :key="index">
                                        <b-form-checkbox-group
                                            :id="`checkbox-${index}`"
                                            v-model="status"
                                            :name="`checkbox-${index}`"
                                        >
                                        <b-form-checkbox :value="items" >
                                                {{items}}
                                            </b-form-checkbox>
                                        </b-form-checkbox-group>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                             <label class="control-label">{{this.form.options.cv}}</label>
                            <div class="fileUpload">
                                <b-form-file v-model="file2" class="plain"></b-form-file>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label pl-0 pr-0">{{this.form.options.note}}</label>
                            <p>{{this.form.options.detail}}</p>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <vue-recaptcha
                        sitekey="6LdzWSkUAAAAAJQZfr1nvUshWLG7-2LY8BdQAWIq"
                      ></vue-recaptcha>
                </div>
                <div class="form-group">
                    <div class="button-row">
                        <button type="submit" class="btn btn-primary" aria-describedby="contactform">
                            {{$t("buttons.submit")}}
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
const selected_item = {
  label: "Country of Residence",
};
const nationality= {
  label: "Nationality",
};
const expectedYear= {
  label: "Expected year of graduation",
};
const gpa= {
  label: "Current GPA",
};
export default {
    props: {
        ariaLabel: String,
    },
     components: {
        VueRecaptcha,
  },
    data() {
        return {
            selected_item,
            nationality,
            expectedYear,
            gpa,
            file2: null,
            status:[],
            input__options: [
                { code: null, label: 'All' },
                { code: 'a', label: 'This is First option' },
                { code: 'b', label: 'Selected Option' },
                { code: 'c', label: 'Third Option' },
            ],
            input__options2: [
                { code: null, label: 'All' },
                { code: 'a', label: 'This is First option' },
                { code: 'b', label: 'Selected Option' },
                { code: 'c', label: 'Third Option' },
            ],
            input__options3: [
                { code: null, label: 'All' },
                { code: 'a', label: 'This is First option' },
                { code: 'b', label: 'Selected Option' },
                { code: 'c', label: 'Third Option' },
            ],
            input__options4: [
                { code: null, label: 'All' },
                { code: 'a', label: 'This is First option' },
                { code: 'b', label: 'Selected Option' },
                { code: 'c', label: 'Third Option' },
            ],
            form:{
                en:{
                    detail:{
                        fullName :"Full name",
                        email:"Email",
                        number:"Phone Number",
                        contact:"Contact Number",
                        country:"Country of Residence",
                        nationality:"Nationality",
                        address:"Address",
                        uni:"University",
                        major:"Major",
                        expectedYear:"Expected year of graduation",
                        gpa:"Current GPA",
                        careerList:"Please list careers, fields, or industries that you are interested in learning more about"
                    },
                    options:{
                        title:"Are you interested in help with (please select as many as applicable)",
                        cv:"Attach and include C.V.",
                         note:"Note:",
                         detail:"All prospective mentees must be women who are currently be studying and enrolled in university majoring in a STEM-related degree.",
                        checkBoxes:[
                            "Building your network",
                            "Setting career goals",
                            "Creating career opportunities",
                            "Personal development",
                            "Setting life goals",
                            "Balancing the demands of life",
                            "Expanding your knowledge of STEM career paths",
                            "Creating education goals/plan",
                            'Creating career goals/plan',
                            "Progressing in your current field"
                        ]
                    }
                },
                ar:{
                    detail:{
                        fullName :"الاسم بالكامل",
                        email:"البريد الإلكتروني",
                        number:"رقم الهاتف",
                        contact:"رقم الاتصال",
                        country:"بلد الإقامة",
                        nationality:"الجنسية",
                        address:"العنوان",
                        uni:"الجامعة",
                        major:"التخصص",
                        expectedYear:"العام المتوقع للتخرج",
                        gpa:"المعدل التراكمي الحالي",
                        careerList:"يرجى ذكر الوظائف أو المجالات أو الصناعات التي تهتم بمعرفة المزيد عنها"
                    },
                    options:{
                        title:"هل أنت مهتم بالمساعدة في (يرجى تحديد أكبر عدد ممكن)",
                        cv:"إرفاق وتضمين السيرة الذاتية",
                        note:"ملاحظة:",
                        detail:"يجب أن يكون جميع المتدربين المحتملين من النساء اللائي يدرسن حاليًا ومسجلات في جامعة تخصص في درجة متعلقة بالعلوم والتكنولوجيا والهندسة والرياضيات.",
                        checkBoxes:[
                            "بناء شبكتك",
                            "تحديد الأهداف المهنية ",
                            "خلق فرص عمل",
                            "التنمية الشخصية",
                            "تحديد أهداف الحياة ",
                            "موازنة متطلبات الحياة",
                            "توسيع معرفتك بالمسارات الوظيفية في مجالات العلوم والتكنولوجيا والهندسة والرياضيات (STEM)",
                            "وضع أهداف / خطة تعليمية",
                            'وضع أهداف / خطة مهنية',
                            "التقدم في مجال عملك الحالي"
                        ]
                    }
                }
            },
        }
    },
    
    created(){
        this.$i18n.locale=="en" ? 
        this.form = this.form.en:
        this.form = this.form.ar;
    },
}
</script>

<style lang="scss" scoped>
.contactUs__form {
    --toggleColor:var(--secondary);
    .checkboxWrapper{
        ul{
            max-width:700px;
            list-style-image: none;
            margin:rem(10px) 0 rem(30px) 0 !important;
            @include flex (start , space-between);
            li{
                max-width: 46%;
                flex: 0 0 46%;
                margin-bottom:rem(20px);
                margin-right:rem(20px);
                @media screen and (max-width:575px){
                    max-width:100%;
                    flex:0 0 100%;
                    margin-right:0;
                }
                &::marker{
                    display: none;
                    color: transparent;
                }
            }
        }
    }
    .button-row {
        justify-content: start;
        @media screen and (max-width:767px){
            justify-content: center;
        }
    }
    /deep/ {
        .vs__selected{
            font-size: rem(22px);
            font-weight: 600;
            color: #666666 !important;
            @media screen and (max-width:767px){
                font-size:rem(18px);
            }
        }
        .custom-checkbox {
            padding-left:30px;  
            .custom-control-label{
                font-size:rem(20px);
                line-height:1.3;
                &::before{
                    width:20px;
                    height:20px;
                    border-radius: 0 !important;
                    left:-30px;
                    top:0;
                    border-color:#cec9d4;;
                }
                &::after{
                    width: 21px;
                    height: 21px;
                    left:-30px;
                    top:0;
                }
            }
            .custom-control-input{
                &:checked ~ .custom-control-label{
                    &::before{
                        background: var(--primary);
                    }
                }
                &:focus ~ .custom-control-label{
                    &::before{
                        box-shadow: none;
                    }
                }
            }
        }
        .custom-file-input{
            box-shadow:none;
            &:focus ~ .custom-file-label{
                box-shadow:none;
            }
        }
        .custom-file-label{
            border-radius: 0;
            border: 1px solid #cec9d4;
            cursor: pointer;
            &::after{
                background: var(--primary);
                border-radius: 0;
                color:#fff;
                border:0;
            }
        }
    }   
    // padding: rem(50px) 0px;
    // max-width: 600px;
    margin: auto;
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        -moz-appearance: textfield;
    }
    button.btn {
        padding:rem(18px) rem(55px);
    }
    .form-group {
        margin-bottom:rem(45px);
        @media screen and (max-width:767px){
           margin-bottom:rem(25px);
        }
        /deep/ {
            .v-dropdown-item{
                margin: 0px;
            }
            .v-select {
                height: 60px;
                font-size: rem(22px);
                color: #666666 !important;
                background: #fff;
                padding: 0 rem(22px);
                outline: none;
                border: 1px solid #cec9d4;
                border-radius: 0;
                font-weight: 600;
                position:relative;
                @media screen and (max-width:991px){
                   height: 45px;
                    font-size: rem(18px); 
                }
                button {
                    padding: rem(14px) rem(22px);
                    font-size: rem(22px) !important;
                    font-weight:600 !important;
                    &:hover , &:focus{
                        background: #fff !important;
                    }
                }
                .vs__dropdown-toggle{
                    min-height:60px;
                    span{
                        margin: 0;
                    }
                    input{
                        margin: 0;
                    }
                    @media screen and (max-width:991px){
                        min-height:45px;
                    }
                }
                &:focus , &:focus-within{
                    outline: 3px dashed var(--secondary);
                    outline-offset: -1px;
                }
                .vs__actions {
                    padding-right:0;
                    .vs__open-indicator{
                        border-top: 10px solid var(--primary);

                    }
                }
            }
        }
        .form-control{
            height: 60px;
            font-size:rem(22px);
            font-weight:600;
            &::placeholder{
                color:#666666;
            }
            @media screen and (max-width:991px){
                height: 45px;
                font-size: rem(18px); 
            }
        }
    }
}
[lang='ar']{
    .contactUs__form {
        .checkboxWrapper{
            ul{
                li{
                    margin-left:rem(20px);
                    margin-right:0;
                    @media screen and (max-width:575px){
                        margin-left:0;
                    }
                }
            }
        }
        .number{
            text-align: right;
            direction: ltr;
        }
        /deep/ {
            .custom-checkbox {
                padding-right:30px;
                padding-left:0;
                .custom-control-label{
                    &::before{
                        right:-30px;
                        left:auto
                    }
                    &::after{
                        right:-30px;
                        left: auto;
                    }
                }
            }
            .custom-file-label{
                &::after{
                    left:0;
                    right: auto;
                }
            }
        }   
        .form-group {
            /deep/ {
                .v-select {
                    .vs__actions {
                        padding-left:0;
                    }
                }
            }
        }
    }
}

</style>
