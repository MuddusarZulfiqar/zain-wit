<template>
    <div id="app">
        <base-loader></base-loader>
        <the-header />
        <main role="main">
            <router-view />
        </main>
        <the-footer />
    </div>
</template>
<script>
// @ is an alias to /src
import TheFooter from '@/common/layout/TheFooter.vue'
import TheHeader from '@/common/layout/TheHeader.vue'
import BaseLoader from '@/common/components/base/BaseLoader'
export default {
    name: 'App',
    components: {
        TheHeader,
        TheFooter,
        BaseLoader 
    },
    created: function(){
      console.log(this.$i18n.locale);
    if (this.$i18n.locale == 'ar') {
        document.getElementsByTagName('html')[0].lang = 'ar'
        document.getElementsByTagName('html')[0].classList.add('ar')
    }
  }
}
</script>
<style lang="scss"></style>
