<template>
    <div class="search-field">
        <form role="search">
            <fieldset>
                <legend class="visuallyhidden">&nbsp;</legend>
                <div class="FormField">
                    <div class="FormField__input">
                        <input
                            type="text"
                            aria-label=""
                            :placeholder="$i18n.locale==='en'?'LOREM IPSUM LOREM IPSUM':'عربى'"
                        />
                    </div>
                    <div class="FormField__button">
                        <button>
                            <i>{{$i18n.locale==='en'?'Search':'بحث'}}</i>
                            <span
                                ><svg-icon icon-id="form-search-icon"></svg-icon
                            ></span>
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
        <span class="search__results">
            {{$i18n.locale==='en'?'About 1 result (0.49 seconds)':'حوالي نتيجة واحدة (0.49 ثانية)'}}
        </span>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search-field {
    padding-top: rem(10px);
    .visuallyhidden {
        width: 0;
        height: 0;
    }
    .FormField {
        display: flex;
        align-items: flex-end;
        // @media screen and (max-width: 400px) {
        //     flex-direction: column;
        //     align-items: center;
        //     justify-content: center;
        // }
        &__input {
            width: 85%; 
            @media screen and (max-width: 1200px) {
                width: auto;
                flex: 1;
            }
            // @media screen and (max-width: 400px) {
            //     width: 100%;
            // }
            
            input {
                width: 100%;
                padding: rem(18px);
                border: unset;
                outline: unset;
                border-bottom: 2px solid var(--secondary);
                font-size: rem(24px);
                color: var(--primary);
                padding-left: unset;
                font-weight: 800;
                text-transform: uppercase;
                &::placeholder {
                    color: var(--primary);
                    opacity: 1;
                }
                @media screen and (max-width:575px) {
                    font-size: rem(20px);
                    &::placeholder {
                       font-size: rem(20px); 
                    }
                }
            }
        }
        &__button {
            i{
                font-style: normal;
                @media screen and (max-width:575px){
                    display:none;
                }
            }
            @media screen and (max-width: 1200px) {
                width: auto;
                flex: 0 0 rem(195px);
            }
            @media screen and (max-width: 767px){
                flex: 0 0 rem(170px);
            }
            @media screen and (max-width: 575px){
                flex: 0 0 62px;
            }
            // @media screen and (max-width: 400px) {
            //     margin-top: rem(20px);
            //     margin-bottom: rem(10px);
            //     flex: 1;
            //     width: 100%
            // }
            button {
                background: var(--primary);
                color: #fff;
                padding: rem(24px);
                font-size: rem(24px);
                border: unset;
                outline: unset;
                margin-left: rem(30px);
                display: flex;
                position: relative;
                align-items: center;
                transition: .3s all ease-in;
                @media screen and (max-width:575px) {
                    margin-left: rem(15px);
                
                }
                
                span {
                    display: flex;
                    width: 30px;
                    height: 30px;
                    margin-left: rem(20px);
                    /deep/ svg {
                        width: 30px;
                        height: 30px;
                    }
                    @media screen and (max-width:575px) {
                        margin-left: 0;
                        align-items: center;
                        justify-content: center;
                    }
                }
                &:focus {
                    &::before {
                        content: '';
                        position: absolute;
                        width: 115%;
                        height: 135%;
                        border: 2px dashed var(--primary);
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                &:hover {
                    background-color: var(--secondary);
                }
                // @media screen and (max-width: 400px) {
                //     margin-left: auto;
                //     width: 100%;
                //     justify-content: center;
                // }
                @media screen and (max-width: 767px){
                    padding: rem(12px);          
                    span{
                        /deep/ svg {
                            zoom: 0.8
                        }
                    }
                }
            }
        }
    }
    
    
}
.search__results {
    display: inline-block;
    font-size: rem(16px);
    margin-top: rem(13px);
    font-weight: 800;
    color: var(--secondary);
    text-transform: uppercase;
    @media screen and (max-width: 575px){
        text-align: center;
        display: block;
    }
}
[lang='ar']{
    .search-field {
        .FormField {
            &__input {
                input {
                    padding-right: unset;
                }
            }
            &__button {
                button {
                    margin-right: rem(30px);
                    margin-left:0;
                    @media screen and (max-width:575px) {
                        margin-right: rem(15px);
                        margin-left:0;
                    }
                    span {
                        margin-right: rem(20px);
                        margin-left:0;
                        @media screen and (max-width:575px) {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
        
        
    }
}
</style>
