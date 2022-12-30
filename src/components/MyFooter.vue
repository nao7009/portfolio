// MyFooter.vue
<template>
        <footer class="footer">
                <div class="footer__contents">
                    <div class="footer__contents--sns">
                        <ul>
                            <li><a href="https://twitter.com/?lang=ja"><img src="../assets/images/twitter.png"></a></li>
                            <li><a href="https://www.instagram.com/"><img src="../assets/images/instagram.png"></a></li>
                            <li><a href="https://ja-jp.facebook.com/"><img src="../assets/images/facebook.png"></a></li>
                        </ul>
                    </div>
                    <div class="footer__contents--top">
                        <a href="#"><img src="../assets/images/top.png"></a>
                    </div>               
                </div>
                <div class="footer__copy">
                    <p>© Shimojo-na 2022</p>
                </div>
        </footer>
</template>

<script>
export default {
  name: 'MyFooter',
}

</script>

<style lang="scss" scoped>
.footer{
    width: 85%;
    margin: 0 auto;
    @include mq('max','md') {
        width: 100%;
        padding: 5px;
    }
    &__contents{
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #777;
        &--sns{
            ul{
                display: flex;
                align-items: center;
                @include mq('max','md') {
                    margin: 5px;
                }
                li{
                    display: block;
                    width: 50px;
                    height: 50px;
                    margin: 5px;
                    padding: 5px;
                    @include mq('max','md') {
                        width: 30px;
                        height: 30px;
                        margin: 5px;
                        padding: 5px;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                        @include mq('max','md') {
                        }                      
                    }
                }
            }
        }
        &--top{
            z-index: 99;
            a{
                display: block;
                margin-top: 30px;
                width: 30px;
                height: 30px;
                img{
                    width: 100%;
                    height: 100%;
                    @include mq('max','md') {
                        width: 20px;
                        height: 20px;
                    }
                }
                @include mq('max','md') {
                    margin-top: 20px;
                }
            }
        }
    }
    &__copy{
        border-top: 1px solid #777;
        p{
            text-align: center;
            font: normal 12px sans-serif;
            color: #777;
            @include mq('max','md') {
                font: normal 10px sans-serif;
            }
        }
    }
}
</style>