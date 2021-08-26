<template>
    <div>
        <svg fill="currentColor" :viewBox="iconViewbox" :alt="iconAlt">
            <use :xlink:href="`#${iconId}`"></use>
        </svg>
    </div>
</template>

<script>
export default {
    props: {
        iconId: String,
        iconViewbox: String,
        iconAlt: String,
    },
}
</script>

<style lang="scss" scoped></style>
