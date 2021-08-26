<template>
    <div class="meetMentorsMain" >
        <div class="container">
             <meet-mentors-modal v-if="!(isEmpty(directorIn))" @closeDetailModal="closeModal" :is-show="showModal" :director="directorIn"></meet-mentors-modal>
              <div class="meetMentorsMain__slide">
                  <div class="meetMentorsMain__slide--head customTabs__items">
                    <carousel
                         navigationLayout="side"
                         navigation-theme="simple"
                         :carousel-settings="sliderOption"
                         @init="setSlider"
                         role="tablist"
                    >
                         <div
                         class="swiper-slide meetMentorsMain__slide--link"
                         v-for="memberDetail in this.data.members"
                         :key="memberDetail.id"
                         role="presentation"
                         >
                         <a
                              @click.prevent.stop
                              data-target="highlights"
                              class="nav-link"
                              :class="{ active: isActive(memberDetail.id) }"
                              v-on:click.stop.prevent="tabIndex = memberDetail.id"
                              data-toggle="tab"
                              href="#"
                              role="tab"
                              :aria-controls="`tab_meetMentorsMain_${memberDetail.id}`"
                              :aria-selected="memberDetail.id==0?'true':'false'"
                              :id="`meetMentorsMain_${memberDetail.id}`"
                         >
                              <span class="icon">
                                   <img
                                        :src="
                                             require(`@/assets/images/country/${memberDetail.country}.png`)
                                        "
                                        alt=""
                                        class="img-fluid"
                                   />
                              </span>
                              {{ memberDetail.countryName }}
                         </a>
                         </div>
                    </carousel>
               </div>
              </div>
              <div class="meetMentorsMain__detail">
                   <b-tabs v-model="tabIndex" nav-wrapper-class="d-none">
                        <b-tab v-for="memberDetail in this.data.members" :title="memberDetail.country" :key="memberDetail.id">
                             <div class="row">
                                  <div class="col-lg-3 col-4 mb-30 meetMentorsMain__detail--item" v-for="member in memberDetail.member" :key="member.id+'6d5fd'">
                                       <meet-mentors-card @openDirmodel="openModal"  :directorInfo="member" ></meet-mentors-card>
                                  </div>
                             </div>
                        </b-tab>
                   </b-tabs>
              </div> 
        </div>
    </div>
</template> 


