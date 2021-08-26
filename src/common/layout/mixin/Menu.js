import { gsap } from 'gsap'
export default {
    data() {
        return {
            isMenuOpen: false,
            isOpenSearch: false,
        }
    },
    created() {
        //gsap.from(".menuWrapper",{y: "-100%"});
    },
    mounted() {
        document.querySelector(".menuWrapper").addEventListener('keydown', function(e) {
            if (
                document
                .body.classList.contains('menuOpen')
            ) {
                if (e.keyCode == '27') {
                    this.closeMenu();
                }
            }
        }.bind(this))
    },
    methods: {
        openMenu: function() {
            // this.isMenuOpen=true;
            // console.log("enter");
            this.isMenuOpen = true
            this.toggleMenu()
        },
        closeMenu: function() {
            this.isMenuOpen = false
            this.toggleMenu()
        },
        toggleMenu: function() {
            document.body.classList.toggle('menuOpen')
            if (this.isMenuOpen) {
                var tl = gsap.timeline()
                tl.to('.menuWrapper', { autoAlpha: 1, duration: 0.05 })
                    .to(
                        '.menuWrapper', { opacity: 1, zIndex: 999, y: '0%', duration: 0.5 },
                        '+=0.1',
                    )
                    .fromTo(
                        '.menuWrapper .mainNav > li', { y: '100%', opacity: 0 }, { y: '0%', opacity: 1, duration: 0.4, stagger: 0.15 },
                    )
                setTimeout(() => {
                    document.querySelector('.menuWrapper').focus()
                }, 600)
                document
                    .querySelector('.menuWrapper')
                    .setAttribute('aria-hidden', false)
            } else {
                document.body.classList.remove('menuOpen')
                var tl = gsap.timeline()
                tl
                    
                    .to('.menuWrapper', {
                        autoAlpha: 0,
                        opacity: 0,
                        zIndex: -999,
                        y: '100%',
                        duration: 0.5
                    })
                    .fromTo(
                        '.menuWrapper .mainNav > li', { y: '0%', opacity: 1 }, { y: '100%', opacity: 0, duration: 0.4, stagger: 0.15 },
                    )
                document.querySelector('.menu').focus()
                document
                    .querySelector('.menuWrapper')
                    .setAttribute('aria-hidden', true)
                var nav = document.querySelectorAll(".mainNav > li");
                for (var i = 0; i < nav.length; i++) {
                    var button = nav[i].querySelector("button");
                    if (button) {
                        button.setAttribute('aria-expanded', 'false');
                        nav[i].querySelector("ul").classList.remove("show");
                        nav[i].querySelector("ul").removeAttribute("style");
                        nav[i].classList.remove("active");
                    }

                }
            }
        },
    },
}