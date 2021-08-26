<template>
  <div>
    <div id="loader-wrapper">
      <div id="loader">
        <img src="@/assets/images/WIT_Banner1.jpg" alt="" />
      </div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1003;
}
#loader {
  display: block;
  position: relative;
  width: 100%;
  margin: auto;
  height: 100%;
  z-index: 1001;
  @include flex(center, center);
}

#loader-wrapper .loader-section {
  position: fixed;
  top: 0;
  width: 51%;
  height: 100%;
  background: #fff;
  z-index: 1000;
}

#loader-wrapper .loader-section.section-left {
  left: 0;
}
#loader-wrapper .loader-section.section-right {
  right: 0;
}
#loader-wrapper img {
  max-width: 100%;
}

/* Loaded styles */
.loaded #loader-wrapper .loader-section.section-left {
  -webkit-transform: translateX(-100%); /* Chrome, Opera 15+, Safari 3.1+ */
  -ms-transform: translateX(-100%); /* IE 9 */
  transform: translateX(-100%); /* Firefox 16+, IE 10+, Opera */

  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */
}
.loaded #loader-wrapper .loader-section.section-right {
  -webkit-transform: translateX(100%); /* Chrome, Opera 15+, Safari 3.1+ */
  -ms-transform: translateX(100%); /* IE 9 */
  transform: translateX(100%); /* Firefox 16+, IE 10+, Opera */

  -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */
  transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */
}
.loaded #loader {
  opacity: 0;

  -webkit-transition: all 0.3s ease-out; /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */
  transition: all 0.3s ease-out; /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */
}
.loaded #loader-wrapper {
  visibility: hidden;

  -webkit-transform: translateY(-100%); /* Chrome, Opera 15+, Safari 3.1+ */
  -ms-transform: translateY(-100%); /* IE 9 */
  transform: translateY(-100%); /* Firefox 16+, IE 10+, Opera */

  -webkit-transition: all 0.3s 1s ease-out; /* Android 2.1+, Chrome 1-25, iOS 3.2-6.1, Safari 3.2-6  */
  transition: all 0.3s 1s ease-out; /* Chrome 26, Firefox 16+, iOS 7+, IE 10+, Opera, Safari 6.1+  */
}
</style>