<script>
import MeetMentorsCard from './partials/MeetMentorsCard.vue'
import MeetMentorsModal from './partials/MeetMentorsModal.vue'
    export default {
  components: { MeetMentorsCard,MeetMentorsModal },
     data(){
          return{
               tabIndex: 0,
               showModal: false,
               directorIn:{},
               sliderOption: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    observer: true,
                    observeParents: true,
                    slideToClickedSlide: true,
                     rtl: this.$i18n.locale=="en" ? false : true,
                    breakpoints: {
                         1200: {
                              slidesPerView: 8,
                         },
                         768: {
                              slidesPerView: 5,
                         },
                         680: {
                              slidesPerView: 4,
                         },
                         576: {
                              slidesPerView: 3,
                         },
                         340: {
                              slidesPerView: 2,
                         },
                    },
               },
               data:{
                    en:{
                         members:[
                    //      {
                    //      id:0,
                    //      country:"group",
                    //      countryName:"group",
                    //      member:[
                    //           // {
                    //           //      id: 98,
                    //           //      name:"Iyadh Borgi",
                    //           //      image:"Iyadh Borgi Zain Group.png",
                    //           //      opco:"group",
                    //           //      detail: "<p> Iyadh Borgi is the director of Business Operations & Performance at Zain Group. He reviews and analyses the Zain’s operation’s performances, assesses major CAPEX Investments, and coordinates the full year budget across Zain’s operations. Prior to joining Zain, Iyadh worked in many companies across different countries which shaped his knowledge and experience in the industry. His motto in life is believing in yourself, pursuing your dreams wherever they are and seize every opportunity. Iyadh is a big fan of Real Madrid, loves music and travelling.</p>",
                    //           //      jobTitle:"Business Operations & Performance Director",
                    //           //      email:"Iyadh.Borgi@zain.com"
                    //           // },
                    //           // {
                    //           //      id: 97,
                    //           //      name:"Mai Al Mutair",
                    //           //      image:"Mai Al Mutair Zain Group.jpg",
                    //           //      opco:"group",
                    //           //      detail:"<p> Mai Al Mutair currently holds the position of Director of Treasury & Investments at Zain Group.  Her role includes management of the overall debt portfolio as well as strengthening the treasury governance across all Zain’s operations. Over the years, her approach of communication and systems integration has helped shape a transformation where the division today serves as a key strategic treasurer rather than traditional one. Mai completed many accredited programs, latest being 'Leading Strategy Execution in Financial Services' at the Harvard Business School and holds a bachelor’s degree in accounting from Boston College in addition to being a licensed CPA in both the United States and Kuwait.</p>",
                    //           //      jobTitle:"Director of Treasury & Investments ",
                    //           //      email:"Mai.Almutair@zain.com"
                    //           // },
                              
                    //      ]
                    // },
                    {
                         id:0,
                         country:"kuwait",
                         countryName:"kuwait",
                         member:[
                              {
                                   id: 101,
                                   image:"Maysam Al Duaij.jpg",
                                   name:"Maysam AlDuaij ",
                                   opco:"kuwait",
                                   jobTitle:"Technical Business Analysis Expert",
                                   detail:"Maysam is a leading expert in the telecommunication industry and services. Graduated from Northeastern University Boston, MA (BSc degree in Electrical Engineering). Started as a radio planning engineer having hands on experience in networks with multi vendors. Competent in leading and launching projects from contract to launch and commercial level. Participated in the development and growth of the data services in Zain Kuwait starting from EDGE to 5G networks. Currently is a member of the Technical Business Analysis Team which plays a crucial role as the interface between the commercial, finance and technical teams. Maysam holds the Associate Certificate in Project Management from the School of Business at George Washington University and completed an intensive Leadership Development program offered by Cornell University NY, USA",
                                   // email:"Abeer.Alghais@zain.com"
                              },
                              {
                                   id: 99,
                                   name:"DANA ABDAL",
                                   image:"Dana Abdal.jpg",
                                   opco:"kuwait",
                                   jobTitle:"Care Applications Management Specialist",
                                   detail:"<p> Dana Abdal is a Care Apps Specialist at Zain Kuwait. She has been with Zain Kuwait IT department for over 10 years and has worked on diverse IT projects which fostered the development of her knowledge and experience in the field today. She is driven by the phrase 'Never look down, unless you are helping someone up'. Dana also enjoys playing the piano and was the first to introduce the art of reborning in the Arab region.</p>",
                                   // email:"Dana.Abdal@kw.Zain.com"
                              },
                              {
                                   id: 102,
                                   image:"Nadia Al Saif.jpg",
                                   name:"Nadia AlSaif  ",
                                   opco:"kuwait",
                                   jobTitle:"Business Intelligence Director",
                                   detail:"Nadia AlSaif is a computer engineer graduated from Kuwait university. With 25 years of experience working in different technical and commercial levels at Zain. Current position is Business Intelligence Director in Zain Kuwait, Leading business insight/analytic, data management and Information Architecture teams. Nadia is a powerful force in the workplace and uses her positive attitude and tireless energy to encourage others to work hard and succeed. Nadia enjoys using her skills to contribute to the exciting technological advances that happen every day at zain. Nadia is inspired daily by her great team.",
                                   // email:"Abeer.Alghais@zain.com"
                              },
                              {
                                   id: 200,
                                   name:"Mohammad Al Murshed",
                                   image:"Mohammed Al-Murshed Zain Group.jpg",
                                   opco:"group",
                                   detail:"<p> Mohammad Al-Murshed has two decades of experience in telecommunication industry sector. He has a wide range of expertise developed in the areas of Networks, IT, digital transformation, wholesale, coaching and mentoring. Working in several different environments, projects and countries provides Mohammed with an extensive experience of handling different type of projects, technology, cultures, people and their characters. Mohammed’s vision is to participate and contribute to building a legacy for local youth and motivate people to achieve their dreams.</p>",
                                   jobTitle:"Networks Director ",
                                   email:"Mohammed.Almurshed@zain.com"
                              },
                              {
                                   id: 201,
                                   name:"Mohammad Al Tarawneh",
                                   image:"Mohd Tarawneh Zain Group.jpg",
                                   opco:"group",
                                   detail:"<p> Mohammad Al-Tarawneh is a Network Transmission Manager at Zain Group overseeing the technologies that provide connectivity and interconnection between all parts of the mobile network including wireline & wireless technologies. Over the years Mohammad learned that “Success requires good planning & clear design from the beginning”. Outside of work, Mohammad loves spending time with his extended family or going outside with his wife & their three children, he is currently living with them in Kuwait.</p>",
                                   jobTitle:"Network Transmission Manager ",
                                   email:"mohammad.altarawneh@zain.com"
                              }
                         ]
                    },
                    {
                         id:1,
                         country:"jordan",
                         countryName:"jordan",
                         member:[
                              {
                                   id: 94,
                                   name:"Hiba Nader Awad Afaneh",
                                   image:"Hiba Afaneh Zain Jordan.jpg",
                                   opco:"jordan",
                                   detail:"<p> Hiba Afaneh joined Zain Jordan in 2002 and entered the field of Information Security as a security officer. Since then, Hiba helped in establish the Information Security function within Zain Jordan, whereas the function grew during her 18 years of experience to include more vital functions that cover Cyber Security and Enterprise Risk Management. In addition to her career, Afaneh developed an entrepreneurship program that targets youth, and she gave several training courses in the entrepreneurship realm for students to get them acquainted with entrepreneurial skills and mindset through interactive practice and fun activities.</p>",
                                   jobTitle:"Enterprise Risk Management and Internal Audit",
                                   email:"Hiba.Afaneh@jo.zain.com"
                              },
                              {
                                   id: 92,
                                   name:"Fadi Naeem Mohammad Abu Sharkh",
                                   image:"Fadi Abu Sharkh Zain Jordan.jpg",
                                   opco:"jordan",
                                   detail:"<p> Fadi Abu Sharkh is a Post-paid Voice Segment Manager with over 20 years of experience. Fadi believes small things make a big impact and is driven to leaving a legacy of achievement. His skills include project management, research and development. In his free time, Fadi likes to read, cycle and travel.</p>",
                                   jobTitle:"Consumer Business ",
                                   email:"Fadi.AbuSharkh@jo.zain.com"
                              },
                              {
                                   id: 91,
                                   name:"Zina Mohammad Saleh AL Oran",
                                   image:"Zina Oran Zain Jordan.jpg",
                                   opco:"jordan",
                                   detail:"<p> Zina Oran graduated from the University of Jordan with a degree in Industrial Engineering. While working at the Ministry of ICT in Jordan Zina managed an internship program for fresh graduates in areas of Information Technology and Communications. Since joining Zain in 2006, she worked in Business Excellence, Internal Audit and Risk Management and now holds the position of Head of Governance, Risk & Compliance department (GRC). Zina’s strengths are in leading teams and helping them achieve their full potential, in addition to being adaptive and agile in changing circumstances. On a personal level, Zina is a mother of three wonderful boys, loves reading, traveling and learning new things.</p>",
                                   jobTitle:"Enterprise Risk Management and Internal Audit",
                                   email:"Zina.AlOran@Jo.Zain.com"
                              },
                              {
                                   id: 90,
                                   name:"Tamara Saeed Mohammad AlBsoul",
                                   image:"unnamed.jpg",
                                   opco:"jordan",
                                   detail:"<p> Tamara Saeed Mohammad AlBsoul - Business Analytics & AI</p>",
                                   jobTitle:"Business Analytics & AI",
                                   email:"tamara.albsoul@jo.zain.com"
                              },
                              {
                                   id: 89,
                                   name:"Dalia Mohammed Ramez Shakhshir",
                                   image:"Dalia Shakhshir Zain Jordan.jpg",
                                   opco:"jordan",
                                   detail:"<p> Dalia Shakhshir is a passionate and dedicated Product Development Team Leader in the Telecom domain with a proven track of quality deliverables, IT development, and Business Analysis experience of 16+ years. Dalia is a creative detail-oriented problem solver, with advanced analytical and reasoning skills who consistently delivers and fulfils strategic implementations. Honesty and kindness are the main values Dalia believes in and lives by. Spending quality time with her three children is what Dalia enjoys the most, as well as walking and making homemade sweets.</p>",
                                   jobTitle:"Consumer Business",
                                   email:"Dalia.Shakhsheir@jo.zain.com"
                              },
                              {
                                   id: 88,
                                   name:"Lama (Mohammad Said) Musallam Al Rahawanjy",
                                   image:"Lama Rahwanji Zain Jordan.jpg",
                                   opco:"jordan",
                                   detail:"<p> Lama Al Rahawanjy holds a Regulatory Manager position and has 24 years of experience at Zain Jordan. She has strong technical and personal skills such as communication, critical thinking and problem solving, leadership and training, negotiation, organizational and time management skills. Her goal to be a successful businesswoman and benefit the society which has encouraged her to stay open-minded to any new opportunities. Outside of the office, Lama enjoys drawing and interior design.</p>",
                                   jobTitle:"Legal & Regulatory Affairs",
                                   email:"lama.AlRahwanji@Jo.Zain.com"
                              },
                              {
                                   id: 87,
                                   name:"Mais Ibrahim Ahmad Kayed",
                                   image:"Mais Kayed Zain Jordan.jpg",
                                   opco:"jordan",
                                   detail:"<p> Mays Kayed is the Customer Experience Head at Zain Jordan with more than 15 years’ experience in the Telecom industry. Mays is a strong believer that this generation can do miracles however, it’s the seasoned employees’ role to help them unlock their potential. Mays is an ambassador for Female Wave of Change (FWOC) and participates with the INJAZ program which is an NGO catered to developing youths’ skills.</p>",
                                   jobTitle:"Customer Experience",
                                   email:"Mais.Kayed@jo.zain.com"
                              }
                         ]
                    },
                    {
                         id:2,
                         country:"ksa",
                         countryName:"ksa",
                         member:[
                              {
                                   id: 87,
                                   image:"unnamed.jpg",
                                   name:"Ghadah Mutaab AlMutairi",
                                   opco:"ksa",
                                   detail:"<p> Ghadah Mutaab Almutairi has over 10 years of experience and its currently a Workforce Management & Planning Manager with a bachelor’s degree in Information Technology. Ghadah is a motivator who strives to make a difference on a life.</p>",
                                   jobTitle:"Workforce Management & Planning Manager",
                                   email:"Ghadah.Almutairi@sa.zain.com"
                              },
                              {
                                   id: 86,
                                   name:"Ali Saleh Ahmad Al Salam",
                                   image:"Ali Al Salam Zain KSA.jpg",
                                   opco:"ksa",
                                   detail:"<p> Ali Saleh AlSalam is an Invoice Acceptance & Fixed Assets Senior Manager at Zain Saudi Arabia. He first joined in 2007 after graduating with a Bachelor of Science in Accounting from King Fahd University of Petroleum and Minerals.</p>",
                                   jobTitle:"Invoice Acceptance & Fixed Assets Senior Manager",
                                   email:"ali.alsalam@sa.zain.com"
                              },
                              {
                                   id: 85,
                                   name:"Bouthina Ahmed Mahroos",
                                   image:"Bouthina Mahroos Zain KSA.jpg",
                                   opco:"ksa",
                                   detail:"<p> Bouthina Ahmed Mahroos has 13 years-experience in HR, and worked in different industries including FMCG, automotive, financial services and telecommunication. She strives to enjoy the journey and create a balance between work and personal life. What drives Bouthina is ‘work hard until you don’t have to introduce yourself’. </p>",
                                   jobTitle:"Acting Payroll Senior Manager ",
                                   email:"Bouthina.Mahroos@sa.zain.com"
                              },
                              {
                                   id: 84,
                                   name:"Rayan Fawaz Jan",
                                   image:"Rayan Jan Zain KSA.jpg",
                                   opco:"ksa",
                                   detail:"<p> Rayan Fawaz Jan has over 14 years of experience in the field of SCM, HCM, finance consultation and implementation of Oracle EBS Suite. Rayan believes life is not a problem to be solved but a reality to be experienced.</p>",
                                   jobTitle:"ERP Applications Senior Manager",
                                   email:"Rayan.Jan@sa.zain.com"
                              },
                              {
                                   id: 83,
                                   name:"Maryam Abdullatif Alhabab",
                                   image:"Maryam Abdullatif Alhabab Zain KSA.jpeg",
                                   opco:"ksa",
                                   detail:"<p> Maryam Alhabab has 10 years of experience in the finance department at Zain KSA while working part time as an events manager. Before COVID-19 she was able to open her own business in the events field. Maryam is passionate, ambitious and optimistic, with good leadership and communication skills. Her quote to live by is: make your smile never leave you, no matter what you hide behind it and treat people the way you want them to treat you.'</p>",
                                   jobTitle:"Budgeting & Control Manager",
                                   email:"Maryam.Alhabab@sa.zain.com"
                              },
                         ]
                    },
                    {
                         id:3,
                         country:"iraq",
                         countryName:"iraq",
                         member:[
                              {
                                   id: 82,
                                   name:"Haider Aied Ali Alkarway",
                                   image:"Haider-Aied-Ali-Alkarway-Zain-Iraq.png",
                                   opco:"iraq",
                                   detail:"<p> Haider Aied is the Head of the Corporate Reporting Unit since 2017 with over 15 years’ experience at Zain Iraq. He is responsible for communicating with different departments to support the creation of reports and dashboards. Haider enjoys hunting and camping.</p>",
                                   jobTitle:"Head of Corporate Reporting Unit",
                                   email:"Haider.Aied@iq.zain.com"
                              },
                              {
                                   id: 81,
                                   name:"Rasha Uday Moain Moain",
                                   image:"Rasha Uday Zain Iraq.jpg",
                                   opco:"iraq",
                                   detail:"<p> Rasha Uday is an electronic and communication engineer and Head of Customer Experience Department with 15 years’ experience at Zain. Rasha is proud to have real experience and knowledge in three important areas where she was able to develop during her journey within Zain. Starting for Human Resources to Sales support the customer experience. Despite her specialization in engineering but she found herself in business. She is planning to get an MBA in CX field. Outside work, Rasha loves to read and go diving when she can.</p>",
                                   jobTitle:"Head of Customer Experience Department",
                                   email:"rasha.uday@iq.zain.com"
                              },
                              {
                                   id: 80,
                                   name:"Karim Rahimah Hussein",
                                   image:"Karim Rahimah Hussein Zain Iraq.jpg",
                                   opco:"iraq",
                                   detail:"<p> Karim Rahimah is head of the deployment department, he specialized in electrical engineering and is responsible for GSM sites construction, radio, TRM, & core network equipment deployment, fiber networks, FTTH deployment and operation, technical solutions. Karim’s goals are to maintain healthy relationships with family and friends and an efficient lifestyle. His professional goal is to ensure he continues to evolve his background and knowledge in the technological sector. Karim likes ping pong, football, video games, travelling, swimming, and watching movies.</p>",
                                   jobTitle:"Head of Deployment Department",
                                   email:"Karim.Rahimah@iq.zain.com"
                              },
                              {
                                   id: 79,
                                   name:"Suhaib Wamidh Dhyaa Eldeen Al Naftaji",
                                   image:"Suhaib Wamidh Dhyaa Eldeen Al Naftaji  Zain Iraq.jpg",
                                   opco:"iraq",
                                   detail:"<p> Suhaib Eldeen is Head of the Core Network Implementation with 17 years’ experience in the telecom field. Suhaib specializes in computer engineering and is responsible for managing and implementing telecom projects. Suhaib is ambitious, confident and a hard worker who always tries to support others. Suhaib likes to swim, play soccer and video games.</p>",
                                   jobTitle:"Head of Core Network Implementation Unit",
                                   email:"Suhaib.Eldeen@iq.zain.com"
                              },
                              {
                                   id: 78,
                                   name:"Ammar Mohamed Taher Al-Shaikly",
                                   image:"Ammar-Mohamed-Taher-Al-Shaikly-Zain-Iraq.png",
                                   opco:"iraq",
                                   detail:"<p> Ammar Taher is Head of Core Planning & Optimization Department at Zain Iraq with more than 15 years of experience in the telecommunication world. Ammar specialized in core network dimensioning and capacity planning. He has a master’s degree in telecommunication engineering. Ammar is looking to be a data analyst and is working to get more experience in the 5G and cloud computing. Ammar’s interests include in reading, watching football and movies.</p>",
                                   jobTitle:"Head of Core Planning & Optimization Dept.",
                                   email:"Ammar.Mohamed@iq.zain.com"
                              }
                         ]
                    },
                    {
                         id:4,
                         country:"bahrain",
                         countryName:"bahrain",
                         member:[
                              {
                                   id: 95,
                                   name:"Abdulla Mohammed Albinali",
                                   image:"Abdulla AlBinAli.jpg",
                                   opco:"bahrain",
                                   detail:"<p> Abdulla Mohammed Albinali is Radio Specialist at Zain Bahrain who is responsible for Radio network planning, new site roll-out, and Radio network expansions and leading the site rectification project with TRA. Abdulla is blessed to be part of many success stories at Zain Bahrain like 4G launch, 5G launch, and the most recent deployment of NB-IoT. Abdulla is passionate about looking for new technologies and methods to enhance the customer & end-user experience. Abdulla likes to play video games, read, play sports & watch movies.</p>",
                                   jobTitle:" Radio Specialist",
                                   email:""
                              },
                              {
                                   id: 94,
                                   name:"Ali Atiah ",
                                   image:"ali atiah .jpg",
                                   opco:"bahrain",
                                   detail:"<p> Ali Atiah - Manager, Infrastructure, Core & VAS. Ali has 16 years expertise in telco.</p>",
                                   jobTitle:"Manager, Infrastructure, Core & VAS",
                                   email:""
                              },
                              {
                                   id: 93,
                                   name:"Mubarak Ebrahim Nass",
                                   image:"Mubarak Nass.jpg",
                                   opco:"bahrain",
                                   detail:"<p> Mubarak Ebrahim Nass is Infrastructure & Core Specialist at Zain Bahrain who is responsible for CS Core & Infrastructure deployments, IT help desk & ERP. Mubarak is blessed to be part of many success stories at Zain Bahrain like 4G launch, 5G launch, and most recent being the Apple iWatch enablement & launch. Mubarak is passionate about looking for new technologies and methods to enhance the customer & end-user experience. Mubarak likes to play video games, read & watch movies.</p>",
                                   jobTitle:"Infrastructure & Core Specialist ",
                                   email:""
                              }
                         ]
                    },
                    {
                         id:5,
                         country:"sudan",
                         countryName:"sudan",
                         member:[
                              {
                                   id: 96,
                                   name:"Mohammed Khaled Omran ",
                                   image:"Abueissa.jpg",
                                   opco:"sudan",
                                   detail:"<p> over 10 years of experience in ICT, project management and business process management with extensive focus on CSI/Transformation initiatives for Telecom services.</p>",
                                   jobTitle:"Marketing Segments - Directors",
                                   email:""
                              },
                               {
                                   id: 97,
                                   name:"Abdelnasir Moutasim Elbashir Ali ",
                                   image:"Abdelnasir Moutasim.jpg",
                                   opco:"sudan",
                                   detail:"<p> Abdelnasir Moutasim Elbashir Ali is a Technology IT Development Director with 13 years of experience in ICT domain and specialization in various IT areas in Telecom industry. He graduated with BSc in Computer Science, MSc IT, MSc Telecom & MBA plus ITIL, ITIL SD & PMP Certified. Abdelnasir is a powerful force in the workplace and uses his positive attitude and tireless energy to encourage others to work hard and succeed, moreover he enjoy using his skills to contribute to the exciting technological advances that happen every day.</p>",
                                   jobTitle:"Technology IT Development Director",
                                   email:""
                              },
                              {
                                   id: 98,
                                   name:"Ghaidaa Abdelgadir Sirelkhatim  ",
                                   image:"Ghaidaa.jpg",
                                   opco:"sudan",
                                   detail:"<p> has over 15 years of experience. Ghaidaa is highly competent in strategy and business planning with experience in budgeting, forecasting and performance monitoring. In addition, she is an expert in financial analysis of income statements and financial review.</p>",
                                   jobTitle:"strategy and business planning",
                                   email:""
                              },
                              {
                                   id: 100,
                                   name:"Omer Kamal Ali Mukhtar ",
                                   image:"omer-kamal.jpg",
                                   opco:"sudan",
                                   detail:"<p>is a Telecom Management professional with over 17 years of experience in Marketing, Technology, Project Management, and Customer Experience Management. He is experienced in implementing strategies that consistently enhance business and operational targets.</p>",
                                   jobTitle:"Telecom Management professional",
                                   email:""
                              }
                         ]
                    },
                    {
                         id:6,
                         country:"south-sudan",
                         countryName:"South Sudan",
                         member:[
                              {
                                   id: 103,
                                   name:"Chikijwok Lwal John ",
                                   image:"Chikijwok.jpeg",
                                   opco:"South Sudan",
                                   detail:"<p> Chikijwok Lwal John is a Roaming and Interconnect Specialist at Zain South Sudan. Before that, Chikijwok joined Zain in 2019 as a Marketing Development Specialist where she gained experience with a great team. She believes to learn, people have to go through all the ups and downs to make their path smooth, and that’s how they grow. </p>",
                                   jobTitle:"Roaming and Interconnect Specialist",
                                   email:""
                              },
                               {
                                   id: 104,
                                   name:"Daniel Loro  ",
                                   image:"Daniel.jpeg",
                                   opco:"South Sudan",
                                   detail:"<p> Daniel Loro is the Planning and Implementation Team Leader at Zain South Sudan. Working at Zain has been a privilege to empower and develop his technical skills where he was able to attain several international certificates.  </p>",
                                   jobTitle:"Planning and Implementation Team Leader",
                                   email:""
                              },
                              {
                                   id: 105,
                                   name:"Eliza Isaiah  ",
                                   image:"Eliza.jpg",
                                   opco:"South Sudan",
                                   detail:"<p> Eliza Isaiah is the Branding and Communication Manager at Zain South Sudan. </p>",
                                   jobTitle:"Branding and Communication Manager ",
                                   email:""
                              },
                               {
                                   id: 106,
                                   name:"Gaudensio Modi  ",
                                   image:"Gaudensio.jpeg",
                                   opco:"South Sudan",
                                   detail:"<p> Gaudensio Modi is currently working as a Radio and Transmission Operation Team Leader. He obtained a bachelors degree in Electronic Engineering and Communication. His love for technology and innovation pushed him to further his education with a masters in Electrical Engineering. Gaudensio believes his determination, hard-work and dedication earned him his position at Zain.</p>",
                                   jobTitle:"Radio and Transmission Operation Team Leader",
                                   email:""
                              },
                               {
                                   id: 107,
                                   name:"Roynina Magaya   ",
                                   image:"Roynina.jpeg",
                                   opco:"South Sudan",
                                   detail:"<p> Roynina Magaya is a BSS Application Manager at Zain South Sudan. She is an accomplished computer engineer and enjoys using her skills to contribute and support technological advances. Roynina climbed the ladder and gained experience to be where she is today. </p>",
                                   jobTitle:"BSS Application Manager",
                                   email:""
                              }
                         ]
                    }
                    ]
                    },
                    ar:{
                    members:[
               //      {
               //      id:0,
               //      country:"group",
               //      countryName:"مجموعة",
               //      member:[
               //           // {
               //           //      id: 98,
               //           //      name:"عياض برجي",
               //           //      image:"Iyadh Borgi Zain Group.png",
               //           //      opco:"مجموعة",
               //           //      detail: '<p>في مجموعة زين، يقوم برجي بمراجعة وتحليل أداء عمليات زين وتقييم الاستثمارات الرأسمالية الرئيسية وتنسيق ميزانية السنة بأكملها، قبل انضمامه إلى زين، عمل في العديد من الشركات في مختلف البلدان، حيث تشكلت لديه معرفة وخبرة كبيرة في هذه الصناعة، شعاره في الحياة هو "إيمانك بنفسك ومتابعة أحلامك أينما كانت، واغتنام كل فرصة"، يُعد عياض من أشد المعجبين بفريق ريال مدريد كما يحب الموسيقى والسفر.</p>',
               //           //      jobTitle:"المدير التنفيذي للأداء والأعمال",
               //           //      email:"Iyadh.Borgi@zain.com"
               //           // },
               //           // {
               //           //      id: 97,
               //           //      name:"مي المطير",
               //           //      image:"Mai Al Mutair Zain Group.jpg",
               //           //      opco:"مجموعة",
               //           //      detail:'<p>في مجموعة زين،  إذ تقوم بإدارة محفظة الديون الإجمالية، بالإضافة إلى تعزيز حوكمة الخزانة في جميع عمليات زين، وقد ساعد نهجها في الاتصالات وتكامل الأنظمة في تشكيل التحول، حيث تعمل القسم اليوم كأمين صندوق استراتيجي رئيسي وليس أمين صندوق تقليدي</p>',
               //           //      jobTitle:"تشغل حاليًا منصب المدير التنفيذي للخزينة والاستثمارات",
               //           //      email:"Mai.Almutair@zain.com"
               //           // },
                         
               //      ]
               // },
               {
                    id:0,
                    country:"kuwait",
                    countryName:"الكويت",
                    member:[
                         {
                              id: 101,
                              image:"Maysam Al Duaij.jpg",
                              name:"ميسم الدعيج  ",
                              opco:"الكويت",
                              jobTitle:"خبير التحليل الفني للأعمال",
                              detail:"ميسم الدعيج هي خبيرة رائدة في صناعة وخدمات الاتصالات. وهي حاليا عضو في فريق التحليل الفني للأعمال التي تلعب دورا مهما كواجهة بين الفرق التجارية والمالية والفنية. ميسم حاصلة على شهادة المشارك في إدارة المشاريع من كلية إدارة الأعمال في جامعة جورج واشنطن وأكملت برنامج تطوير القيادة المكثف الذي قدمته جامعة كورنيل في نيويورك بالولايات المتحدة الأمريكية.",
                              // email:"Abeer.Alghais@zain.com"
                         },
                         {
                              id: 99,
                              name:"دانا عبدال",
                              image:"Dana Abdal.jpg",
                              opco:"الكويت",
                              jobTitle:"أخصائية تطبيقات الرعاية",
                              detail:"<p>دانا عبدال هي أخصائية تطبيقات الرعاية في زين الكويت. لقد عملت مع قسم تقنية المعلومات في زين الكويت لأكثر من 10 سنوات وعملت في مشاريع تكنولوجيا المعلومات المتنوعة التي عززت تطوير معرفتها وخبرتها في هذا المجال اليوم. ومن العبارات التي تلهمها 'لا تنظر للأسفل أبدا، إلا إذا كنت تساعد شخصا ما للصعو“. تستمتع دانا أيضا بالعزف على البيانو وكانت أول من أدخل فن إعادة الزخرفة في المنطقة العربية.</p>",
                              email:"Dana.Abdal@kw.Zain.com"
                         },
                          {
                              id: 102,
                              image:"Nadia Al Saif.jpg",
                              name:"نادية السيف   ",
                              opco:"الكويت",
                              jobTitle:"أخصائي إدارة تطبيقات الرعاية",
                              detail:"نادية السيف مهندسة كمبيوتر تخرجت من جامعة الكويت. مع 25 عاما من الخبرة في العمل في مختلف المستويات الفنية والتجارية في زين. ومنصبها الحالي هو مدير المخابرات في زين الكويت، حيث تتولى قيادة فرق الرؤية/ التحليل التجاري وإدارة البيانات وهندسة المعلومات. نادية ذات قوة جبارة في مكان عملها وتستخدم موقفها الإيجابي وطاقتها التي لا تعرف الكلل لتشجيع الآخرين على العمل الجاد والنجاح. وتستمتع نادية باستخدام مهاراتها للمساهمة في التطورات التكنولوجية المثيرة التي تحدث كل يوم في زين. نادية مستوحاة يوميا من فريقها الرائع.",
                              // email:"Abeer.Alghais@zain.com"
                         },
                         {
                              id: 200,
                              name:"محمد المرشد",
                              image:"Mohammed Al-Murshed Zain Group.jpg",
                              opco:"مجموعة",
                              detail:"<p>يتمتع محمد بخبرة تتجاوز العقدين في قطاع صناعة الاتصالات، لديه مجموعة واسعة من الخبرات في قطاع الشبكات، تكنولوجيا المعلومات، التحول الرقمي، البيع بالجملة، والتدريب والتوجيه، ساهم المرشد في العديد من المشاريع في أسواق الشرق الأوسط وأفريقيا، فهو لديه خبرات واسعة في التعامل مع أنواع مختلفة من المشاريع والتكنولوجيا والثقافات والأشخاص، تتمثل رؤيته في المشاركة والمساهمة في بناء إرث للشباب المحلي وتحفيز الأفراد على تحقيق أحلامهم.</p>",
                              jobTitle:"مدير الشبكات",
                              email:"Mohammed.Almurshed@zain.com"
                         },
                         {
                              id: 201,
                              name:"محمد الطروانة",
                              image:"Mohd Tarawneh Zain Group.jpg",
                              opco:"مجموعة",
                              detail:'<p>في مجموعة زين، حيث يشرف على التقنيات التي توفر الاتصال والترابط بما في ذلك التقنيات السلكية واللاسلكية، تعلم الطروانة في مسيرته المهنية أن "النجاح يتطلب تخطيطا جيدا وتصميما واضحا منذ البداية"، وخارج العمل، فهو يحب قضاء الوقت مع أسرته الكبيرة أو الخروج مع زوجته وأطفالهما الثلاثة، إذ يعيش معهم حاليا في دولة الكويت.</p>',
                              jobTitle:" مدير بث الشبكات",
                              email:"mohammad.altarawneh@zain.com"
                         }
                    ]
               },
               {
                    id:1,
                    country:"jordan",
                    countryName:"الاردن",
                    member:[
                         {
                              id: 94,
                              name:"هبة عفانة",
                              image:"Hiba Afaneh Zain Jordan.jpg",
                              opco:"الأردن",
                              detail:"<p>انضمت إلى شركة زين الأردن في العام 2002 ، ودخلت مجال أمن المعلومات كمسؤول أمني، ومنذ ذلك الحين، ساعدت هبة في إنشاء وظيفة أمن المعلومات في شركة زين الأردن، تكونت لديها خبرات على مدار الـ 18 عاما، حيث شملت المزيد من الوظائف الحيوية التي تغطي الأمن السيبراني وإدارة مخاطر المؤسسات. </p><br/><p>طورت عفانة برنامج ريادة الأعمال الذي يستهدف الشباب، وقدمت العديد من الدورات التدريبية في مجال ريادة الأعمال للطلاب لتعريفهم بمهارات ريادة الأعمال، وطريقة التفكير من خلال ممارسات تفاعلية وأنشطة ممتعة.</p>",
                              jobTitle:"إدارة مخاطر المؤسسة والتدقيق الداخلي",
                              email:"Hiba.Afaneh@jo.zain.com"
                         },
                         {
                              id: 92,
                              name:"فادي أبو شرخ",
                              image:"Fadi Abu Sharkh Zain Jordan.jpg",
                              opco:"الأردن",
                              detail:"<p>يتمتع بخبرة تزيد عن 20 عاما، يعتقد فادي أن الأشياء الصغيرة لها تأثير كبير، كما أنها تدفعنا لترك إرث من الإنجاز، تشمل مهاراته إدارة المشاريع والبحث والتطوير، في أوقات فراغه يحب القراءة وركوب الدراجات والسفر.</p>",
                              jobTitle:"هو مدير قطاع الصوتيات بنظام الدفع الآجل",
                              email:"Fadi.AbuSharkh@jo.zain.com"
                         },
                         {
                              id: 91,
                              name:"زينة وهران",
                              image:"Zina Oran Zain Jordan.jpg",
                              opco:"الأردن",
                              detail:"<p>تخرجت بدرجة البكالوريوس في الهندسة الصناعية، وأثناء عملها في وزارة الاتصالات وتكنولوجيا المعلومات في الأردن، أدارت زينة برنامج تدريب داخلي للخريجين الجدد في مجالات تكنولوجيا المعلومات والاتصالات. </p><br/><p>منذ انضمامها إلى زين في العام 2006، عملت في مجال التميز في الأعمال والتدقيق الداخلي وإدارة المخاطر، وتشغل الآن منصب رئيس قسم الحوكمة والمخاطر والامتثال (GRC)، تكمن نقاط قوة زينة في قيادة الفِرق ومساعدتها على تحقيق كامل إمكاناتها، بالإضافة إلى قدرتها على التكيف والمرونة في الظروف المتغيرة، على المستوى الشخصي، فهي أم لثلاثة أولاد رائعين، وتهوى القراءة والسفر وتعلم الأشياء الجديدة.</p>",
                              jobTitle:"إدارة مخاطر المؤسسة والتدقيق الداخلي",
                              email:"Zina.AlOran@Jo.Zain.com"
                         },
                         {
                              id: 90,
                              name:"تمارا سعيد ",
                              image:"unnamed.jpg",
                              opco:"jordan",
                              detail:"",
                              jobTitle:"تحليلات الأعمال والذكاء الاصطناعي",
                              email:"tamara.albsoul@jo.zain.com"
                         },
                         {
                              id: 89,
                              name:"داليا شاخشير",
                              image:"Dalia Shakhshir Zain Jordan.jpg",
                              opco:"الأردن",
                              detail:"<p>يُعرف غنها الحماس والتفاني في قطاع الاتصالات مع مسيرة ممتدة من الجودة وتطوير تكنولوجيا المعلومات في تحليل الأعمال تزيد عن 16 عاما.</p><br/><p>تُبدع داليا في حل المشاكلات حيث تركز على التفاصيل مع مهاراتها التحليلية والاستدلالية المتقدمة، تتخذ داليا من الصدق وحسن الأخلاق قيمتان رئيسيتان، إذ  تؤمن بهما بشدة في حياتها، وأكثر ما تهواه هو قضاء وقت ممتع مع أطفالها الثلاثة بالإضافة إلى المشي وصنع الحلوى المنزلية.</p>",
                              jobTitle:"هي قائدة فريق تطوير المنتجات",
                              email:"Dalia.Shakhsheir@jo.zain.com"
                         },
                         {
                              id: 88,
                              name:"لمى الرهونجي",
                              image:"Lama Rahwanji Zain Jordan.jpg",
                              opco:"الأردن",
                              detail:"<p>لديها 24 عاما من الخبرات العملية في شركة زين الأردن، كما أنها تتمتع بمهارات فنية وشخصية قوية مثل التواصل، التفكير النقدي، حل المشكلات، القيادة، التدريب، التفاوض، المهارات التنظيمية، وإدارة الوقت، هدفها أن تكون سيدة أعمال ناجحة، وأن تقدم ما ينفع المجتمع، مما شجعها على البقاء منفتحة على أي فرص جديدة، وهي خارج بيئة العمل، تهوى الرسم والتصميم الداخلي.</p>",
                              jobTitle:"تحتل منصب المدير التنظيمي",
                              email:"lama.AlRahwanji@Jo.Zain.com"
                         },
                         {
                              id: 87,
                              name:"ميس كايد",
                              image:"Mais Kayed Zain Jordan.jpg",
                              opco:"الأردن",
                              detail:'<p>في شركة زين الأردن تمتع بخبرة تزيد عن 15 عاما في صناعة الاتصالات، تؤمن بشدة بأن هذا الجيل يمكنه صنع المعجزات، ومع ذلك فإنها تساعد الموظفين المتمرسين على إطلاق العنان لإمكاناتهم، تعتبر ميس سفيرة لموجة التغيير النسائية (FWOC) حيث تشارك في برنامج "إنجاز" وهو منظمة غير حكومية تهتم بتطوير مهارات الشباب.</p>',
                              jobTitle:"هي مديرة تجربة العملاء",
                              email:"Mais.Kayed@jo.zain.com"
                         }
                    ]
               },
               {
                    id:2,
                    country:"ksa",
                    countryName:"المملكة العربية السعودية",
                    member:[
                         {
                              id: 87,
                              name:"غادة متعب",
                              image:"unnamed.jpg",
                              opco:"السعودية",
                              detail:"<p>تتمتع بخبرة تزيد عن 10 سنوات، فهي تشغل حاليا منصب مدير إدارة وتخطيط القوى العاملة حيث أنها حاصلة على درجة البكالوريوس في تكنولوجيا المعلومات، وتعتبر غادة من الشخصيات المحفزة التي تسعى لإحداث فرق في الحياة.</p>",
                              jobTitle:"مدير إدارة وتخطيط القوى العاملة",
                              email:"Ghadah.Almutairi@sa.zain.com"
                         },
                         {
                              id: 86,
                              name:"علي صالح السلام",
                              image:"Ali Al Salam Zain KSA.jpg",
                              opco:"السعودية",
                              detail:"<p>في شركة زين السعودية، انضم لأول مرة في العام 2007 بعد تخرجه بدرجة بكالوريوس العلوم في المحاسبة من جامعة الملك فهد للبترول والمعادن. </p>",
                              jobTitle:"مدير أول الفواتير وقبول الأصول الثابتة",
                              email:"ali.alsalam@sa.zain.com"
                         },
                         {
                              id: 85,
                              name:"بثينة محروس",
                              image:"Bouthina Mahroos Zain KSA.jpg",
                              opco:"السعودية",
                              detail:'<p>تتمتع بخبرة 13 عاما في قطاع الموارد البشرية، عملت في صناعات مختلفة بما في ذلك السلع الاستهلاكية والسيارات والخدمات المالية والاتصالات، وتسعى جاهدة للاستمتاع بالرحلة، وخلق توازن بين عملها وحياتها الشخصية، فهي ترفع شعار في الحياة "اعمل بجد بحيث لا تضطر يوما إلى تعريف نفسك".</p>',
                              jobTitle:"القائم بأعمال مدير الرواتب",
                              email:"Bouthina.Mahroos@sa.zain.com"
                         },
                         {
                              id: 84,
                              name:"ريان فواز جان",
                              image:"Rayan Jan Zain KSA.jpg",
                              opco:"السعودية",
                              detail:"<p>يتمتع بخبرة تزيد عن 14 عاما في مجال إدارة رأس المال البشري (HCM) وإدارة سلسلة التوريدات (SCM) والاستشارات المالية وتنفيذ جناح أوراكل المحاسبي، ويعتقد ريان أن الحياة ليست مشكلة يجب حلها ولكنها واقع يجب تجربته.</p>",
                              jobTitle:"مدير أول تطبيقات تخطيط موارد المؤسسات",
                              email:"Rayan.Jan@sa.zain.com"
                         },
                         {
                              id: 83,
                              name:"مريم الحباب",
                              image:"Maryam Abdullatif Alhabab Zain KSA.jpeg",
                              opco:"السعودية",
                              detail:"<p>تتمتع بخبرات كبيرة تصل إلى 10 سنوات في الإدارة المالية في زين السعودية، قبل انتشار فيروس كوفيد 19، كانت لديها الفرصة لفتح أعمالها التجارية الخاصة، فهي شغوفة وطموحة ومتفائلة، ولديها مهارات وقدرات قيادية، وشعارها في الحياة: لا تجعل الابتسامة تفارقك أبدا، بغض النظر عما تخفيه وراء تلك الابتسامة، وعامل الناس بالطريقة التي تريدهم أن يعاملوك بها.</p>",
                              jobTitle:"مدير الميزانية والرقابة",
                              email:"Maryam.Alhabab@sa.zain.com"
                         },
                    ]
               },
               {
                    id:3,
                    country:"iraq",
                    countryName:"العراق",
                    member:[
                         {
                              id: 82,
                              name:"حيدر عايد",
                              image:"Haider-Aied-Ali-Alkarway-Zain-Iraq.png",
                              opco:"العراق",
                              detail:"<p>منذ العام 2017 ، يتمتع بأكثر من 15 عاما من الخبرة في شركة زين العراق، كما أنه مسؤول عن التواصل مع الإدارات المختلفة لدعم إنشاء التقارير، يهوى حيدر الصيد والتخييم.</p>",
                              jobTitle:"هو رئيس وحدة التقارير المؤسسية ",
                              email:"Haider.Aied@iq.zain.com"
                         },
                         {
                              id: 81,
                              name:"رشا عدي",
                              image:"Rasha Uday Zain Iraq.jpg",
                              opco:"العراق",
                              detail:"<p>هي مهندسة إلكترونيات واتصالات ورئيسة قسم تجربة العملاء، تتمتع بخبرة 15 عاما في شركة زين، تفخر رشا بأن لديها خبرة ومعرفة حقيقية في ثلاثة مجالات مهمة تمكنت من تطويرها خلال رحلتها داخل زين، حيث بدأت من الموارد البشرية إلى المبيعات.</p><br/><p>على الرغم من تخصصها في الهندسة إلا أنها وجدت نفسها تعمل في الأعمال التجارية، تخطط حاليا للحصول على ماجستير في إدارة الأعمال في مجال تجربة العملاء، وخارج العمل، تهوى رشا القراءة والغوص كلما سنحت الفرصة.</p>",
                              jobTitle:"رئيس قسم تجربة العملاء",
                              email:"rasha.uday@iq.zain.com"
                         },
                         {
                              id: 80,
                              name:"كريم رحيمة",
                              image:"Karim Rahimah Hussein Zain Iraq.jpg",
                              opco:"العراق",
                              detail:"<p>هو مسؤول عن إنشاء مواقع  الشبكة ( GSM) والراديو و ( TRM )، ونشر معدات الشبكات الأساسية وشبكات الألياف ونشر وتشغيل الألياف البصرية المنزلية ( FTTH ) والحلول التقنية. </p><br/><p>تتمثل أهداف كريم في الحفاظ على علاقات صحية مع العائلة والأصدقاء وأسلوب حياة فعال، كما يتمثل هدفه المهني في ضمان استمراره في تطوير معلوماته ومعرفته في القطاع التكنولوجي، يهوى كريم تنس الطاولة وكرة القدم وألعاب الفيديو والسفر والسباحة ومشاهدة الأفلام.</p>",
                              jobTitle:"هو رئيس قسم النشر ومتخصص في الهندسة الكهربائي",
                              email:"Karim.Rahimah@iq.zain.com"
                         },
                         {
                              id: 79,
                              name:"صهيب الدين",
                              image:"Suhaib Wamidh Dhyaa Eldeen Al Naftaji  Zain Iraq.jpg",
                              opco:"العراق",
                              detail:"<p>يتمتع بخبرة 17 عاما في مجال الاتصالات، وقد تخصص صهيب في هندسة الكمبيوتر، حيث يتولى مسؤولية إدارة وتنفيذ مشاريع الاتصالات، يُعرف عن صهيب أنه طموح وواثق من نفسه، فهو يعمل بجد ويحاول دائما دعم الآخرين، كما يهوى السباحة ولعب كرة القدم وألعاب الفيديو.</p>",
                              jobTitle:"هو رئيس عمليات تنفيذ الشبكة الأساسية",
                              email:"Suhaib.Eldeen@iq.zain.com"
                         },
                         {
                              id: 78,
                              name:"عمار طاهر",
                              image:"Ammar-Mohamed-Taher-Al-Shaikly-Zain-Iraq.png",
                              opco:"العراق",
                              detail:"<p>في شركة زين العراق، يتمتع بخبرة أكثر من 15 عاما في قطاع الاتصالات، تخصص عمار في أبعاد الشبكة الأساسية وتخطيط السعة، كما أنه حاصل على درجة الماجستير في هندسة الاتصالات، يتطلع عمار إلى أن يكون محلل بيانات حيث يعمل على اكتساب المزيد من الخبرة في الجيل الخامس والحوسبة السحابية، تشمل اهتمامات عمار القراءة ومشاهدة كرة القدم والأفلام.</p>",
                              jobTitle:"هو رئيس قسم التخطيط والتحسين الأساسي ",
                              email:"Ammar.Mohamed@iq.zain.com"
                         }
                    ]
               },
               {
                    id:4,
                    country:"bahrain",
                    countryName:"البحرين",
                    member:[
                         {
                              id: 95,
                              name:"عبد الله محمد آل بن علي",
                              image:"Abdulla AlBinAli.jpg",
                              opco:"البحرين",
                              detail:"<p>في شركة زين البحرين، وهو مسؤول عن تخطيط شبكة الراديو، ونشر المواقع الجديد وتوسعات شبكة الراديو، وقيادة مشروع تصحيح الموقع مع هيئة تنظيم الاتصالات، حقق العديد من قصص النجاح في زين البحرين، حيث كان مسؤولا عن إطلاق شبكة الجيل الرابع، وإطلاق شبكة الجيل الخامس، وإنترنت الأشياء ( NB-IoT) كما أن عبد الله شغوف بالبحث عن تقنيات وأساليب جديدة لتعزيز تجربة العميل، والمستخدم النهائي، ويهوى ممارسة ألعاب الفيديو، القراءة، ممارسة الرياضة، ومشاهدة الأفلام.</p>",
                              jobTitle:"مسؤول تخطيط شبكة الراديو",
                              email:""
                         },
                         {
                              id: 94,
                              name:"علي عطية",
                              image:"ali atiah .jpg",
                              opco:"البحرين",
                              detail:"<p>مدير البنية التحتية وخدمة القيمة المضافة والخدمات الأساسية. ويتمتع علي بخبرة 16 عامًا في مجال الاتصالات.</p>",
                              jobTitle:"مدير البنية التحتية وخدمة القيمة المضافة والخدمات الأساسية",
                              email:""
                         },
                         {
                              id: 93,
                              name:"مبارك إبراهيم ",
                              image:"Mubarak Nass.jpg",
                              opco:"البحرين",
                              detail:"<p>هو متخصص في البنية التحتية والأساسية في شركة زين البحرين، وهو مسؤول عن عمليات نشر علوم الحاسب والبنية التحتية الأساسية ومكتب مساعدة تكنولوجي وتخطيط موارد المؤسسات، ينعم مبارك بكونه جزءًا من العديد من قصص النجاح في زين البحرين مثل إطلاق شبكة الجيل الرابع وإطلاق شبكة الجيل الخامس، وآخرها تمكين وإطلاق Apple iWatch. إن مبارك شغوف بالبحث عن تقنيات وأساليب جديدة لتعزيز تجربة العميل والمستخدم النهائي. ويهوى لعب ألعاب الفيديو وقراءة ومشاهدة الأفلام.</p>",
                              jobTitle:"مسؤول عن عمليات نشر علوم الحاسب والبنية التحتية الأساسية",
                              email:""
                         }
                    ]
               },
               {
                    id:5,
                    country:"sudan",
                    countryName:"السودان",
                    member:[
                         {
                              id: 96,
                              name:"محمد خالد عمران ",
                              image:"Abueissa.jpg",
                              opco:"السودان",
                              detail:"<p>يمتلك أكثر من 10 سنوات من الخبرة في مجال تكنولوجيا المعلومات والاتصالات وإدارة المشاريع وإدارة العمليات التجارية مع التركيز بشكل كبير على مبادرات التحول لخدمات الاتصالات / CSI.</p>",
                              jobTitle:"تكنولوجيا المعلومات والاتصالات",
                              email:""
                         },
                         {
                              id: 97,
                              name:"عبد الناصر معتصم البشير علي  ",
                              image:"Abdelnasir Moutasim.jpg",
                              opco:"السودان",
                              detail:"<p> عبد الناصر معتصم البشير علي هو مدير تطوير تكنولوجيا المعلومات ولديه 13 عاما من الخبرة في مجال تكنولوجيا المعلومات والاتصالات وتخصص في مجالات تكنولوجيا المعلومات المختلفة في صناعة الاتصالات. تخرج بدرجة البكالوريوس في علوم الكمبيوتر وماجيستير في تكنولوجيا المعلومات وماجستير الاتصالات وماجستير إدارة الأعمال. ويعتبر عبد الناصر طاقة محفزة في مكان العمل ويستخدم موقفه الإيجابي وطاقته الدؤوبة لتشجيع الآخرين على العمل الجاد والنجاح. علاوة على ذلك، فهو يستمتع باستخدام مهاراته للمساهمة في التطورات التكنولوجية المثيرة التي تحدث كل يوم.</p>",
                              jobTitle:"مدير تطويرتكنولوجيا المعلومات",
                              email:""
                         },
                         {
                              id: 99,
                              name:"غيداء عبد القادر سيرلكاتم ",
                              image:"Ghaidaa.jpg",
                              opco:"sudan",
                              detail:"<p> خبرة تزيد عن 15 عاما وتتمتع بكفاءة عالية في الإستراتيجية وتخطيط الأعمال، ولديها خبرة في إعداد الميزانيات وتوقع ومراقبة الأداء. بالإضافة إلى ذلك، فهي خبيرة في التحليل المالي لقوائم الدخل والمراجعة المالية</p>",
                              jobTitle:"الإستراتيجية وتخطيط الأعمال",
                              email:""
                         },
                         {
                              id: 100,
                              name:"عمر كمال علي مختار  ",
                              image:"omer-kamal.jpg",
                              opco:"sudan",
                              detail:"<p>هو متخصص في إدارة الاتصالات ولديه أكثر من 17 عاما من الخبرة في التسويق والتكنولوجيا وإدارة المشاريع وإدارة تجربة العملاء. ويتمتع بخبرة في تنفيذ الاستراتيجيات التي تعزز باستمرار أهداف الأعمال والتشغيل.</p><br><p>خبرة تزيد عن 15 عاما وتتمتع بكفاءة عالية في الإستراتيجية وتخطيط غيداء عبد القادر سرالختم تمتلك غيداء عبد القادر سرالختم خبرة تزيد عن 15 عاما وتتمتع بكفاءة عالية في الإستراتيجية وتخطيط الأعمال، ولديها خبرة في إعداد الميزانيات وتوقع ومراقبة الأداء. بالإضافة إلى ذلك، فهي خبيرة في التحليل المالي لقوائم الدخل والمراجعة المالية</p>",
                              jobTitle:"قطاعات التسويق - مدير",
                              email:""
                         }
                    ]
               },
               {
                    id:6,
                    country:"south-sudan",
                    countryName:"جنوب السودان",
                    member:[
                         {
                              id: 103,
                              name:"شيكيجوك لوال جون  ",
                              image:"Chikijwok.jpeg",
                              opco:"جنوب السودان",
                              detail:"<p> شيكيجوك لوال جون هي متخصص في التجوال والربط البيني في زين جنوب السودان. قبل ذلك انضمت شيكيجوك إلى زين في عام 2019 كأخصائية تطوير التسويق حيث اكتسبت خبرة مع فريق رائع. إنها تؤمن بأنه لكي يتعلم الناس، يجب أن يمروا بجميع التقلبات حتى يسهل عليهم مسارهم، وهذه هي الطريقة التي ينمون بها.</p>",
                              jobTitle:"متخصص في التجوال والربط البيني",
                              email:""
                         },
                              {
                              id: 104,
                              name:"دانيل لورو  ",
                              image:"Daniel.jpeg",
                              opco:"جنوب السودان",
                              detail:"<p> دانيل لورو هو رئيس فريق التخطيط والتنفيذ في زين جنوب السودان. كان العمل في زين امتيازا لتمكينه وتطوير مهاراته الفنية حيث تمكن من الحصول على العديد من الشهادات الدولية.</p>",
                              jobTitle:"رئيس فريق التخطيط والتنفيذ",
                              email:""
                         },
                         {
                              id: 105,
                              name:"إليزا أيزيا   ",
                              image:"Eliza.jpg",
                              opco:"جنوب السودان",
                              detail:"<p> إليزا أيزيا هي مديرة العلامات التجارية والاتصالات في زين جنوب السودان.</p>",
                              jobTitle:" مديرة العلامات التجارية والاتصالات",
                              email:""
                         },
                              {
                              id: 106,
                              name:"جودنسيو مودي   ",
                              image:"Gaudensio.jpeg",
                              opco:"جنوب السودان",
                              detail:"<p>جودنسيو مودي يعمل حاليا كقائد لفريق عمليات الإرسال والإذاعة. حصل على درجة البكالوريوس في الهندسة الإلكترونية والاتصالات. دفعه حبه للتكنولوجيا والابتكار إلى مواصلة تعليمه بدرجة الماجستير في الهندسة الكهربائية. ويعتقد جودنسيو أن تصميمه وعمله الجاد وتفانيه أكسبته منصبه في زين.</p>",
                              jobTitle:"قائد فريق عمليات الإرسال والإذاعة",
                              email:""
                         },
                              {
                              id: 107,
                              name:"روينينا ماغايا   ",
                              image:"Roynina.jpeg",
                              opco:"Sجنوب السودان",
                              detail:"<p> روينينا ماغايا هي مديرة تطبيقات BSS في زين جنوب السودان. هي مهندسة كمبيوتر بارعة وتتمتع باستخدام مهاراتها للمساهمة في التقدم التكنولوجي ودعمه. صعدت روينينا السلم واكتسبت الخبرة لتكون حيث هي اليوم.</p>",
                              jobTitle:"مديرة تطبيقات BSS",
                              email:""
                         }
                    ]
               }
               ]
                    }
               }
              
          }
     } ,
     created(){
        this.$i18n.locale=="en" ? 
        this.data = this.data.en :
        this.data = this.data.ar;
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
          isActive(index) {
               return this.tabIndex == index;
          },
          isEmpty(obj) {
               for(var key in obj) {
                    if(obj.hasOwnProperty(key))
                         return false;
               }
                    return true;
               }
          } 
    }
