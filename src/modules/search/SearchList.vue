<template>
    <div class="baseSearchlist">
        <base-search-list-image></base-search-list-image>
        <base-search-list-slider></base-search-list-slider>
        <base-search-list-video></base-search-list-video>

        <!-- pagination  -->
        <Pagination v-bind:page-number="10"></Pagination>
    </div>
</template>

<script>
import Pagination from '@/common/components/base/BasePagination.vue'
import BaseSearchListImage from '@/common/components/base/search/BaseSearchListImage.vue'
import BaseSearchListSlider from '@/common/components/base/search/BaseSearchListSlider.vue'
import BaseSearchListVideo from '@/common/components/base/search/BaseSearchListVideo.vue'
export default {
    components: {
        BaseSearchListImage,
        BaseSearchListSlider,
        BaseSearchListVideo,
        Pagination,
    },
}
</script>

<style lang="scss" scoped>
.baseSearchlist {
    padding-top: rem(70px);
}
</style>
