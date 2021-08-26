<template>
    <div class="search contentWrapper" role="search">
        <div class="container">
            <div class="siteSearch">
                <h2 class="search__title">search</h2>
                <div class="search__head"> 
                    <search-field></search-field>
                    <!--<search-interests></search-interests>-->
                </div>
                <search-list></search-list>
            </div>
        </div>
    </div>
</template>

<script>
import SearchField from '@/modules/search/SearchField.vue'
import SearchInterests from '@/modules/search/SearchInterests.vue'
// import SearchFilter from "@/common/components/base/search/SearchFilter.vue";
// import SiteMapSections from "@/common/components/base/search/SiteMapSections.vue";
import SearchList from '@/modules/search/SearchList.vue'
export default {
    data() {
        return {
            sliderOption: {
                slidesPerView: 4,
                spaceBetween: 30,
                centeredSlides: true,
            },
        }
    },
    components: {
        SearchField,
        SearchInterests,
        // SearchFilter,
        // SiteMapSections,
        SearchList,
    },
    methods: {
        tabChange() {},
    },
    created() {
        document.body.classList.add('searchPage')
    },
    destroyed() {
        document.body.classList.remove('searchPage')
    },
    mounted() {},
}
</script>

<style lang="scss" scoped> 

   
    
.search {
    background: #f0f0f0;
    &__title {
        font-size: rem(42px);
        font-weight: 800;
        color: var(--secondary);
        text-transform: uppercase;
        padding-left: rem(50px);
        @media screen and (max-width: 767px) {
            padding-left: rem(0px);
        }
    }
    .siteSearch {
        padding: rem(150px) rem(10px) rem(60px);
        overflow: auto;
        @media screen and (max-width: 767px) {
            padding-top: rem(75px);
        }
    }
    
    &__head {
        width: 100%;
        background: #fff;
        padding: rem(20px) rem(25px) rem(25px) rem(20px);
        margin-top: rem(25px);
        box-shadow: 0 0 9px 0px rgba($color: #000000, $alpha: 0.2);
        @media screen and (max-width: 991px) {
            padding: rem(10px) rem(15px) rem(12px) rem(15px);
        }
    }
}
</style>