</script>

<style lang="scss" scoped>
.meetMentorsMain {
    margin: rem(45px) 0 rem(0px);
    position: relative;
    /deep/{
         .scrollArea{
              --h:100px;
          }
    }
    &__title {
     //    font-size: rem(24px);
    }
    &__slide {
        &--head {
            margin-top: rem(30px);
            margin-bottom: rem(30px);
          //   padding: 0px rem(30px);
            position: relative;
            border-bottom: 1px solid #a3a3a3;
            @media screen and (max-width:1199px){
                 margin:rem(30px) rem(45px);
            }
            /deep/ {
                 .swiper-wrapper {
                      @include flex(center ,space-between);
                      flex-wrap: nowrap;
                 }
                .sliderNavigation {
                    height: 100%;
                    z-index: 0;
                    @media screen and (min-width: 1200px) {
                        display: none;
                    }
                    @media screen and (max-width:1200px){
                            // width: 95%;
                            margin-left: auto;
                            margin-right: auto;
                    }
                   
                    &__controls {
                        #nextArrow {
                            right: -40px;
                        }
                        #prevArrow {
                            left: -40px;
                        }
                        svg{
                             color:var(--primary);
                             border-color:var(--primary);
                        }
                    }
                }
            }
        }
        &--link {
          padding: rem(12px) rem(2px);
            a {
               padding: 8px 2px;
               font-size: rem(16px);
               color: #585758;
               text-transform: uppercase;
               outline: 3px dashed transparent;
               outline-offset: -2px!important;
               font-weight: bold;
               text-align: center;
               display: flex;
               justify-content: center;
               align-items:center;
               // display: inline-block;
               &.active {
               color: var(--primary);
               &:hover {
                    color: var(--primary);
               }
               }
               &:hover {
               color: #585758;
               }
               &:focus {
               outline: 3px dashed var(--highlight);
               }
               .icon {
               max-width: 30px;
               display: inline-block;
               margin-right: rem(8px);
               }
          }
        }
    }
    &__content {
        
    }
    &__detail{
         &--item{
              @media screen and (max-width:667px) {
                   flex: 0 0 50%;
                   max-width: 50%;
              }
               @media screen and (max-width:575px) {
                    padding: 0px 10px;
                    margin-bottom: 20px !important;
               }
                @media screen and (max-width:450px) {
                    flex: 0 0 100%;
                   max-width: 90%;
                   padding: 0 15px;
               }
         }
         .row{
              @media screen and (max-width:767px) {
                   justify-content: center;
              }
         }
    }
    
}
[lang='ar']{
     .meetMentorsMain {

          &__slide {
               &--head {
                    /deep/ {
                         .sliderNavigation {
                         
                              &__controls {
                                   #nextArrow {
                                        left: -40px;
                                        right:auto;
                                   }
                                   #prevArrow {
                                        right: -40px;
                                        left:auto;
                                   }
                              }
                         }
                    }
               }
               &--link {
                    a {
                         .icon {
                              margin-left: rem(8px);
                              margin-right:0;
                         }
                    }
               }
          }
     }
}
</style>