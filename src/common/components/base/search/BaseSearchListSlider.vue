<template>
    <div class="baseSearchlist__item">
        <div class="baseSearchlist__section">
            <h2>
                <a href="" class="baseSearchlist__section--title">
                    How to Join?
                </a>
            </h2>
            <a href="" class="baseSearchlist__section--subtitle">
                <span class="icon">
                    <img src="@/assets/images/search/icons/press-releases.png" class="img-fluid" alt="">
                </span>
                Application Requirements
            </a>
        </div>
        <div class="baseSearchlist__card">
            <div class="row align-items-center">
                <div class="col-md-7">
                    <span class="baseSearchlist__card--date">5 MAY - 2020</span>
                    <!-- <h2 class="baseSearchlist__card--title" id="name"></h2> -->
                    <h3>
                        <router-link
                            class="baseSearchlist__card--title"
                            to="/"
                            id="name2"
                        >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </router-link>
                    </h3>
                    <div class="baseSearchlist__card--description">
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                        </p>
                    </div>
                    <button
                        class="baseSearchlist__card--button btn btn-primary d-md-block d-none"
                        aria-describedby="name2"
                    >
                        read more
                    </button>
                </div>
                <div class="col-md-5">
                    <div class="baseSearchlist__card--media slider">
                        <!-- <media-slider
                            :media-slides="slideImages"
                        ></media-slider> -->
                        <div class="media-image">
                            <img
                                src="@/assets/images/search/press-release.png"
                                alt=""
                                class="img-fluid"
                            />
                            <router-link to="#" class="abs-link"></router-link>
                        </div>
                        <div class="text-center d-md-none d-block">
                            <button
                                class="baseSearchlist__card--button btn btn-primary "
                                aria-describedby="name"
                            >
                                read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MediaSlider from '@/common/components/base/BaseMediaSlider.vue'
export default {
    components: { MediaSlider },
    data() {
        return {
            slideImages: [
                {
                    image: 'search/zain_hackathon.png',
                },
                {
                    image: 'search/zain_hackathon.png',
                },
                {
                    image: 'search/zain_hackathon.png',
                },
            ],
        }
    },
}
</script>
