<template>
    <div class="baseSearchlist__item">
     <videoModal @closeVideoModal="closeModal" :is-show="showModal" :video-url="videoUrlSet"></videoModal>
        <div class="baseSearchlist__section">
            <h2>
                <a href="" class="baseSearchlist__section--title"> Our Imapct </a>
            </h2>
            <a href="" class="baseSearchlist__section--subtitle">
                <span class="icon">
                    <img src="@/assets/images/search/icons/video-gallery.png" class="img-fluid" alt="">
                </span>
                Testimonials
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
                            id="name3"
                        >
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                        </router-link>
                    </h3>
                    <div class="baseSearchlist__card--description">
                        <p></p>
                    </div>
                    <button
                        class="baseSearchlist__card--button btn btn-primary"
                        aria-describedby="name3"
                    >
                        read more
                    </button>
                </div>
                <div class="col-md-5">
                    <div class="baseSearchlist__card--media">
                        <div class="mediaVideo">
                            <a href="#" @click.prevent="openModal(true,'https://www.youtube.com/embed/w8K8aj3K1OQ')">
                                <span class="icon">
                                    <svg-icon
                                        iconId="slider-play"
                                        icon-viewbox="0 0 163.861 163.861"
                                    ></svg-icon>
                                </span>
                                <div class="mediaVideo__thumbnail">
                                    <img
                                        src="@/assets/images/search/videoThumb2.png"
                                        alt=""
                                        class="img-fluid"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>


