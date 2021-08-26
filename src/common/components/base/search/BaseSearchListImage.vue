<template>
    <div class="baseSearchlist__item">
        <div class="baseSearchlist__section">
            <h2>
                <a href="" class="baseSearchlist__section--title"> about us </a>
            </h2>
            <a href="" class="baseSearchlist__section--subtitle">
                <span class="icon">
                    <img src="@/assets/images/search/icons/ceo-message.png" class="img-fluid" alt="">
                </span>
               Program 
            </a>
        </div>
        <div class="baseSearchlist__card">
            <div class="row align-items-center">
                <div class="col-md-7">
                    <span class="baseSearchlist__card--date">5 MAY - 2020</span>
                    <h3>
                        <router-link
                            class="baseSearchlist__card--title"
                            to="/"
                            id="name"
                        >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </router-link>
                    </h3>
                    <div class="baseSearchlist__card--description">
                        <p>
                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                        </p>
                    </div>
                    <button
                        class="baseSearchlist__card--button btn btn-primary d-md-block d-none"
                        aria-describedby="name"
                    >
                        read more
                    </button>
                </div>
                <div class="col-md-5">
                    <div class="baseSearchlist__card--media">
                        <div class="media-image">
                            <img
                                src="@/assets/images/search/person2.png"
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
export default {
    data() {
        return {}
    },
}
</script>

