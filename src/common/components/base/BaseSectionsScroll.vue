<template>
    <div>
        <div class="pageSections">
            <b-navbar
                v-b-scrollspy="{ offset: 350, method: 'auto' }"
                fixed="top"
                class="bg-faded"
                aria-label="Page Navigation"
            >
                <b-nav pills>
                    <b-nav-item
                        v-for="section in pageSections"
                        :key="section.id"
                        :href="'#' + section.id"
                        ><span>{{ section.title }}</span></b-nav-item
                    >
                </b-nav>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        pageSections: Array,
    },
    created() {
        this.$root.$on('bv::scrollspy::activate', this.onActivate)
    },
    methods: {
        onActivate(target) {
            var theme = document
                .querySelector(target)
                .getAttribute('data-color-theme')
            if (theme) {
                document
                    .querySelector('.pageSections')
                    .setAttribute('data-theme', theme)
            } else {
                document
                    .querySelector('.pageSections')
                    .removeAttribute('data-theme')
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.pageSections {
    --linkcolor: #fff;
    @media screen and (max-width:1200px){
        display: none ;
    }
    .fixed-top {
        z-index: 998;
    }
    .navbar {
        position: fixed;
        top: rem(200px);
        left: rem(30px);
        width: fit-content;
        padding-left: 0;
        .nav {
            display: flex;
            flex-direction: column;
            &-item {
                //border-left: solid 3px #8d8490;
                width: rem(30px);
                padding: 0px;
                @media screen and (max-width: 1800px) {
                    width: rem(20px);
                }
                a {
                    font-size: rem(18px);
                    font-weight: 700;
                    background: none;
                    text-transform: uppercase;
                    height: rem(46px);
                    position: relative;
                    display: inline-block;
                    padding: 0px;
                    padding-left: rem(20px);
                    padding-right: rem(20px);
                    @include flex(center, flex-start);
                    display: inline-flex;
                    color: var(--linkcolor);
                    width: rem(30px);
                    outline: none;

                    // &:before {
                    //     content: '';
                    //     border: 2px solid transparent;
                    //     width: 110%;
                    //     height: 110%;
                    //     top: 50%;
                    //     left: 50%;
                    //     transform: translate(-50% , -50%);
                    //     padding: 5px;
                    // }
                    // &:focus {
                    //     &:before {
                    //         border-color: var(--highlight);
                    //     }
                    // }
                    @media screen and (max-width: 1800px) {
                        width: rem(20px);
                        font-size: rem(16px);
                        padding-left: rem(13px);
                        padding-right: rem(13px);
                    }
                    &:after {
                        position: absolute;
                        content: '';
                        width: 3px;
                        height: 100%;
                        background: #8d8490;
                        left: 0px;
                        top: 0px;
                    }

                    span {
                        opacity: 0;
                        pointer-events: none;
                        white-space: nowrap;
                    }
                    &:focus {
                        span {
                            opacity: 1;
                        }
                    }
                }
                &:not(:last-child) {
                    margin-bottom: 3px;
                }
                // &.active, &:hover{
                //     a{

                //     }
                // }
                &.active {
                    a {
                        background: none;
                        span {
                            opacity: 1;
                            animation: fadeout 2s forwards;
                        }
                        &:after {
                            background: var(--linkcolor);
                        }
                    }
                }
                @media screen and (min-width: 1025px) {
                    &:hover {
                        a {
                            span {
                                opacity: 1 !important;
                            }
                        }
                    }
                }
            }
        }
        @keyframes fadeout {
            0% {
                opacity: 1;
            }
            75% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
        @media screen and (max-width: 1600px) {
            left: 12px;
            // .nav{
            //     &-item{
            //         a{
            //             font-size:rem(16px);
            //         }
            //     }
            // }
        }
    }
    @media screen and (max-width: 991px) {
        display: none !important;
    }
    &[data-theme='dark'] {
        --linkcolor: #000;
    }
}
body.lightbg {
    .pageSections {
        --linkcolor: var(--secondary);
    }
}

// ar style

.ar {
    .pageSections {
        .navbar {
            right: rem(30px);
            left: auto;
            .nav {
                &-item {
                    a {
                        &:after {
                            right: 0px;
                            left: auto;
                        }
                    }
                }
            }

            @media screen and (max-width: 1800px) {
                right: 0;
                left: auto;
            }
        }
    }
}
</style>
