export default {
    data() {
        return {
            videoUrlSet: "",
            showModal: false
        }
    },
    methods: {
        closeModal(modal) {
            this.showModal = modal
            this.videoUrlSet = ""
        },
        openModal(modal, videoUrl) {
            this.showModal = true
            this.videoUrlSet = videoUrl
        }
    },
     watch:{
        showModal:function(val){
               if (val) {
                    setTimeout(() => {
                        document.querySelector('.modal.show .close').focus();
                    }, 2000);
             }
        }
    }
}