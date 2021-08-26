<template>
    <div class="overflow-auto">
        <b-pagination-nav
            :link-gen="linkGen"
            :number-of-pages="this.pageNumber"
            align="center"
            use-router
        ></b-pagination-nav>
    </div>
</template>

<script>
export default {
    props: { pageNumber: Number },
    methods: {
        linkGen(pageNum) {
            return pageNum === 1 ? '?' : `?page=${pageNum}`
        },
    },
}
</script>

<style lang="scss" scoped>
.overflow-auto {
    width: 100%;
}
</style>
