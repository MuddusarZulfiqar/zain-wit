<template>
    <div class="searchInterests">
        <b-tabs content-class="mt-3">
            <b-tab title="Latest interests" active>
                <search-interests-results></search-interests-results>
            </b-tab>
            <b-tab title="Interests most used">
                <search-interests-results></search-interests-results>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
import SearchInterestsResults from './SearchInterestsResults.vue'
export default {
    data() {
        return {}
    },
    components: {
        SearchInterestsResults,
    },
}
</script>

<style lang="scss" scoped>
.searchInterests {
    /deep/ .tabs {
        .nav-tabs {
            margin-top: rem(25px);
            width: max-content;
            position: relative;
            margin-bottom: rem(25px);
            
            li {
                margin: 0;
                padding: 0;
                a {
                    font-size: rem(20px);
                    color: var(--primary);
                    border: none;
                    outline: none;
                    opacity: 0.5;
                    font-weight: bold;
                    text-transform: uppercase;
                    line-height: 1.3;
                    min-height: auto;
                    padding: rem(10px) rem(15px);
                    @media screen and (max-width: 575px) {
                        font-size: rem(16px);
                        padding-left: 15px;
                        padding-right: 15px;
                        outline-offset: -6px;
                    }
                    &:focus {
                        outline-color: var(--primary);
                        outline: dashed;
                    }
                    &.active {
                        opacity: 1;
                    }
                }
                &:not(:last-child) {
                    margin-right: rem(15px);
                    @media screen and (max-width: 575px) {
                        margin-right: rem(0px);
                    }
                }
                &:last-child {
                    margin-left: rem(15px);
                    @media screen and (max-width: 575px) {
                        margin-left: rem(0px);
                    }
                }
                &:not(:last-child){
                    &::before {
                        content: '';
                        position: absolute;
                        width: 2px;
                        height: 15px;
                        background: var(--secondary);
                        top: 50%;
                        left: 45.45%;
                        transform: translateY(-50%);
                    }
                }
                
            }
            @media screen and (max-width:414px){
                width:100%;
                li{
                    width:85%;
                    margin:auto !important;
                    text-align: center;
                    &:not(:last-child){
                        margin:auto auto rem(7px) auto !important;
                        padding-bottom:rem(7px);
                        border-bottom:1px solid var(--secondary);
                        &::before {
                            display: none;
                        }
                    }
                    a{
                        width:100%;
                    }
                }
            }
        }
    }
}

</style>
