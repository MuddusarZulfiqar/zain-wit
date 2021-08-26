// import 'bootstrap/scss/bootstrap.scss'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import '@/assets/sccs/utility/_variables.scss'
// import BaseVideoModal from '@/common/components/base/BaseVideoModal.vue'
// import BaseCarousel from '@/common/components/base/BaseCarousel.vue'
// import BaseSectionsScroll from '@/common/components/base/BaseSectionsScroll'
// import SvgIcon from '@/common/components/base/BaseSvgIcon.vue'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import vuescroll from 'vuescroll';

// import Vue from "vue";
// import App from "./App.vue";

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)
// Vue.use(vuescroll);

// Vue.component('svg-icon', SvgIcon)
// Vue.component('VideoModal', BaseVideoModal)
// Vue.component('carousel', BaseCarousel)
// Vue.component('section-scroll', BaseSectionsScroll)

// Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
















import App from './App.vue'
import router from './router'
import Vue from 'vue'

import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/sccs/utility/_variables.scss'
import 'vue-select/dist/vue-select.css';
import BaseVideoModal from '@/common/components/base/BaseVideoModal.vue'
import BaseCarousel from '@/common/components/base/BaseCarousel.vue'
import BaseSectionsScroll from '@/common/components/base/BaseSectionsScroll'
import SvgIcon from '@/common/components/base/BaseSvgIcon.vue'
import i18n from '@/common/i18n'
import accessibility from '@/mixin/accessibility.js'
import baseSmoothScrollbar from "@/common/components/base/BaseSmoothScrollbar"
import VueScrollbar from 'vue-scrollbar-live';
// import * as VueScrollbar  from 'vue-scrollbar-live'
// import SmoothScrollbar from 'vue-smooth-scrollbar'

// import store from '@/store'
// import VSelect from '@alfsnd/vue-bootstrap-select'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import VueApexCharts from 'vue-apexcharts'
// import SmoothScrollbar from 'vue-smooth-scrollbar'
// import VueNumber from 'vue-number-animation'

import videoModal from '@/mixin/videoModal.js'
import pages from '@/mixin/pages.js'
import VuePageTransition from 'vue-page-transition'
import "vue-page-transition/dist/vue-page-transition.css";

//import ApiService from '@/common/api_services'
import vSelect from 'vue-select'

import vuescroll from 'vuescroll';

//import '@/common/components/global_components'

//library.add(faUserSecret)
    // Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)
// Vue.use(SmoothScrollbar)


Vue.use(vuescroll);
// Vue.use(Swiper);
// Vue.use(VueApexCharts)
// Vue.use(VueNumber)
Vue.use(VuePageTransition);
Vue.config.productionTip = false
//ApiService.init()
Vue.component('svg-icon', SvgIcon)
Vue.component('VideoModal', BaseVideoModal)
Vue.component('carousel', BaseCarousel)
Vue.component('section-scroll', BaseSectionsScroll)
Vue.component('base-smooth-scrollbar',baseSmoothScrollbar)
Vue.component('vue-select', vSelect)
Vue.component('scrollbar', VueScrollbar);
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.component('apexchart', VueApexCharts)
// Vue.component('VSelect', VSelect)
// Vue.component('vue-select', vSelect)
Vue.mixin(accessibility)
Vue.mixin(videoModal)

Vue.mixin(pages)
router.beforeEach((to, from, next) => {
    let lang = to.params.lang
    if (!lang) {
        i18n.locale = 'en'
        lang = 'en'
        next({
            name: 'Home',
            params: {
                lang: lang,
            },
        })
    } else {
        i18n.locale = lang
        next()
    }
})

const fixIdScrolling = {

};

new Vue({
    router,
    //store,
    i18n,
    render: (h) => h(App),
}).$mount('#app')