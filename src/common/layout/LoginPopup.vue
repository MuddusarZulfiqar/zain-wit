<template>
    <div class="loginModal">
        <div id="loginModal" class="modal">
            <div class="modal-content">
                <a
                    href="#"
                    class="close"
                    aria-label="Close Popup"
                    role="button"
                    @click.prevent.stop
                >
                    <span class="">
                        <svg-icon
                            icon-id="cross-Icon"
                            icon-viewbox="0 0 384 384"
                        ></svg-icon>
                    </span>
                </a>
                <h2 class="modal-title" id="dialog1_label">Welcome back !</h2>
                <form role="login credentials">
                    <fieldset>
                        <legend class="visuallyhidden">&nbsp;</legend>
                        <div class="form-group email-field">
                            <div class="left-icon">
                                <span class="icon"></span>
                                <input
                                    type="text"
                                    class="form-control"
                                    aria-label=""
                                    placeholder="Enter your Email"
                                />
                            </div>
                        </div>
                        <div class="form-group pw-field">
                            <div class="left-icon">
                                <span class="icon"></span>
                                <input
                                    type="password"
                                    class="form-control"
                                    aria-label=""
                                    placeholder="Enter your Password"
                                />
                            </div>
                        </div>
                        <button class="btn btn-primary" type="submit">
                            Login
                        </button>
                    </fieldset>
                </form>
            </div>
            <div class="back-drop"></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        modalShow: function () {
            var modal = document.getElementById('loginModal')
            modal.style.display = 'block'
            modal.classList.add('OpenModal')
        },
        modalHide: function () {
            var modal = document.getElementById('loginModal')
            modal.style.display = 'none'
            modal.classList.remove('OpenModal')
        },
    },
    mounted() {
        var modal = document.getElementById('loginModal')
        document.querySelectorAll('.login-modal-btn').forEach((element) => {
            element.addEventListener('click', this.modalShow)
        })
        var span = document.getElementsByClassName('close')[0]
        span.addEventListener('click', this.modalHide)
        window.addEventListener('click', function (event) {
            var modal = document.getElementById('loginModal')
            var background = document.getElementsByClassName('back-drop')[0]
            if (event.target == background) {
                modal.style.display = 'none'
            }
        })
        document.addEventListener('keydown', (e) => {
            if (
                document
                    .getElementById('loginModal')
                    .classList.contains('OpenModal')
            ) {
                if (e.keyCode == this.keys.esc) {
                    document.querySelector('.close').click()
                }
            }
        })
    },
}
</script>

<style lang="scss" scoped>
.loginModal {
    --highlight: #eada2f;
    position: absolute;
    // left:50%;
    // transform: translateX(-50%);
    right: calc((100% - 1200px) / 2);
    top: 80px;
    @media screen and (max-width:1200px) {
        left:50%;
        transform: translateX(-50%);
    }
    @media screen and (max-width: 991px) {
        right: auto;
        left: 50%;
        transform: translate(-50%, -50%);
        bottom: auto;
        top: 50%;
        position: fixed;
        width: 100%;
    }
    // @media screen and (max-width:991px) and (min-width:768px){
    //     top:25px;
    //     right:100px;
    // }
    // @media only screen and (device-width: 812px) and (device-height: 375px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape) {
    //     top:25px;
    // }
    // @media only screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape) {
    //     top:25px;
    // }
    .modal {
        position: relative;
        display: none;
        overflow: visible;
        .back-drop {
            position: fixed;
            z-index: -1;
            padding-top: 100px;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgb(0, 0, 0);
            background-color: rgba(0, 0, 0, 0.7);
            @media screen and (max-width: 991px) {
                transform: translate(-50%, -50%);
                left: 50%;
                top: 50%;
                width: 100vw;
                height: 100vh;
            }
        }
        .modal-content {
            background-color: #fff;
            margin: auto;
            padding: rem(65px) rem(68px) rem(52px) rem(70px);
            width: 530px;
            // right: calc((530px - 1240px + 30px) / 2);
            border-radius: unset;
            // top: 130px;
            text-align: left;
            @media screen and (max-width:991px){
               padding: rem(45px); 
            }
            @media screen and (max-width: 767px) {
                padding: rem(30px);
                width: 95%;
            }
            fieldset {
                @media screen and (max-width: 767px) {
                    text-align: center;
                }
            }

            .close {
                color: #fff;
                float: right;
                font-size: 28px;
                font-weight: bold;
                position: absolute;
                right: -44px;
                top: 0px;
                width: 30px;
                height: 30px;
                opacity: 1;
                cursor: pointer;
                @media screen and (max-width: 991px) {
                    width: 25px;
                    height: 25px;
                    right: 15px;
                    color: #000000;
                    top: 15px;
                }
                &:focus {

                }
            }
            .modal-title {
                font-size: rem(36px);
                font-weight: 900;
                text-align: left;
                color: var(--primary);
                margin-bottom: rem(25px);
                line-height: 1;
                @media screen and (max-width: 767px) {
                    font-size: rem(30px);
                    margin-bottom: 25px;
                }
            }
            form {
                .form-group {
                    &.email-field {
                        .icon {
                            background-image: url("data:image/svg+xml,%3Csvg id='Capa_1' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%236e337a;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M437,331a255.08,255.08,0,0,0-97.28-61A147.94,147.94,0,0,0,404,148C404,66.39,337.61,0,256,0S108,66.39,108,148a147.94,147.94,0,0,0,64.26,122A256.41,256.41,0,0,0,0,512H40c0-119.1,96.9-216,216-216s216,96.9,216,216h40A254.33,254.33,0,0,0,437,331ZM148,148A108,108,0,1,1,256,256,108.12,108.12,0,0,1,148,148Z' transform='translate(0 0)'/%3E%3C/svg%3E");
                        }
                    }
                    &.pw-field {
                        .icon {
                            background-image: url("data:image/svg+xml,%3Csvg id='Capa_1' data-name='Capa 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%236e337a;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M113,326a20,20,0,0,1,20,20h0a20,20,0,0,1-40,0h0A20,20,0,0,1,113,326Zm55,20h0a20,20,0,0,0,40,0h0a20,20,0,0,0-40,0Zm75,0h0a20,20,0,0,0,40,0h0a20,20,0,0,0-40,0Zm76,0h0a20,20,0,0,0,40,0h0a20,20,0,0,0-40,0Zm90-4V268a40,40,0,0,0-40-40H81a40,40,0,0,0-40,40V432a40,40,0,0,0,40,40H369a40,40,0,0,0,40-40,20,20,0,0,1,40,0,80.09,80.09,0,0,1-80,80H81A80.09,80.09,0,0,1,1,432V268a80.09,80.09,0,0,1,80-80h24V117.47C105,52.69,158.79,0,225,0S345,52.69,345,117.47V188h24a80.09,80.09,0,0,1,80,80v74a20,20,0,0,1-40,0ZM145,188H305V117.47C305,74.75,269.08,40,225,40s-80,34.75-80,77.47V188Z' transform='translate(-1)'/%3E%3C/svg%3E");
                        }
                    }
                    .form-control {
                        border: 0;
                        border-bottom: solid 1px #cec9d4;
                        font-weight: 700;
                    }
                }
                button {
                    padding-right: 80px;
                    padding-left: 80px;
                    font-weight: bold;
                }
            }
        }
    }
}
</style>
