<template>
    <div class="searchInterests">
        <ul class="searchInterests__list">
            <li v-for="(result,i) in resultData" :key="i" class="searchInterests__list--result">
                <a href="">{{result}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
     data(){
          return{
               resultData:[
                    "Lorem, ipsum",
                    "Lorem, ipsum",
                    "Lorem, ipsum",
                    "Lorem, ipsum",
                    "Lorem, ipsum"
               ]
          }
     }
}
</script>

<style lang="scss" scoped>
.searchInterests {
    &__list {
        @media screen and (max-width: 991px) {
                text-align: center;
            }
        &--result {
            display: inline-block;
            margin-bottom: rem(18px);
            
            a {
                padding: 14px;
                background: #f2f2f2;
                color: #404040;
                display: inline-block;
                position: relative;
                transition: 0.3s ease all;
                font-weight: bold;
                outline: none;
                outline: none;
                &::before {
                    content: '';
                    position: absolute;
                    width: 115%;
                    height: 140%;
                    border: 2px solid transparent;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                &:focus {
                    font-weight: 800;
                    color: var(--secondary);
                    outline: none;
                    &::before {
                        border: 2px dashed var(--primary);
                    }
                }
                &:hover {
                    color: var(--secondary);
                    font-weight: 800;
                }
            }
            &:not(:last-child) {
                margin-right: rem(18px);
            }
        }
    }
}
[lang='ar']{
    .searchInterests {
        &__list {
            &--result {
                &:not(:last-child) {
                    margin-left: rem(18px);
                    margin-right:0;
                }
            }
        }
    }
}
</style>
