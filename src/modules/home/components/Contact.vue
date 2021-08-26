<template>
    <div class="contact">
        <div class="container">
            <h2>{{$t("labels.contact")}}</h2>
            <div class="contact--wrapper">
                <contact></contact>
            </div>
        </div>
    </div>
</template>

<script>
import contact from "./partials/contact.vue";
export default {
    components: { contact },
}
</script>

<style lang="scss" scoped>
.contact {
    background:#fff;
    padding:rem(45px) 0;
    h2 {
        font-size: rem(35px);
        font-weight: 900;
        color: var(--secondary);
        text-transform: uppercase;
        margin-bottom: rem(35px);
        @media screen and (max-width: 991px) {
            font-size: rem(25px);
        }
    }
}
</style>
