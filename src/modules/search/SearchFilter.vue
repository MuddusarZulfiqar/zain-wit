<template>
    <div class="searchFilters">
        <ul class="searchFilters__list">
            <li>
                <label for="Category">Menu</label>
                <vue-select :options="menu_options"  v-model="selected_menu"></vue-select> 
            </li>
            <li>
                <label for="Category">Category</label>
                <vue-select
                    :options="options_category" v-model="selected_catgory" 
                />
            </li>
            <li>
                <label for="s-category">Sub-Category</label>
                <vue-select :options="options_sub" v-model="selected_sub" />
            </li>
        </ul>
    </div>
</template>

<script>
const menu = {
  label: "All",
};
const category = {
  label: "All",
};
const sub_category = {
  label: "All",
};
export default {
    
    data() {
        return {
            
            menu_options: [
                { code: 'all', label: 'All' },
                { code: 'a', label: 'This is First option' },
                { code: 'b', label: 'Selected Option' },
                { code: 'c', label: 'Third Option' },
            ],
            options_category: [
                { code: null, label: 'All' },
                { code: 'a', label: 'This is First option' },
                { code: 'b', label: 'Selected Option' },
                { code: 'c', label: 'Third Option' },
            ],
            options_sub: [
                { code: null, label: 'All'},
                { code: 'a', label: 'This is First option' },
                { code: 'b', label: 'Selected Option' },
                { code: 'c', label: 'Search for Idea' },
            ],
            selected_menu: menu,
            selected_catgory: category,
            selected_sub: sub_category,
        }
    },
}
</script>

<style lang="scss" scoped> 
.searchFilters {
    width: 82%;
    @media screen and (max-width: 991px) {
        width: 100%;
        padding-bottom: rem(0px);
    }
    &__list {
        display: flex;
        list-style-type: none;
        margin-top: rem(40px);
        @media screen and (max-width: 991px) {
            flex-direction: column;
            margin-top: rem(30px);
        }
        li {
            width: calc(100% / 3);
            padding-right: rem(30px);
            position: relative;
            margin-bottom: 0;
            @media screen and (max-width: 991px) {
                width: 100%;
                padding-right: rem(0px);
                padding-bottom: rem(32px);
            }
            &:not(:first-child) {
                padding-left: rem(30px);
                @media screen and (max-width: 991px) {
                    padding-left: rem(0px);
                }
            }
            &:first-child {
                padding-right: rem(30px);
                @media screen and (max-width: 1200px) {
                    padding-right: rem(30px);
                }
                @media screen and (max-width: 991px) {
                    padding-right: rem(0px);
                
                }
            }
            &:last-child {
                @media screen and (max-width: 991px) {
                    padding-bottom: rem(0px);
                
                }
            }
            label {
                font-size: rem(24px);
                color: var(--secondary);
            }
            &:not(:last-child) {
                &::before {
                    content: '';
                    position: absolute;
                    width: 1px;
                    height: 100%;
                    right: 0;
                    background: #bdc6cc;
                    @media screen and (max-width: 991px) {
                        width: 100%;
                        height: 1px;
                        right: 0;
                        left: 0;
                        margin: auto;
                        bottom: 8px;
                    }
                }
            }
        }
    }
}
</style>
