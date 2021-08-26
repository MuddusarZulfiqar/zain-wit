<template>
    <div class="contactUs">
        <section id="introduction" data-color-theme="light">
            <banner-slider :banner-slides="bannerSlides"></banner-slider>
        </section>
        <div class="contentWrapper" role="region" aria-label="Contact Us" id="contactUs" data-color-theme="dark">
            <div class="container">
                <contact-us-form section-title="Contact Us" aria-label="Contact Us Form"></contact-us-form> 
            </div>
        </div>
    </div>
</template> 

<script>
import BannerSlider from '@/common/components/base/BaseBannerSlider.vue'
import ContactUsForm from '@/modules/contactUs/componenets/ContactUsForm.vue' 

export default {
    components: { BannerSlider, ContactUsForm },
    data() {
        return {
            bannerSlides: [
                {
                    image: 'new_contactUs__banner.png',
                    title: 'Contact US',
                    subtitle:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
.contactUs {
    background: #f8f8f8;
    box-shadow: 0 0 12px 0px rgba($color: #000000, $alpha: 0.1);
    .mainBanner {
        margin-bottom: unset;
    }
    .contentWrapper{
        background:#fff;
        padding:rem(10px) 0;
    }
}
</style>
