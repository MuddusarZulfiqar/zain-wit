<template>
    <div class="pressReleaseCard" :aria-label="ariaLabel" role="region">
        <div class="row">
            <div class="col-lg-4 col-sm-6 card_parent" v-for="card in cardData" :key="card.index">
                <div class="card">
                    <div class="image">
                        <img
                            :src="require(`@/assets/images/press-release/${card.image}`)" 
                            :alt="card.title"
                            class="img-fluid"
                        />
                    </div>
                    <div class="date" :id="card.index">{{card.date}}</div>  
                    <h4>
                        {{card.title}}
                    </h4>
                    <router-link :to="card.link"  :aria-describedby="card.index"><span class="btn btn-secondary">Explore more</span> </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        ariaLabel: String,
        cardData:Array
    },
}
</script>

<style lang="scss" scoped>
.pressReleaseCard {
    .card_parent{
        margin-bottom: rem(30px);  
    }
    .card {
        margin-bottom: unset;
        border-radius: 0;
        padding: 25px;
        max-width: 390px;
        box-shadow: 0px 0px 13px -3px rgba($color: black, $alpha: 0.5);
        transition: 0.3s ease background;
        height: 100%;
        display: flex;
        flex-direction: column;
        &:hover{
            background: var(--secondary);
            div,h4,a{
                color: #fff !important;
                --highlight:#fff !important;
            }
            .btn-secondary{
                background: var(--primary);
                &:focus{
                    outline-color:#fff !important;
                }
            }
        }
        @media screen and (max-width:1199px){
            padding:16px;
        }
        .image {
            height: 230px;
            width: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: top;
            }
        }
        .date {
            font-size: 22px;
            color: var(--primary);
            padding: rem(20px) 30px;
            font-weight: 700;
            position: relative;
            text-transform: uppercase;
            &::before {
                position: absolute;
                content: '';
                width: 25px;
                height: 4px;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                background: var(--primary);
            }
        }
        h4 {
            font-size: rem(22px);
            color: #000000;
            margin-bottom:rem(20px);
            outline: unset !important;
            a{
                display: inline-block;
                color: #000000;
                text-decoration: none;
                padding: 3px;
                outline-offset:-3px;
                @include truncate(5,1.3);
                &:hover{
                    color: var(--primary);
                }
            }
            & + a{
                margin-top: auto;
                max-width: max-content;
            }
        }
        @media screen and (max-width:767px){
            .image{
                height:200px;
            }
            p {
                font-size: rem(25px);
                min-height:100px;
            }
        }
        @media screen and (max-width:991px){
            display: block;
            margin: auto;
             p {
                font-size: rem(25px);
                min-height:70px;
            }
        }
    }
    
}
[lang='ar']{
    .pressReleaseCard {
        .card {
            .date {
                &::before {
                    right: 0;
                    left:auto;
                }
            }
        }
        
    }
}
</style>
