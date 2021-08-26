export default {
    methods: {
        scrollToView() {
            var currentUrl = window.location.pathname
            var headerOffset = 45
            var arr = currentUrl.split('/')
            var path = arr[arr.length - 1]
            if (path) {
                setTimeout(() => {
                    var element = document.getElementById(path)
                    if (element) {
                        //href.scrollIntoView({block: 'top'});
                        var elementPosition =
                            element.getBoundingClientRect().top
                        var offsetPosition = elementPosition - headerOffset
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth',
                        })
                    }
                }, 100)
            }
        },
    },
    mounted() {
        this.scrollToView()
    },
    watch: {
        $route() {
            // $route(to, from) {
            this.scrollToView()
        },
    },
}
